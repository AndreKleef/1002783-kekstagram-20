'use strict';

(function () {

  var PHOTOS_QUANTITY = 25;

  var successHandler = function (photos) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < PHOTOS_QUANTITY; i++) {
      fragment.appendChild(window.data.collectPhoto(photos[i]));
    }
    window.data.similarListElement.appendChild(fragment);
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; width: 50%; margin: 0 auto; border-radius: 20px; padding: 7px 0; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.top = '30px';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(successHandler, errorHandler);
})();


