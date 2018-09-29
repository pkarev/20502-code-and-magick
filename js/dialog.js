'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupHandle = setup.querySelector('.upload');
  var setupInitialX;
  var setupInitialY;
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var setupName = setup.querySelector('.setup-user-name');

  setupHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var currentCoords = {
      x: setup.clientX,
      y: setup.clientY
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

      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';
    }

    function onMouseUp(upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        setupHandle.addEventListener('click', function (clickEvt) {
          clickEvt.preventDefault();
        }, {once: true});
      }
    }
  });

  setupName.addEventListener('focus', function () {
    document.removeEventListener('keydown', onSetupEscPress);
  });

  setupName.addEventListener('blur', function () {
    document.addEventListener('keydown', onSetupEscPress);
  });

  setupOpen.addEventListener('click', function () {
    openSetup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openSetup);
  });

  setupClose.addEventListener('click', function () {
    closeSetup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closeSetup);
  });

  function onSetupEscPress(evt) {
    window.util.isEscEvent(evt, closeSetup);
  }

  function openSetup() {
    setup.classList.remove('hidden');
    setupInitialX = setup.offsetLeft;
    setupInitialY = setup.offsetTop;
    document.addEventListener('keydown', onSetupEscPress);
  }

  function closeSetup() {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onSetupEscPress);
    setup.style.left = setupInitialX + 'px';
    setup.style.top = setupInitialY + 'px';
  }

  window.closeSetup = closeSetup;
})();

