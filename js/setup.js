'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var setupElement = document.querySelector('.setup');
var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var wizards = new Array(4);
var wizardsFragment = document.createDocumentFragment();

setupElement.classList.remove('hidden');

generateWizards(wizards);
renderSimilarWizards();
document.querySelector('.setup-similar').classList.remove('hidden');

function getFullName(names, surnames) {
  return names[getRandomIndex(names.length)] + ' ' + surnames[getRandomIndex(surnames.length)];
}

function getColor(colors) {
  return colors[getRandomIndex(colors.length)];
}

function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
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
