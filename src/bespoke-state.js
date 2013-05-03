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