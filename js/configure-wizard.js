'use strict';

(function () {
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var wizardCoatInput = document.querySelector('input[name=coat-color]');
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var wizardEyesInput = document.querySelector('input[name=eyes-color]');
  var wizardFireBall = document.querySelector('.setup-fireball-wrap');
  var wizardFireBallInput = document.querySelector('input[name=fireball-color]');
  var form = document.querySelector('.setup-wizard-form');

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();

    window.backend.save(new FormData(form), function () {
      window.closeSetup();
    });
  });

  wizardCoat.addEventListener('click', function (evt) {
    var newColor = getColor(COAT_COLORS);
    evt.target.style.fill = newColor;
    wizardCoatInput.setAttribute('value', newColor);
    window.filterWizards.onCoatChange(newColor);
  });

  wizardEyes.addEventListener('click', function (evt) {
    var newColor = getColor(EYES_COLORS);
    evt.target.style.fill = newColor;
    wizardEyesInput.setAttribute('value', newColor);
    window.filterWizards.onEyesChange(newColor);
  });

  wizardFireBall.addEventListener('click', function (evt) {
    var newColor = getColor(FIREBALL_COLORS);
    evt.target.style.backgroundColor = newColor;
    wizardFireBallInput.setAttribute('value', newColor);
    window.filterWizards.onFireballChange(newColor);
  });

  function getColor(colors) {
    return colors[window.util.getRandomIndex(colors.length)];
  }
})();
