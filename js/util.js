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

  var isEscape = function (evt) {
    return evt.key === ESC_KEY;
  };

  var isEnter = function (evt) {
    return evt.key === ENTER_KEY;
  };

  window.main = {
    getRandomNumberInRange: getRandomNumberInRange,
    getRandomElement: getRandomElement,
    isEscape: isEscape,
    isEnter: isEnter
  };
})();

