'use strict';

(function () {

  var filtersButton = document.querySelector('.img-filters');
  filtersButton.classList.remove('img-filters--inactive');

  var sortDefault = document.querySelector('#filter-default');
  var sortRandom = document.querySelector('#filter-random');
  var sortDiscussed = document.querySelector('#filter-discussed');

  var gallery = [];

  var useRenderPhoto = function () {
    window.data.renderPhoto(gallery);
  };
  var useRenderRandomPhoto = function () {
    window.data.renderRandomPhoto(gallery.slice().sort(function () {
      return 0.5 - Math.random();
    }));
  };
  var useRenderDiscussedPhoto = function () {
    window.data.renderPhoto(gallery.slice().sort(function (a, b) {
      return b.comments.length - a.comments.length;
    }));
  };

  sortDefault.addEventListener('click', function () {
    sortDefault.classList.add('img-filters__button--active');
    sortRandom.classList.remove('img-filters__button--active');
    sortDiscussed.classList.remove('img-filters__button--active');
    window.debounce.useDebounce(useRenderPhoto);
  });

  sortRandom.addEventListener('click', function () {
    sortDefault.classList.remove('img-filters__button--active');
    sortRandom.classList.add('img-filters__button--active');
    sortDiscussed.classList.remove('img-filters__button--active');
    window.debounce.useDebounce(useRenderRandomPhoto);
  });

  sortDiscussed.addEventListener('click', function () {
    sortDefault.classList.remove('img-filters__button--active');
    sortRandom.classList.remove('img-filters__button--active');
    sortDiscussed.classList.add('img-filters__button--active');
    window.debounce.useDebounce(useRenderDiscussedPhoto);
  });

  var successHandler = function (data) {
    gallery = data;
    window.data.renderPhoto(gallery);
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

