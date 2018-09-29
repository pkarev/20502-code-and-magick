'use strict';

(function () {
  var ENTER_KEYCODE = 13;
  var ESC_KEYCODE = 27;

  window.util = {
    generateRandomRGB: generateRandomRGB,
    getRandomIndex: getRandomIndex,
    isEscEvent: isEscEvent,
    isEnterEvent: isEnterEvent
  };

  function generateRandomRGB() {
    return 'rgba(' + Math.floor(Math.random() * 256) + ', ' +
      Math.floor(Math.random() * 256) + ', ' +
      Math.floor(Math.random() * 256) + ')';
  }

  function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
  }

  function isEscEvent(evt, action) {
    if (evt.keyCode === ESC_KEYCODE) {
      action();
    }
  }

  function isEnterEvent(evt, action) {
    if (evt.keyCode === ENTER_KEYCODE) {
      action();
    }
  }
})();
