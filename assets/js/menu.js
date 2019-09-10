(function (window, document) {

    let layout, menu, menuLink, content, body;
    layout = document.getElementById('layout');
    menu = document.getElementById('menu');
    menuLink = document.getElementById('menuLink');
    content = document.getElementById('main');
    body = document.body;

    function toggleClass (element, className) {
        let classes, length;
        classes = element.className.split(/\s+/);
        length = classes.length;

        for (let i = 0; i < length; i++) {
            if (classes[i] === className) {
                classes.splice(i, 1);
                break;
            }
        }

        if (length === classes.length) {
            classes.push(className);
        }

        element.className = classes.join(' ');
    }

    function toggleAll (e) {
        const active = 'active', fixed = 'fixed';
        e.preventDefault();
        toggleClass(layout, active);
        toggleClass(menu, active);
        toggleClass(menuLink, active);
        toggleClass(body, fixed);
    }

    menuLink.onclick = function (e) {
        toggleAll(e);
    };

    content.onclick = function (e) {
        if (menu.className.indexOf('active') !== -1) { toggleAll(e); }
    };

}(this, this.document));
