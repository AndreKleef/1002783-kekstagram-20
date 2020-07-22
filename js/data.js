'use strict';

(function () {
  var PHOTOS_QUANTITY = 25;

  var similarListElement = document.querySelector('.pictures');
  var similarPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');

  var collectPhoto = function (photo) {
    var photoElement = similarPhotoTemplate.cloneNode(true);

    photoElement.querySelector('.picture__likes').textContent = photo.likes;
    photoElement.querySelector('img').src = photo.url;
    photoElement.querySelector('img').alt = photo.description;
    photoElement.querySelector('.picture__comments').textContent = photo.comments.length;

    return photoElement;
  };

  var renderPhotos = function (data) {
    var elements = similarListElement.getElementsByClassName('picture');

    while (elements[0]) {
      elements[0].parentNode.removeChild(elements[0]);
    }

    for (var i = 0; i < PHOTOS_QUANTITY; i++) {
      similarListElement.appendChild(collectPhoto(data[i]));
    }
  };

  window.data = {
    collectPhoto: collectPhoto,
    similarListElement: similarListElement,
    renderPhotos: renderPhotos
  };
})();
