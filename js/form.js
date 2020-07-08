'use strict';

(function () {
  var hashtagInput = document.querySelector('.text__hashtags');
  var hashtagValidate = /^#[а-яА-Яa-zA-Z0-9]*$/;

  hashtagInput.addEventListener('invalid', function () {
    if (hashtagInput.validity.valueMissing) {
      hashtagInput.setCustomValidity('Обязательное поле');
    } else {
      hashtagInput.setCustomValidity('');
    }
  });

  hashtagInput.addEventListener('input', function () {
    var hashtagValue = hashtagInput.value;

    if (!hashtagValidate.test(hashtagValue)) {
      hashtagInput.setCustomValidity('Введите в формате #хештег');
    } else {
      hashtagInput.setCustomValidity('');
    }
  });
})();
