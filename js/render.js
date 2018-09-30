'use strict';

(function () {
  var SIMILAR_WIZARDS_NUMBER = 4;
  var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizardsFragment = document.createDocumentFragment();

  function createWizardElement(wizardParams) {
    var wizardElement = wizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizardParams.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizardParams.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizardParams.colorEyes;

    return wizardElement;
  }

  function renderSimilarWizards(wizardsArray) {
    for (var i = 0; i <= SIMILAR_WIZARDS_NUMBER - 1; i++) {
      wizardsFragment.appendChild(createWizardElement(wizardsArray[i]));
    }

    document.querySelector('.setup-similar-list').innerHTML = '';
    document.querySelector('.setup-similar-list').appendChild(wizardsFragment);
    document.querySelector('.setup-similar').classList.remove('hidden');
  }

  window.renderSimilarWizards = renderSimilarWizards;
})();
