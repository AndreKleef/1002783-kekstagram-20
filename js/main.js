'use strict';

(function () {
  var getRandomNumberInRange = function (min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var getRandomElement = function (array) {
    var randomIndex = Math.floor(Math.random() * array.length);

    return array[randomIndex];
  };

  var ENTER_KEY = 'Enter';
  var ESC_KEY = 'Escape';

  window.main = {
    getRandomNumberInRange: getRandomNumberInRange,
    getRandomElement: getRandomElement,
    isEscape: function (evt, action) {
      if (evt.key === ESC_KEY) {
        evt.preventDefault();
        action();
      }
    },
    isEnter: function (evt, action) {
      if (evt.key === ENTER_KEY) {
        evt.preventDefault();
        action();
      }
    }
  };
})();

