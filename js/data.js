'use strict';

(function () {

  var similarListElement = document.querySelector('.pictures');
  var similarPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');

  var PHOTOS_QUANTITY = 25;
  var PHOTOS_QUANTITY_RANDOM = 10;

  var collectPhoto = function (photo) {
    var photoElement = similarPhotoTemplate.cloneNode(true);

    photoElement.querySelector('.picture__likes').textContent = photo.likes;
    photoElement.querySelector('img').src = photo.url;
    photoElement.querySelector('img').alt = photo.description;
    photoElement.querySelector('.picture__comments').textContent = photo.comments.length;

    return photoElement;
  };

  var renderPhoto = function (data) {
    var takeNumber = data.length > PHOTOS_QUANTITY ? PHOTOS_QUANTITY : data.length;
    similarListElement.innerHTML = '';
    for (var i = 0; i < takeNumber; i++) {
      similarListElement.appendChild(collectPhoto(data[i]));
    }
  };

  var renderRandomPhoto = function (data) {
    var takeNumber = data.length > PHOTOS_QUANTITY_RANDOM ? PHOTOS_QUANTITY_RANDOM : data.length;
    similarListElement.innerHTML = '';
    for (var i = 0; i < takeNumber; i++) {
      similarListElement.appendChild(collectPhoto(data[i]));
    }
  };

  window.data = {
    collectPhoto: collectPhoto,
    similarListElement: similarListElement,
    renderPhoto: renderPhoto,
    renderRandomPhoto: renderRandomPhoto
  };
})();
