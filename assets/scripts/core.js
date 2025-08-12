// Core.js
/**
 * Function: log
 * @return: Wraps console functions so that they can be used without worrying about breaking browsers
 */
let DEBUG_MODE = true;
function log() {
    if( DEBUG_MODE && window.console ) {
        console.info( arguments );
    }
}// End of log()

let UI = {
	menuPrimary: '#nav-primary',
	menuActiveClass: 'open',
	toggleMenu: function ( element ){
		let button = $('.menu-toggle');

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

		button.trigger('blur');
	},
	dismissMenu: function(){
		$('.menu-toggle').removeClass( this.menuActiveClass );
		$(this.menuPrimary).removeClass( this.menuActiveClass );
		$('body').removeClass('menu-' + this.menuActiveClass );
	},
	sendMessage: function() {
		let emailPrefix = 'hello';
		let subject = 'Hello from [replace me with your name]';
		let message = 'Hi Jon, I am [replace me with your name] and I just wanted to say...';

		window.location.href = `mailto:${emailPrefix}@neverdesign.net?subject=${subject}&body=${message}`;
	},
	scrollToTop: function(){
		$(window).scrollTop(0);
		UI.dismissMenu();
	},
	toggleMoreText: function( element ){
		let btn = $(element);
		let target = btn.data('target');
		let hiddenClass = 'd-none';
		let moreText = btn.data('more');
		let lessText = btn.data('less')

		console.log('target: ', target );
		if( $(target).hasClass(hiddenClass) ){
			$(target).removeClass(hiddenClass);
			btn.text(lessText);
		}
		else {
			$(target).addClass(hiddenClass);
			btn.text(moreText);
		}

	},
	loadPreviewImage: function ( element ){
		let figureElement = $(element).clone();
		let modal = $('#previewImage');
		let image = figureElement.children('img');

		log('figureElement', figureElement);
		log('image', image);
		
		modal.find('.modal-title').html(figureElement.find('figcaption'));
		modal.find('.modal-body').html(image);
	},
	clearPreviewImage: function(){
		let modal = $('#previewImage');

		modal.find('.modal-title').html('');
		modal.find('.modal-body').html('');
	}
}; // End UI Prototype

window.UI = UI;

/**
 * Document Ready
 */
$(document).ready(function ($) {
    // Populate with document ready scripts
});// End $(document).ready()
