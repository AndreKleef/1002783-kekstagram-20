'use strict';

(function () {
  var setupOpen = document.querySelector('.img-upload__label');
  var setup = document.querySelector('.img-upload__overlay');
  var setupClose = setup.querySelector('.img-upload__cancel');
  var uploadFile = document.querySelector('#upload-file');

  var onPopupEscPress = function (evt) {
    window.main.isEscape(evt, closePopup);
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
    window.main.isEnter(evt, openPopup);
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.main.isEnter(evt, closePopup);
  });
})();

