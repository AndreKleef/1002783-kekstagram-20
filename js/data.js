'use strict';

(function () {

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

  window.data = {
    collectPhoto: collectPhoto,
    similarListElement: similarListElement
  };
})();
