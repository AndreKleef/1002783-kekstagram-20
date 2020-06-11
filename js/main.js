'use strict';

var similarListElement = document.querySelector('.pictures');
var similarPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');

var getRandomNumberInRange = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var fragment = document.createDocumentFragment();

var COMMENTS_NAMES = ['Артем', 'Андрей', 'Алина', 'Игорь', 'Кекс', 'Гоша', 'Петя'];
var COMMENTS_MESSAGES = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
var PHOTOS_QUANTITY = 25;
var MAX_COMMENTS = 99;

var generateComment = function () {

  var randomCommentNameIndex = Math.floor(Math.random() * COMMENTS_NAMES.length);
  var randomCommentMessageIndex = Math.floor(Math.random() * COMMENTS_MESSAGES.length);

  var comment = {
    avatar: 'img/avatar-' + getRandomNumberInRange(1, 6) + '.svg',
    message: COMMENTS_MESSAGES[randomCommentMessageIndex],
    name: COMMENTS_NAMES[randomCommentNameIndex]
  };

  return comment;
};

var generateCommentsList = function () {

  var comments = [];

  for (var i = 0; i < MAX_COMMENTS; i++) {
    comments.push(generateComment());
  }
  var randomCommentQuantityIndex = Math.floor(Math.random() * comments.length);

  return randomCommentQuantityIndex;
};

var createPhoto = function (index) {

  var photo = {
    url: 'photos/' + index + '.jpg',
    description: 'Описание',
    likes: getRandomNumberInRange(15, 200),
    comments: generateCommentsList()
  };

  return photo;
};

var createPhotos = function () {
  var photos = [];

  for (var i = 0; i < PHOTOS_QUANTITY; i++) {
    photos.push(createPhoto(i + 1));
  }

  return photos;
};

var newPhotos = createPhotos();

var renderPhoto = function (photo) {
  var photoElement = similarPhotoTemplate.cloneNode(true);

  photoElement.querySelector('.picture__likes').textContent = photo.likes;
  photoElement.querySelector('img').src = photo.url;
  photoElement.querySelector('img').alt = photo.description;
  photoElement.querySelector('.picture__comments').textContent = photo.comments;

  fragment.appendChild(photoElement);
};

for (var i = 0; i < newPhotos.length; i++) {
  renderPhoto(newPhotos[i]);
}

similarListElement.appendChild(fragment);
