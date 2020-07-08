'use strict';

(function () {

  var similarListElement = document.querySelector('.pictures');
  var similarPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');

  var fragment = document.createDocumentFragment();
  var newPhotos = window.gallery.createPhotos;

  var renderPhoto = function (photo) {
    var photoElement = similarPhotoTemplate.cloneNode(true);

    photoElement.querySelector('.picture__likes').textContent = photo.likes;
    photoElement.querySelector('img').src = photo.url;
    photoElement.querySelector('img').alt = photo.description;
    photoElement.querySelector('.picture__comments').textContent = photo.comments.length;

    fragment.appendChild(photoElement);
  };

  for (var i = 0; i < newPhotos.length; i++) {
    renderPhoto(newPhotos[i]);
  }

  similarListElement.appendChild(fragment);

})();
