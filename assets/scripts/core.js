// Core.js

/**
 * Function: debug
 * @return: Wraps console functions so that they can be used without worrying about breaking browsers
 */
var DEBUG_MODE = true;
function log() {
    if( DEBUG_MODE && window.console ) {
        console.info( arguments );
    }
}// End of debug()

let UI = {
	menuPrimary: '#nav-primary',
	menuActiveClass: 'open',
	toggleMenu: function ( element ){
		var button = $('.menu-toggle');

		if ( button.hasClass( this.menuActiveClass ) ) {
			button.removeClass( this.menuActiveClass );
			$(this.menuPrimary).removeClass( this.menuActiveClass );
			$('body').removeClass('menu-' + this.menuActiveClass );
		}
		else {
			button.addClass( this.menuActiveClass );
			$(this.menuPrimary).addClass( this.menuActiveClass );
			$('body').addClass('menu-' + this.menuActiveClass );
		}

		button.blur();
	},
	dismissMenu: function(){
		$('.menu-toggle').removeClass( this.menuActiveClass );
		$(this.menuPrimary).removeClass( this.menuActiveClass );
		$('body').removeClass('menu-' + this.menuActiveClass );
	},
	sendMessage: function() {
		var emailPrefix = 'hello';
		var subject = 'Hello from [replace me with your name]';
		var message = 'Hi Jon, I am [replace me with your name] and I just wanted to say...';

		window.location.href = `mailto:${emailPrefix}@neverdesign.net?subject=${subject}&body=${message}`;
	},
	scrollToTop: function(){
		$(window).scrollTop(0);
		UI.dismissMenu();
	},
	toggleMoreText: function( element ){
		var btn = $(element);
		var target = btn.data('target');
		var hiddenClass = 'd-none';
		var moreText = btn.data('more');
		var lessText = btn.data('less')

		console.log('target: ', target );
		if( $(target).hasClass(hiddenClass) ){
			$(target).removeClass(hiddenClass);
			btn.text(lessText);
		}
		else {
			$(target).addClass(hiddenClass);
			btn.text(moreText);
		}

	}
}; // End UI Prototype

window.UI = UI;

/**
 * Document Ready
 */
$(document).ready(function ($) {
    // Populate with document ready scripts
});// End $(document).ready()
