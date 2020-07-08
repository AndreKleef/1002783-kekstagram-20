'use strict';

(function () {

  var COMMENTS_NAMES = ['Артем', 'Андрей', 'Алина', 'Игорь', 'Кекс', 'Гоша', 'Петя'];
  var COMMENTS_MESSAGES = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
  var PHOTOS_QUANTITY = 25;
  var MAX_COMMENTS = 99;
  var MINIMUM_COMMENTS_QUANTITY = 0;

  var MINIMUM_AVATAR_INDEX = 1;
  var MAXIMUM_AVATAR_INDEX = 6;

  var MINIMUM_LIKES_INDEX = 15;
  var MAXIMUM_LIKES_INDEX = 200;

  var generateComment = function () {
    var comment = {
      avatar: 'img/avatar-' + window.main.getRandomNumberInRange(MINIMUM_AVATAR_INDEX, MAXIMUM_AVATAR_INDEX) + '.svg',
      message: window.main.getRandomElement(COMMENTS_MESSAGES),
      name: window.main.getRandomElement(COMMENTS_NAMES)
    };

    return comment;
  };

  var generateComments = function () {
    var randomCommentQuantity = window.main.getRandomNumberInRange(MINIMUM_COMMENTS_QUANTITY, MAX_COMMENTS);
    var comments = [];

    for (var i = MINIMUM_COMMENTS_QUANTITY; i < randomCommentQuantity; i++) {
      comments.push(generateComment());
    }

    return comments;
  };

  var createPhoto = function (index) {
    var photo = {
      url: 'photos/' + index + '.jpg',
      description: 'Описание',
      likes: window.main.getRandomNumberInRange(MINIMUM_LIKES_INDEX, MAXIMUM_LIKES_INDEX),
      comments: generateComments()
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

  window.gallery = {
    createPhotos: createPhotos()
  };

})();


