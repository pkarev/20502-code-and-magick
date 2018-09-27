'use strict';

var dialog = document.querySelector('.setup');
var dialogHandle = dialog.querySelector('.upload');

dialogHandle.addEventListener('mousedown', function (evt) {
  evt.preventDefault();

  var currentCoords = {
    x: dialog.clientX,
    y: dialog.clientY
  };

  var dragged = false;

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

  function onMouseMove(moveEvt) {
    moveEvt.preventDefault();
    dragged = true;

    var shift = {
      x: currentCoords.x - moveEvt.clientX,
      y: currentCoords.y - moveEvt.clientY
    };

    currentCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };

    dialog.style.top = (dialog.offsetTop - shift.y) + 'px';
    dialog.style.left = (dialog.offsetLeft - shift.x) + 'px';
  }

  function onMouseUp(upEvt) {
    upEvt.preventDefault();

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);

    if (dragged) {
      dialogHandle.addEventListener('click', function (clickEvt) {
        clickEvt.preventDefault();
      }, {once: true});
    }
  }
});
