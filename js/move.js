'use strict';

(function () {
  var lineSlider = document.querySelector('.effect-level__line');
  var pinElement = document.querySelector('.effect-level__pin');
  var lineFilled = document.querySelector('.effect-level__depth');

  pinElement.addEventListener('mousedown', function (downEvent) {
    var startX = downEvent.clientX;

    var mouseMove = function (moveEvent) {
      var movedX = moveEvent.clientX;
      var shiftX = startX - movedX;

      startX = movedX;

      pinElement.style.left = (pinElement.offsetLeft - shiftX) + 'px';
      lineFilled.style.width = (pinElement.offsetLeft - shiftX) + 'px';

      if (pinElement.offsetLeft <= 0) {
        pinElement.style.left = 0 + 'px';
      } else if (pinElement.offsetLeft >= lineSlider.offsetWidth) {
        pinElement.style.left = lineSlider.offsetWidth + 'px';
      }
    };

    var mouseUp = function () {
      document.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseup', mouseUp);
    };

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
  });
})();
