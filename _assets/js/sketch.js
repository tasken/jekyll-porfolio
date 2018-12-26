let inc = 0.1;
let scl = 40;
let zoff = 0;
let magnitude = 0.25;
let maxspeed = 2;
let opacity = 1;
let particlecount = 5000;
let timeout = 60000;

let cols, rows;
let particles = [];
let flowfield;

function setup() {
    createCanvas(windowWidth, windowHeight, P2D);

    cols = floor(width / scl);
    rows = floor(height / scl);
    flowfield = new Array(cols * rows);

    for (let i = 0; i < particlecount; i++) {
        particles[i] = new Particle();
    }

    setTimeout(noLoop, timeout);
}

function draw() {
    let yoff = 0;
    for (let y = 0; y < rows; y++) {
        let xoff = 0;

        for (let x = 0; x < cols; x++) {
            let index = (x + y * cols);
            let angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
            let v = p5.Vector.fromAngle(angle);
            v.setMag(magnitude);
            flowfield[index] = v;
            xoff += inc;
        }

        yoff += inc;
        zoff += 0.0001;
    }

    for (let i = 0; i < particles.length; i++) {
        particles[i].follow(flowfield);
        particles[i].update();
        particles[i].edges();
        particles[i].show();
    }
}

function noLoop() {
    noLoop();
}

function Particle() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.maxspeed = maxspeed;
    this.prevPos = this.pos.copy();

    this.update = function () {
        this.vel.add(this.acc);
        this.vel.limit(this.maxspeed);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    this.applyForce = function (force) {
        this.acc.add(force);
    }

    this.updatePrev = function () {
        this.prevPos.x = this.pos.x;
        this.prevPos.y = this.pos.y;
    }

    this.edges = function () {
        if (this.pos.x > width) {
            this.pos.x = 0;
            this.updatePrev();
        }
        if (this.pos.x < 0) {
            this.pos.x = width;
            this.updatePrev();
        }
        if (this.pos.y > height) {
            this.pos.y = 0;
            this.updatePrev();
        }
        if (this.pos.y < 0) {
            this.pos.y = height;
            this.updatePrev();
        }
    }

    this.follow = function (vectors) {
        let x = floor(this.pos.x / scl);
        let y = floor(this.pos.y / scl);
        let index = x + y * cols;
        let force = vectors[index];
        this.applyForce(force);
    }

    this.show = function () {
        stroke(100, opacity);
        line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
        this.updatePrev();
    }
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}
