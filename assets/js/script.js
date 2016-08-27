$(document).ready(function () {
		// Menu.
	var $menu = $('#menu');
	var $body = $('body');

	$menu.wrapInner('<div class="inner"></div>');

	$menu._locked = false;

	$menu._lock = function() {

		if ($menu._locked)
			return false;

		$menu._locked = true;

		window.setTimeout(function() {
			$menu._locked = false;
		}, 350);

		return true;

	};

	$menu._show = function() {

		if ($menu._lock())
			$body.addClass('is-menu-visible');

	};

	$menu._hide = function() {

		if ($menu._lock())
			$body.removeClass('is-menu-visible');

	};

	$menu._toggle = function() {

		if ($menu._lock())
			$body.toggleClass('is-menu-visible');

	};

	$menu
		.appendTo($body)
		.on('click', function(event) {
			event.stopPropagation();
		})
		.on('click', 'a', function(event) {

			var href = $(this).attr('href');

			event.preventDefault();
			event.stopPropagation();

			// Hide.
				$menu._hide();

			// Redirect.
				if (href == '#menu')
					return;

				window.setTimeout(function() {
					window.location.href = href;
				}, 350);

		})
		.append('<a class="close" href="#menu">Close</a>');

	$body
		.on('click', 'a[href="#menu"]', function(event) {

			event.stopPropagation();
			event.preventDefault();

			// Toggle.
				$menu._toggle();

		})
		.on('click', function(event) {

			// Hide.
				$menu._hide();

		})
		.on('keydown', function(event) {

			// Hide on escape.
				if (event.keyCode == 27)
					$menu._hide();

		});

/*$('#1').magnificPopup({
    items: [
      {
        src: 'images/1.jpg' ,
        
      },
      {
        src: 'http://vimeo.com/123123',
        type: 'iframe' // this overrides default type
      },
      {
        src: $('<div class="white-popup">Dynamically created element</div>'), // Dynamically created element
        type: 'inline'
      },
      {
        src: '<div class="white-popup">Popup from HTML string</div>', // HTML string
        type: 'inline'
      },
      {
        src: '#my-popup', // CSS selector of an element on page that should be used as a popup
        type: 'inline'
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
});*/

});


/*$(document).ready(function() {
  $('.test-popup-link').magnificPopup({
	  type: 'image'
	  // other options
	});
});*/

$('.open-popup-link').magnificPopup({
  type:'inline',
  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
});

/*$('#open-popup').magnificPopup({
    items: [
      {
        src: 'images/2.jpg' ,
        title: 'Peter & Paul fortress in SPB'
      },
      {
        src: 'http://vimeo.com/123123',
        type: 'iframe' // this overrides default type
      },
      {
        src: $('<div class="white-popup">Dynamically created element</div>'), // Dynamically created element
        type: 'inline'
      },
      {
        src: '<div class="white-popup">Popup from HTML string</div>', // HTML string
        type: 'inline'
      },
      {
        src: '#my-popup', // CSS selector of an element on page that should be used as a popup
        type: 'inline'
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
});*/