'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_START_X = 100;
  var CLOUD_SHAPE_X = CLOUD_START_X + 10;
  var CLOUD_START_Y = 10;
  var CLOUD_SHAPE_Y = CLOUD_START_Y + 10;
  var CLOUD_CENTER_X = CLOUD_START_X + CLOUD_WIDTH / 2;

  var BAR_WIDTH = 40;
  var BAR_MAX_HEIGHT = 150;
  var BAR_GAP = 50;
  var BAR_COLOR = 'rgba(255, 0, 0, 1)';

  var CONGRATS = ['Ура вы победили!', 'Список результатов:'];

  var FONT = '16 px PT Mono';
  var LINE_HEIGHT = 20;

  window.renderStatistics = function (ctx, names, times) {

    var maxTime = Math.max.apply(0, times);
    renderStatsCloud();

    var renderX = CLOUD_CENTER_X;
    var renderY = CLOUD_START_Y + 20;

    ctx.fillStyle = 'white';
    ctx.font = FONT;
    ctx.textAlign = 'center';
    renderCongrats(renderX, renderY, CONGRATS);

    renderX = CLOUD_START_X + (CLOUD_WIDTH - BAR_WIDTH * 4 - BAR_GAP * 3) / 2 + BAR_WIDTH / 2;

    times.forEach(function (item, index) {
      var barHeight = item * BAR_MAX_HEIGHT / maxTime;
      var renderYShift = (1 - item / maxTime) * BAR_MAX_HEIGHT;
      renderY = CLOUD_START_Y + LINE_HEIGHT * CONGRATS.length + LINE_HEIGHT * 2 + renderYShift;

      renderTime(item);

      renderX -= BAR_WIDTH / 2;
      renderY += LINE_HEIGHT / 2;

      renderBar(names[index], barHeight);

      renderX += BAR_WIDTH / 2;
      renderY += LINE_HEIGHT + barHeight;

      renderName(names[index]);
      renderX += BAR_WIDTH + BAR_GAP;
    });

    function renderStatsCloud() {
      renderRect(CLOUD_SHAPE_X, CLOUD_SHAPE_Y, CLOUD_WIDTH, CLOUD_HEIGHT, 'rgba(0, 0, 0, 0.7)');
      renderRect(CLOUD_START_X, CLOUD_START_Y, CLOUD_WIDTH, CLOUD_HEIGHT, 'black');
    }

    function renderCongrats(x, y, texts) {
      texts.forEach(function (item, index) {
        if (index) {
          renderY += LINE_HEIGHT;
        }
        ctx.fillText(item, x, renderY);
      });
    }

    function renderTime(time) {
      var timeLegend = Math.floor(time);
      ctx.fillText(timeLegend, renderX, renderY);
    }

    function renderBar(name, barHeight) {
      var barColor = name === 'Вы' ? BAR_COLOR : window.util.generateRandomRGB();
      renderRect(renderX, renderY, BAR_WIDTH, barHeight, barColor);
    }

    function renderName(name) {
      ctx.fillStyle = 'white';
      ctx.fillText(name, renderX, renderY);
    }

    function renderRect(startX, startY, width, height, color) {
      ctx.fillStyle = color;
      ctx.fillRect(startX, startY, width, height);
    }
  };
})();


