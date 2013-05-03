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
			var state = event.slide.getAttribute('data-bespoke-state');
			state && deck.parent.classList[method](state);
		};

		deck.on('activate', modifyState.bind(null, 'add'));
		deck.on('deactivate', modifyState.bind(null, 'remove'));
	};

}(bespoke));