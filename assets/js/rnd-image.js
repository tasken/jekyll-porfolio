---
---

var imagesObject = [
    {
        url: 'brothers.jpg',
        alt: 'Brothers'
    },
    {
        url: 'farm.jpg',
        alt: 'Farm'
    },
    {
        url: 'road.jpg',
        alt: 'Road'
    }
];
var oImg = document.createElement('img');
var currentImage = imagesObject[Math.floor(Math.random() * imagesObject.length)];
oImg.setAttribute('src', '{{ site.baseurl }}/img/ui/' + currentImage.url);
oImg.setAttribute('class', 'fade-in');
oImg.setAttribute('alt', currentImage.alt);

document.getElementById('rnd-image').appendChild(oImg);
