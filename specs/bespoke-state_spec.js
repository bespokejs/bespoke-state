(function() {
	"use strict";

	describe("bespoke-state", function() {

		var PARENT_TAG = 'article',
			SLIDE_TAG = 'section',
			NO_OF_SLIDES = 10,
			NON_STATE_SLIDE_INDEX = 5,
			article,
			slides,
			deck;

		var createDeck = function() {
				slides = [];

				article = document.createElement(PARENT_TAG);
				for (var i = 0; i < NO_OF_SLIDES; i++) {
					slides.push(document.createElement(SLIDE_TAG));
					if (i !== NON_STATE_SLIDE_INDEX) {
						slides[i].setAttribute('data-bespoke-state', 'state-' + i);
					}
					article.appendChild(slides[i]);
				}

				document.body.appendChild(article);

				deck = bespoke.from(PARENT_TAG, {
					state: true
				});
			},
			destroyDeck = function() {
				document.body.removeChild(article);
			};

		afterEach(destroyDeck);

		describe("when a slide with a 'data-bespoke-state' attribute is activated", function() {

			beforeEach(function() {
				createDeck();
				deck.slide(1);
			});

			it("should add the state to the parent", function() {
				expect(deck.parent.classList.contains('state-1')).toBe(true);
			});

			describe("when another slide is activated", function() {

				beforeEach(function() {
					deck.slide(0);
				});

				it("should remove the state from the parent", function() {
					expect(deck.parent.classList.contains('state-1')).toBe(false);
				});

			});

		});

		describe("when a slide without a 'data-bespoke-state' attribute is activated", function() {

			beforeEach(function() {
				createDeck();
				deck.slide(NON_STATE_SLIDE_INDEX);
			});

			it("should leave the parent class untouched", function() {
				expect(deck.parent.className).toBe('bespoke-parent');
			});

		});

	});

}());