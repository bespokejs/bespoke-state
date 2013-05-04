/*!
 * bespoke-state v0.1.0
 *
 * Copyright 2013, Mark Dalgleish
 * This content is released under the MIT license
 * http://mit-license.org/markdalgleish
 */

(function(bespoke) {

	bespoke.plugins.state = function(deck) {
		var modifyState = function(method, event) {
			var attr = event.slide.getAttribute('data-bespoke-state') || '',
				states = attr.split(' ');

			for (var i = 0, l = states.length; i < l; i++) {
				/* Need to do this since splitting an empty string results in
				 * an array containing an empty string. */
				if (!states[i]) continue;
				deck.parent.classList[method](states[i]);
			}
		};

		deck.on('activate', modifyState.bind(null, 'add'));
		deck.on('deactivate', modifyState.bind(null, 'remove'));
	};

}(bespoke));
