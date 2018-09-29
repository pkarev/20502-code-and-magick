'use strict';

(function () {
  var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizards = new Array(4);
  var wizardsFragment = document.createDocumentFragment();

  generateWizards(wizards);
  renderSimilarWizards();
  document.querySelector('.setup-similar').classList.remove('hidden');

  function getFullName(names, surnames) {
    return names[window.util.getRandomIndex(names.length)] + ' ' + surnames[window.util.getRandomIndex(surnames.length)];
  }

  function getColor(colors) {
    return colors[window.util.getRandomIndex(colors.length)];
  }

  function generateWizards(array) {
    for (var i = 0; i < array.length; i++) {
      var wizard = {};
      wizard.name = getFullName(NAMES, SURNAMES);
      wizard.coatColor = getColor(COAT_COLORS);
      wizard.eyesColor = getColor(EYES_COLORS);
      array[i] = wizard;
    }
  }

  function createWizardElement(wizardParams) {
    var wizardElement = wizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizardParams.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizardParams.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizardParams.eyesColor;

    return wizardElement;
  }

  function renderSimilarWizards() {
    wizards.forEach(function (similarWizard) {
      wizardsFragment.appendChild(createWizardElement(similarWizard));
    });

    document.querySelector('.setup-similar-list').appendChild(wizardsFragment);
  }

  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var wizardCoatInput = document.querySelector('input[name=coat-color]');
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var wizardEyesInput = document.querySelector('input[name=eyes-color]');
  var wizardFireBall = document.querySelector('.setup-fireball-wrap');
  var wizardFireBallInput = document.querySelector('input[name=fireball-color]');

  wizardCoat.addEventListener('click', function (evt) {
    var newColor = getColor(COAT_COLORS);
    evt.target.style.fill = newColor;
    wizardCoatInput.setAttribute('value', newColor);
  });

  wizardEyes.addEventListener('click', function (evt) {
    var newColor = getColor(EYES_COLORS);
    evt.target.style.fill = newColor;
    wizardEyesInput.setAttribute('value', newColor);
  });

  wizardFireBall.addEventListener('click', function (evt) {
    var newColor = getColor(FIREBALL_COLORS);
    evt.target.style.backgroundColor = newColor;
    wizardFireBallInput.setAttribute('value', newColor);
  });
})();
