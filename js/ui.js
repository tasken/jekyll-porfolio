(function (window, document) {

	var layout   = document.getElementById('layout'),
		menu     = document.getElementById('menu'),
		menuLink = document.getElementById('menuLink');
		body1 = document.getElementsByTagName('body')[0];

	function toggleClass(element, className) {
		var classes = element.className.split(/\s+/),
			length = classes.length,
			i = 0;

		for(; i < length; i++) {
		  if (classes[i] === className) {
			classes.splice(i, 1);
			break;
		  }
		}
		// The className is not found
		if (length === classes.length) {
			classes.push(className);
		}

		element.className = classes.join(' ');
	}

	menuLink.onclick = function (e) {
		var active = 'active';
		var fixed = 'fixed';

		e.preventDefault();
		toggleClass(layout, active);
		toggleClass(menu, active);
		toggleClass(menuLink, active);
		toggleClass(body1, fixed);
	};

}(this, this.document));
