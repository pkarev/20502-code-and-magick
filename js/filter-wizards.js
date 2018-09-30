'use strict';

(function () {
  var coatColor;
  var eyesColor;
  var fireballColor;
  var wizards = [];
  window.backend.load(onSuccessLoad, window.backend.error);

  function onSuccessLoad(data) {
    wizards = data;
    updateWizards();
  }

  function updateWizards() {
    window.renderSimilarWizards(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  }

  function getRank(wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }

    if (wizard.colorEyes === eyesColor) {
      rank += 2;
    }

    if (wizard.colorFireball === fireballColor) {
      rank += 1;
    }

    return rank;
  }

  function namesComparator(left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  }

  var onEyesChange = window.util.debounce(function (newColor) {
    eyesColor = newColor;
    updateWizards();
  });

  var onCoatChange = window.util.debounce(function (newColor) {
    coatColor = newColor;
    updateWizards();
  });

  var onFireballChange = window.util.debounce(function (newColor) {
    fireballColor = newColor;
    updateWizards();
  });

  window.filterWizards = {
    onEyesChange: onEyesChange,
    onCoatChange: onCoatChange,
    onFireballChange: onFireballChange
  };

})();
