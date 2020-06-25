'use strict';

var similarListElement = document.querySelector('.pictures');
var similarPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');

var fragment = document.createDocumentFragment();

var COMMENTS_NAMES = ['Артем', 'Андрей', 'Алина', 'Игорь', 'Кекс', 'Гоша', 'Петя'];
var COMMENTS_MESSAGES = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
var PHOTOS_QUANTITY = 25;
var MAX_COMMENTS = 99;
var MINIMUM_COMMENTS_QUANTITY = 0;

var MINIMUM_AVATAR_INDEX = 1;
var MAXIMUM_AVATAR_INDEX = 6;

var MINIMUM_LIKES_INDEX = 15;
var MAXIMUM_LIKES_INDEX = 200;

var getRandomNumberInRange = function (min, max) {

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var getRandomElement = function (array) {
  var randomIndex = Math.floor(Math.random() * array.length);

  return array[randomIndex];
};

var generateComment = function () {
  var comment = {
    avatar: 'img/avatar-' + getRandomNumberInRange(MINIMUM_AVATAR_INDEX, MAXIMUM_AVATAR_INDEX) + '.svg',
    message: getRandomElement(COMMENTS_MESSAGES),
    name: getRandomElement(COMMENTS_NAMES)
  };

  return comment;
};

var generateComments = function () {
  var randomCommentQuantity = getRandomNumberInRange(MINIMUM_COMMENTS_QUANTITY, MAX_COMMENTS);
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
    likes: getRandomNumberInRange(MINIMUM_LIKES_INDEX, MAXIMUM_LIKES_INDEX),
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

var newPhotos = createPhotos();

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

var setupOpen = document.querySelector('.img-upload__label');
var setup = document.querySelector('.img-upload__overlay');
var setupClose = setup.querySelector('.img-upload__cancel');
var uploadFile = document.querySelector('#upload-file');

var hashtagInput = document.querySelector('.text__hashtags');
var hashtagValidate = /^#[а-яА-Яa-zA-Z0-9]*$/;

var lineSlider = document.querySelector('.effect-level__line');
var pinElement = document.querySelector('.effect-level__pin');
var lineFilled = document.querySelector('.effect-level__depth');


pinElement.addEventListener('mousedown', function (evt) {
  evt.preventDefault();
});

pinElement.addEventListener('mousedown', function (downEvent) {
  var startX = downEvent.clientX;

  console.log(startX, 'startX');

  var mouseMove = function (moveEvent) {
    var movedX = moveEvent.clientX;

    console.log(movedX, 'movedX');

    var shiftX = startX - movedX;

    startX = movedX;

    pinElement.style.left = (pinElement.offsetLeft - shiftX) + 'px';
    lineFilled.style.width = (pinElement.offsetLeft - shiftX) + 'px';

    if (pinElement.style.left === 0 + 'px' || pinElement.style.left === lineSlider.offsetWidth + 'px') {
      document.removeEventListener('mousemove', mouseMove);
    }
  };

  var mouseUp = function () {
    document.removeEventListener('mousemove', mouseMove);
    document.removeEventListener('mouseup', mouseUp);
  };

  document.addEventListener('mousemove', mouseMove);
  document.addEventListener('mouseup', mouseUp);
});

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
  }
};

uploadFile.addEventListener('change', function () {
  setup.classList.remove('hidden');
});

var openPopup = function () {
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

hashtagInput.addEventListener('invalid', function () {
  if (hashtagInput.validity.valueMissing) {
    hashtagInput.setCustomValidity('Обязательное поле');
  } else {
    hashtagInput.setCustomValidity('');
  }
});

hashtagValidate.test('hashtagValue');


hashtagInput.addEventListener('input', function () {
  var hashtagValue = hashtagInput.value;

  if (!hashtagValidate.test(hashtagValue)) {
    hashtagInput.setCustomValidity('Введите в формате #хештег');
  } else {
    hashtagInput.setCustomValidity('');
  }
});
