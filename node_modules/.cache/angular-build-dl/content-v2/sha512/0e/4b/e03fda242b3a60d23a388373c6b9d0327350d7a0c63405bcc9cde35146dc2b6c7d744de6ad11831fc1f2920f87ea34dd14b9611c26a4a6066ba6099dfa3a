(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-history-history-module~pages-summary-summary-module"],{

/***/ "./node_modules/chartjs-chart-radial-gauge/build/Chart.RadialGauge.cjs.js":
/*!********************************************************************************!*\
  !*** ./node_modules/chartjs-chart-radial-gauge/build/Chart.RadialGauge.cjs.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Chart = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
var Chart__default = _interopDefault(Chart);

/**
 * An arc element that supports rounded corners
 */
Chart.elements.RoundedArc = Chart.elements.Arc.extend({
  draw: function draw() {
    var ctx = this._chart.ctx;
    var vm = this._view;
    var startAngle = vm.startAngle,
        endAngle = vm.endAngle;

    var cornerRadius = (vm.outerRadius - vm.innerRadius) / 2;
    var cornerX = (vm.outerRadius + vm.innerRadius) / 2;

    // translate + rotate to make drawing the corners simpler
    ctx.translate(vm.x, vm.y);
    ctx.rotate(startAngle);
    var angle = endAngle - startAngle;
    ctx.beginPath();
    if (vm.roundedCorners) {
      ctx.arc(cornerX, 0, cornerRadius, Math.PI, 0);
    }
    ctx.arc(0, 0, vm.outerRadius, 0, angle);

    var x = cornerX * Math.cos(angle);
    var y = cornerX * Math.sin(angle);

    if (vm.roundedCorners) {
      ctx.arc(x, y, cornerRadius, angle, angle + Math.PI);
    }

    ctx.arc(0, 0, vm.innerRadius, angle, 0, true);
    ctx.closePath();
    ctx.rotate(-startAngle);
    ctx.translate(-vm.x, -vm.y);

    ctx.strokeStyle = vm.borderColor;
    ctx.lineWidth = vm.borderWidth;
    ctx.fillStyle = vm.backgroundColor;

    ctx.fill();
    ctx.lineJoin = 'bevel';

    if (vm.borderWidth) {
      ctx.stroke();
    }
  }
});

Chart.elements.RoundedArc;

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var helpers = Chart__default.helpers;

/**
 * Controller for the radialGauge chart type
 */

Chart__default.defaults._set('radialGauge', {
  animation: {
    // Boolean - Whether we animate the rotation of the radialGauge
    animateRotate: true,
    // Boolean - Whether we animate scaling the radialGauge from the centre
    animateScale: true
  },

  // The percentage of the chart that is the center area
  centerPercentage: 80,

  // The rotation for the start of the metric's arc
  rotation: -Math.PI / 2,

  // the color of the radial gauge's track
  trackColor: 'rgb(204, 221, 238)',

  // whether arc for the gauge should have rounded corners
  roundedCorners: true,

  // center value options
  centerArea: {
    // whether to display the center text value
    displayText: true,
    // font for the center text
    fontFamily: null,
    // color of the center text
    fontColor: null,
    // the size of the center text
    fontSize: null,
    // padding around the center area
    padding: 4,
    // an image to use for the center background
    backgroundImage: null,
    // a color to use for the center background
    backgroundColor: null,
    // the text to display in the center
    // this could be a string or a callback that returns a string
    // if a callback is provided it will be called with (value, options)
    text: null
  },

  hover: {
    mode: 'single'
  },

  legend: {
    display: false
  },

  // the domain of the metric
  domain: [0, 100],

  tooltips: {
    callbacks: {
      title: function title() {
        return '';
      },
      label: function label(tooltipItem, data) {
        var dataLabel = data.labels[tooltipItem.index];
        var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];

        dataLabel += value;

        return dataLabel;
      }
    }
  }
});

// eslint-disable-next-line no-shadow
var RadialGaugeController = (function (Chart$$1) {
  Chart$$1.controllers.radialGauge = Chart$$1.DatasetController.extend({
    dataElementType: Chart$$1.elements.RoundedArc,

    linkScales: helpers.noop,

    draw: function draw() {
      this.drawTrack();

      this.drawCenterArea();

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      Chart$$1.DatasetController.prototype.draw.apply(this, args);
    },
    drawTrack: function drawTrack() {
      new Chart$$1.elements.Arc({
        _view: {
          backgroundColor: this.chart.options.trackColor,
          borderColor: this.chart.options.trackColor,
          startAngle: 0,
          endAngle: Math.PI * 2,
          x: this.centerX,
          y: this.centerY,
          innerRadius: this.innerRadius,
          outerRadius: this.outerRadius,
          borderWidth: this.borderWidth
        },
        _chart: this.chart
      }).draw();
    },
    drawCenterArea: function drawCenterArea() {
      var ctx = this.chart.ctx;
      var drawInfo = {
        ctx: ctx,
        value: Math.ceil(this.getMeta().data[0]._view.value),
        radius: this.innerRadius,
        options: this.chart.options.centerArea
      };

      ctx.save();

      try {
        ctx.translate(this.centerX, this.centerY);
        if (drawInfo.options.draw) {
          drawInfo.options.draw(drawInfo);
          return;
        }

        if (drawInfo.options.backgroundColor) {
          this.drawCenterBackground(drawInfo);
        }

        if (drawInfo.options.backgroundImage) {
          this.drawCenterImage(drawInfo);
        }

        if (drawInfo.options.displayText) {
          this.drawCenterText(drawInfo);
        }
      } finally {
        ctx.restore();
      }
    },
    drawCenterBackground: function drawCenterBackground(_ref) {
      var options = _ref.options,
          radius = _ref.radius,
          ctx = _ref.ctx;

      var bgRadius = radius - options.padding;
      ctx.beginPath();
      ctx.arc(0, 0, bgRadius, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fillStyle = options.backgroundColor;
      ctx.fill();
    },
    drawCenterImage: function drawCenterImage(_ref2) {
      var radius = _ref2.radius,
          options = _ref2.options,
          ctx = _ref2.ctx;

      var imageRadius = radius - options.padding;
      ctx.beginPath();
      ctx.arc(0, 0, imageRadius, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.clip();
      ctx.drawImage(options.backgroundImage, -imageRadius, -imageRadius, 2 * imageRadius, 2 * imageRadius);
    },
    drawCenterText: function drawCenterText(_ref3) {
      var options = _ref3.options,
          value = _ref3.value;

      var fontSize = options.fontSize || (this.innerRadius / 50).toFixed(2) + 'em';
      if (typeof fontSize === 'number') {
        fontSize = fontSize + 'px';
      }

      var fontFamily = options.fontFamily || Chart$$1.defaults.global.defaultFontFamily;
      var color = options.fontColor || Chart$$1.defaults.global.defaultFontColor;

      var text = typeof options.text === 'function' ? options.text(value, options) : options.text;
      text = text || '' + value;
      this.chart.ctx.font = fontSize + ' ' + fontFamily;
      this.chart.ctx.fillStyle = color;
      this.chart.ctx.textBaseline = 'middle';
      var textWidth = this.chart.ctx.measureText(text).width;
      var textX = Math.round(-textWidth / 2);

      // only display the text if it fits
      if (textWidth < 2 * this.innerRadius * 0.8) {
        this.chart.ctx.fillText(text, textX, 0);
      }
    },
    update: function update(reset) {
      var _this = this;

      var chart = this.chart;
      var chartArea = chart.chartArea;
      var opts = chart.options;
      var arcOpts = opts.elements.arc;
      var availableWidth = chartArea.right - chartArea.left - arcOpts.borderWidth;
      var availableHeight = chartArea.bottom - chartArea.top - arcOpts.borderWidth;
      var availableSize = Math.min(availableWidth, availableHeight);

      var meta = this.getMeta();
      var centerPercentage = opts.centerPercentage;

      this.borderWidth = this.getMaxBorderWidth(meta.data);
      this.outerRadius = Math.max((availableSize - this.borderWidth) / 2, 0);
      this.innerRadius = Math.max(centerPercentage ? this.outerRadius / 100 * centerPercentage : 0, 0);

      meta.total = this.getMetricValue();
      this.centerX = (chartArea.left + chartArea.right) / 2;
      this.centerY = (chartArea.top + chartArea.bottom) / 2;

      helpers.each(meta.data, function (arc, index) {
        _this.updateElement(arc, index, reset);
      });
    },
    updateElement: function updateElement(arc, index, reset) {
      var chart = this.chart;
      var chartArea = chart.chartArea;
      var opts = chart.options;
      var animationOpts = opts.animation;
      var centerX = (chartArea.left + chartArea.right) / 2;
      var centerY = (chartArea.top + chartArea.bottom) / 2;
      var startAngle = opts.rotation; // non reset case handled later
      var dataset = this.getDataset();
      var arcAngle = reset && animationOpts.animateRotate ? 0 : this.calculateArcAngle(dataset.data[index]);
      var value = reset && animationOpts.animateScale ? 0 : this.getMetricValue();
      var endAngle = startAngle + arcAngle;
      var innerRadius = this.innerRadius;
      var outerRadius = this.outerRadius;
      var valueAtIndexOrDefault = helpers.valueAtIndexOrDefault;

      helpers.extend(arc, {
        // Utility
        _datasetIndex: this.index,
        _index: index,

        // Desired view properties
        _model: {
          x: centerX,
          y: centerY,
          startAngle: startAngle,
          endAngle: endAngle,
          outerRadius: outerRadius,
          innerRadius: innerRadius,
          label: valueAtIndexOrDefault(dataset.label, index, chart.data.labels[index]),
          roundedCorners: opts.roundedCorners,
          value: value
        }
      });

      var model = arc._model;

      // Resets the visual styles
      var custom = arc.custom || {};
      var valueOrDefault = helpers.valueAtIndexOrDefault;
      var elementOpts = this.chart.options.elements.arc;
      model.backgroundColor = custom.backgroundColor ? custom.backgroundColor : valueOrDefault(dataset.backgroundColor, index, elementOpts.backgroundColor);
      model.borderColor = custom.borderColor ? custom.borderColor : valueOrDefault(dataset.borderColor, index, elementOpts.borderColor);
      model.borderWidth = custom.borderWidth ? custom.borderWidth : valueOrDefault(dataset.borderWidth, index, elementOpts.borderWidth);

      arc.pivot();
    },
    getMetricValue: function getMetricValue() {
      var value = this.getDataset().data[0];
      if (value == null) {
        value = this.chart.options.domain[0];
      }

      return value;
    },
    getDomain: function getDomain() {
      return this.chart.options.domain;
    },
    calculateArcAngle: function calculateArcAngle() {
      var _getDomain = this.getDomain(),
          _getDomain2 = slicedToArray(_getDomain, 2),
          domainStart = _getDomain2[0],
          domainEnd = _getDomain2[1];

      var value = this.getMetricValue();
      var domainSize = domainEnd - domainStart;

      return domainSize > 0 ? Math.PI * 2.0 * (Math.abs(value - domainStart) / domainSize) : 0;
    },


    // gets the max border or hover width to properly scale pie charts
    getMaxBorderWidth: function getMaxBorderWidth(arcs) {
      var max = 0;
      var index = this.index;
      var length = arcs.length;
      var borderWidth = void 0;
      var hoverWidth = void 0;

      for (var i = 0; i < length; i++) {
        borderWidth = arcs[i]._model ? arcs[i]._model.borderWidth : 0;
        hoverWidth = arcs[i]._chart ? arcs[i]._chart.config.data.datasets[index].hoverBorderWidth : 0;

        max = borderWidth > max ? borderWidth : max;
        max = hoverWidth > max ? hoverWidth : max;
      }
      return max;
    }
  });
});

var RadialGaugeChart = (function (Chart$$1) {
  Chart$$1.RadialGauge = function (context, config) {
    config.type = 'radialGauge';

    return new Chart$$1(context, config);
  };
});

RadialGaugeController(Chart__default);
RadialGaugeChart(Chart__default);

module.exports = RadialGaugeChart;


/***/ }),

/***/ "./node_modules/chartjs-plugin-labels/src/chartjs-plugin-labels.js":
/*!*************************************************************************!*\
  !*** ./node_modules/chartjs-plugin-labels/src/chartjs-plugin-labels.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * [chartjs-plugin-labels]{@link https://github.com/emn178/chartjs-plugin-labels}
 *
 * @version 1.1.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2017-2018
 * @license MIT
 */
(function () {
  'use strict';

  if (typeof Chart === 'undefined') {
    console.error('Can not find Chart object.');
    return;
  }

  if (typeof Object.assign != 'function') {
    Object.assign = function (target, varArgs) {
      if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }
      var to = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];
        if (nextSource != null) {
          for (var nextKey in nextSource) {
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    };
  }

  var SUPPORTED_TYPES = {};
  ['pie', 'doughnut', 'polarArea', 'bar'].forEach(function (t) {
    SUPPORTED_TYPES[t] = true;
  });

  function Label() {
    this.renderToDataset = this.renderToDataset.bind(this);
  }

  Label.prototype.setup = function (chart, options) {
    this.chart = chart;
    this.ctx = chart.ctx;
    this.args = {};
    this.barTotal = {};
    var chartOptions = chart.config.options;
    this.options = Object.assign({
      position: 'default',
      precision: 0,
      fontSize: chartOptions.defaultFontSize,
      fontColor: chartOptions.defaultFontColor,
      fontStyle: chartOptions.defaultFontStyle,
      fontFamily: chartOptions.defaultFontFamily,
      shadowOffsetX: 3,
      shadowOffsetY: 3,
      shadowColor: 'rgba(0,0,0,0.3)',
      shadowBlur: 6,
      images: [],
      outsidePadding: 2,
      textMargin: 2,
      overlap: true
    }, options);
    if (chart.config.type === 'bar') {
      this.options.position = 'default';
      this.options.arc = false;
      this.options.overlap = true;
    }
  };

  Label.prototype.render = function () {
    this.labelBounds = [];
    this.chart.data.datasets.forEach(this.renderToDataset);
  };

  Label.prototype.renderToDataset = function (dataset, index) {
    this.totalPercentage = 0;
    this.total = null;
    var arg = this.args[index];
    arg.meta.data.forEach(function (element, index) {
      this.renderToElement(dataset, arg, element, index);
    }.bind(this));
  };

  Label.prototype.renderToElement = function (dataset, arg, element, index) {
    if (!this.shouldRenderToElement(arg.meta, element)) {
      return;
    }
    this.percentage = null;
    var label = this.getLabel(dataset, element, index);
    if (!label) {
      return;
    }
    var ctx = this.ctx;
    ctx.save();
    ctx.font = Chart.helpers.fontString(this.options.fontSize, this.options.fontStyle, this.options.fontFamily);
    var renderInfo = this.getRenderInfo(element, label);
    if (!this.drawable(element, label, renderInfo)) {
      ctx.restore();
      return;
    }
    ctx.beginPath();
    ctx.fillStyle = this.getFontColor(dataset, element, index);
    this.renderLabel(label, renderInfo);
    ctx.restore();
  };

  Label.prototype.renderLabel = function (label, renderInfo) {
    return this.options.arc ? this.renderArcLabel(label, renderInfo) : this.renderBaseLabel(label, renderInfo);
  };

  Label.prototype.renderBaseLabel = function (label, position) {
    var ctx = this.ctx;
    if (typeof label === 'object') {
      ctx.drawImage(label, position.x - label.width / 2, position.y - label.height / 2, label.width, label.height);
    } else {
      ctx.save();
      ctx.textBaseline = 'top';
      ctx.textAlign = 'center';

      if (this.options.textShadow) {
        ctx.shadowOffsetX = this.options.shadowOffsetX;
        ctx.shadowOffsetY = this.options.shadowOffsetY;
        ctx.shadowColor = this.options.shadowColor;
        ctx.shadowBlur = this.options.shadowBlur;
      }

      var lines = label.split('\n');
      for (var i = 0; i < lines.length; i++) {
        var y = position.y - this.options.fontSize / 2 * lines.length + this.options.fontSize * i;
        ctx.fillText(lines[i], position.x, y);
      }
      ctx.restore();
    }
  };

  Label.prototype.renderArcLabel = function (label, renderInfo) {
    var ctx = this.ctx, radius = renderInfo.radius, view = renderInfo.view;
    ctx.save();
    ctx.translate(view.x, view.y);
    if (typeof label === 'string') {
      ctx.rotate(renderInfo.startAngle);
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'left';
      var lines = label.split('\n'), max = 0, widths = [], offset = 0;
      if (this.options.position === 'border') {
        offset = (lines.length - 1) * this.options.fontSize / 2;
      }
      for (var j = 0; j < lines.length; ++j) {
        var mertrics = ctx.measureText(lines[j]);
        if (mertrics.width > max) {
          max = mertrics.width;
        }
        widths.push(mertrics.width);
      }
      for (var j = 0; j < lines.length; ++j) {
        var line = lines[j];
        var y = (lines.length - 1 - j) * -this.options.fontSize + offset;
        ctx.save();
        var padding = (max - widths[j]) / 2;
        ctx.rotate(padding / radius);
        for (var i = 0; i < line.length; i++) {
          var char = line.charAt(i);
          mertrics = ctx.measureText(char);
          ctx.save();
          ctx.translate(0, -1 * radius);
          ctx.fillText(char, 0, y);
          ctx.restore();
          ctx.rotate(mertrics.width / radius);
        }
        ctx.restore();
      }
    } else {
      ctx.rotate((view.startAngle + Math.PI / 2 + renderInfo.endAngle) / 2);
      ctx.translate(0, -1 * radius);
      this.renderLabel(label, { x: 0, y: 0 });
    }
    ctx.restore();
  };

  Label.prototype.shouldRenderToElement = function (meta, element) {
    return !meta.hidden && !element.hidden && (
      this.options.showZero ||
      this.chart.config.type === 'polarArea' ? element._view.outerRadius !== 0 : element._view.circumference !== 0
    );
  };

  Label.prototype.getLabel = function (dataset, element, index) {
    var label;
    if (typeof this.options.render === 'function') {
      label = this.options.render({
        label: this.chart.config.data.labels[index],
        value: dataset.data[index],
        percentage: this.getPercentage(dataset, element, index),
        dataset: dataset,
        index: index
      });
    } else {
      switch (this.options.render) {
        case 'value':
          label = dataset.data[index];
          break;
        case 'label':
          label = this.chart.config.data.labels[index];
          break;
        case 'image':
          label = this.options.images[index] ? this.loadImage(this.options.images[index]) : '';
          break;
        case 'percentage':
        default:
          label = this.getPercentage(dataset, element, index) + '%';
          break;
      }
    }
    if (typeof label === 'object') {
      label = this.loadImage(label);
    } else if (label !== null && label !== undefined) {
      label = label.toString();
    }
    return label;
  };

  Label.prototype.getFontColor = function (dataset, element, index) {
    var fontColor = this.options.fontColor;
    if (typeof fontColor === 'function') {
      fontColor = fontColor({
        label: this.chart.config.data.labels[index],
        value: dataset.data[index],
        percentage: this.getPercentage(dataset, element, index),
        backgroundColor: dataset.backgroundColor[index],
        dataset: dataset,
        index: index
      });
    } else if (typeof fontColor !== 'string') {
      fontColor = fontColor[index] || this.chart.config.options.defaultFontColor;
    }
    return fontColor;
  };

  Label.prototype.getPercentage = function (dataset, element, index) {
    if (this.percentage !== null) {
      return this.percentage;
    }
    var percentage;
    if (this.chart.config.type === 'polarArea') {
      if (this.total === null) {
        this.total = 0;
        for (var i = 0;i < dataset.data.length; ++i) {
          this.total += dataset.data[i];
        }
      }
      percentage = dataset.data[index] / this.total * 100;
    } else if (this.chart.config.type === 'bar') {
      if (this.barTotal[index] === undefined) {
        this.barTotal[index] = 0;
        for (var i = 0;i < this.chart.data.datasets.length; ++i) {
          this.barTotal[index] += this.chart.data.datasets[i].data[index];
        }
      }
      percentage = dataset.data[index] / this.barTotal[index] * 100;
    } else {
      percentage = element._view.circumference / this.chart.config.options.circumference * 100;
    }
    percentage = parseFloat(percentage.toFixed(this.options.precision));
    if (!this.options.showActualPercentages) {
      if (this.chart.config.type === 'bar') {
        this.totalPercentage = this.barTotalPercentage[index] || 0;
      }
      this.totalPercentage += percentage;
      if (this.totalPercentage > 100) {
        percentage -= this.totalPercentage - 100;
        percentage = parseFloat(percentage.toFixed(this.options.precision));
      }
      if (this.chart.config.type === 'bar') {
        this.barTotalPercentage[index] = this.totalPercentage
      }
    }
    this.percentage = percentage;
    return percentage;
  };

  Label.prototype.getRenderInfo = function (element, label) {
    if (this.chart.config.type === 'bar') {
      return this.getBarRenderInfo(element, label);
    } else {
      return this.options.arc ? this.getArcRenderInfo(element, label) : this.getBaseRenderInfo(element, label);
    }
  };

  Label.prototype.getBaseRenderInfo = function (element, label) {
    if (this.options.position === 'outside' || this.options.position === 'border') {
      var renderInfo, rangeFromCentre,
        view = element._view,
        centreAngle = view.startAngle + (view.endAngle - view.startAngle) / 2,
        innerRadius = view.outerRadius / 2;
      if (this.options.position === 'border') {
        rangeFromCentre = (view.outerRadius - innerRadius) / 2 + innerRadius;
      } else if (this.options.position === 'outside') {
        rangeFromCentre = (view.outerRadius - innerRadius) + innerRadius + this.options.textMargin;
      }
      renderInfo = {
        x: view.x + (Math.cos(centreAngle) * rangeFromCentre),
        y: view.y + (Math.sin(centreAngle) * rangeFromCentre)
      };
      if (this.options.position === 'outside') {
        var offset = this.options.textMargin + this.measureLabel(label).width / 2;
        renderInfo.x += renderInfo.x < view.x ? -offset : offset;
      }
      return renderInfo;
    } else {
      return element.tooltipPosition();
    }
  };

  Label.prototype.getArcRenderInfo = function (element, label) {
    var radius, view = element._view;
    if (this.options.position === 'outside') {
      radius = view.outerRadius + this.options.fontSize + this.options.textMargin;
    } else if (this.options.position === 'border') {
      radius = (view.outerRadius / 2 + view.outerRadius) / 2;
    } else {
      radius = (view.innerRadius + view.outerRadius) / 2;
    }
    var startAngle = view.startAngle, endAngle = view.endAngle;
    var totalAngle = endAngle - startAngle;
    startAngle += Math.PI / 2;
    endAngle += Math.PI / 2;
    var mertrics = this.measureLabel(label);
    startAngle += (endAngle - (mertrics.width / radius + startAngle)) / 2;
    return {
      radius: radius,
      startAngle: startAngle,
      endAngle: endAngle,
      totalAngle: totalAngle,
      view: view
    }
  };

  Label.prototype.getBarRenderInfo = function (element, label) {
    var renderInfo = element.tooltipPosition();
    renderInfo.y -= this.measureLabel(label).height / 2 + this.options.textMargin;
    return renderInfo;
  };

  Label.prototype.drawable = function (element, label, renderInfo) {
    if (this.options.overlap) {
      return true;
    } else if (this.options.arc) {
      return renderInfo.endAngle - renderInfo.startAngle <= renderInfo.totalAngle;
    } else {
      var mertrics = this.measureLabel(label),
        left = renderInfo.x - mertrics.width / 2,
        right = renderInfo.x + mertrics.width / 2,
        top = renderInfo.y - mertrics.height / 2,
        bottom = renderInfo.y + mertrics.height / 2;
      if (this.options.renderInfo === 'outside') {
        return this.outsideInRange(left, right, top, bottom);
      } else {
        return element.inRange(left, top) && element.inRange(left, bottom) &&
          element.inRange(right, top) && element.inRange(right, bottom);
      }
    }
  };

  Label.prototype.outsideInRange = function (left, right, top, bottom) {
    var labelBounds = this.labelBounds;
    for (var i = 0;i < labelBounds.length;++i) {
      var bound = labelBounds[i];
      var potins = [
        [left, top],
        [left, bottom],
        [right, top],
        [right, bottom]
      ];
      for (var j = 0;j < potins.length;++j) {
        var x = potins[j][0];
        var y = potins[j][1];
        if (x >= bound.left && x <= bound.right && y >= bound.top && y <= bound.bottom) {
          return false;
        }
      }
      potins = [
        [bound.left, bound.top],
        [bound.left, bound.bottom],
        [bound.right, bound.top],
        [bound.right, bound.bottom]
      ];
      for (var j = 0;j < potins.length;++j) {
        var x = potins[j][0];
        var y = potins[j][1];
        if (x >= left && x <= right && y >= top && y <= bottom) {
          return false;
        }
      }
    }
    labelBounds.push({
      left: left,
      right: right,
      top: top,
      bottom: bottom
    });
    return true;
  };

  Label.prototype.measureLabel = function (label) {
    if (typeof label === 'object') {
      return { width: label.width, height: label.height };
    } else {
      var width = 0;
      var lines = label.split('\n');
      for (var i = 0; i < lines.length; ++i) {
        var result = this.ctx.measureText(lines[i]);
        if (result.width > width) {
          width = result.width;
        }
      }
      return { width: width, height: this.options.fontSize * lines.length };
    }
  };

  Label.prototype.loadImage = function (obj) {
    var image = new Image();
    image.src = obj.src;
    image.width = obj.width;
    image.height = obj.height;
    return image;
  };

  Chart.plugins.register({
    id: 'labels',
    beforeDatasetsUpdate: function (chart, options) {
      if (!SUPPORTED_TYPES[chart.config.type]) {
        return;
      }
      if (!Array.isArray(options)) {
        options = [options];
      }
      var count = options.length;
      if (!chart._labels || count !== chart._labels.length) {
        chart._labels = options.map(function () {
          return new Label();
        });
      }
      var someOutside = false, maxPadding = 0;
      for (var i = 0; i < count; ++i) {
        var label = chart._labels[i];
        label.setup(chart, options[i]);
        if (label.options.position === 'outside') {
          someOutside = true;
          var padding = label.options.fontSize * 1.5 + label.options.outsidePadding;
          if (padding > maxPadding) {
            maxPadding = padding;
          }
        }
      }
      if (someOutside) {
        chart.chartArea.top += maxPadding;
        chart.chartArea.bottom -= maxPadding;
      }
    },
    afterDatasetUpdate: function (chart, args, options) {
      if (!SUPPORTED_TYPES[chart.config.type]) {
        return;
      }
      chart._labels.forEach(function (label) {
        label.args[args.index] = args;
      });
    },
    beforeDraw: function (chart) {
      if (!SUPPORTED_TYPES[chart.config.type]) {
        return;
      }
      chart._labels.forEach(function (label) {
        label.barTotalPercentage = {};
      });
    },
    afterDatasetsDraw: function (chart) {
      if (!SUPPORTED_TYPES[chart.config.type]) {
        return;
      }
      chart._labels.forEach(function (label) {
        label.render();
      });
    }
  });
})();


/***/ }),

/***/ "./node_modules/chartjs-tsgauge/Gauge.js":
/*!***********************************************!*\
  !*** ./node_modules/chartjs-tsgauge/Gauge.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
	if (!window.Chart) {
		return;
	}
	function GaugeChartHelper() {
	}
	GaugeChartHelper.prototype.setup = function(chart, config) {
		this.chart = chart;
		this.ctx = chart.ctx;
		this.limits = config.data.datasets[0].gaugeLimits;
		this.data = config.data.datasets[0].gaugeData;
		var options = chart.options;
		this.fontSize = options.defaultFontSize;
		this.fontStyle = options.defaultFontFamily;
		this.fontColor = options.defaultFontColor;
		this.ctx.textBaseline = "alphabetic";
		this.arrowAngle = 25 * Math.PI / 180;
		this.arrowColor = config.options.indicatorColor || options.arrowColor;
		this.showMarkers = typeof(config.options.showMarkers) === 'undefined' ? true : config.options.showMarkers;
		if (config.options.markerFormatFn) {
			this.markerFormatFn = config.options.markerFormatFn;
		} else {
			this.markerFormatFn = function(value) {
				return value;
			}
		}
	};
	GaugeChartHelper.prototype.applyGaugeConfig = function(chartConfig) {
		this.calcLimits();
		chartConfig.data.datasets[0].data = this.doughnutData;
		var ctx = this.ctx;
		var labelsWidth = this.limits.map(function(label){
			var text = this.markerFormatFn(label);
			return ctx.measureText(text).width;
		}.bind(this));
		var padding = Math.max.apply(this, labelsWidth) + this.chart.width / 35;
		var heightRatio = this.chart.height / 50;
		chartConfig.options.layout.padding = {
			top: this.fontSize + heightRatio,
			left: padding,
			right: padding,
			bottom: heightRatio * 2
		};
	};
	GaugeChartHelper.prototype.calcLimits = function() {
		var limits = this.limits;
		var data = [];
		var total = 0;
		for (var i = 1, ln = limits.length; i < ln; i++) {
			var dataValue = Math.abs(limits[i] - limits[i - 1]);
			total += dataValue;
			data.push(dataValue);
		}
		this.doughnutData = data;
		var minValue = limits[0];
		var maxValue = limits[limits.length - 1];
		this.isRevers = minValue > maxValue;
		this.minValue = this.isRevers ? maxValue : minValue;
		this.totalValue = total;
	};
	GaugeChartHelper.prototype.updateGaugeDimensions = function() {
		var chartArea = this.chart.chartArea;
		this.gaugeRadius = this.chart.innerRadius;
		this.gaugeCenterX = (chartArea.left + chartArea.right) / 2;
		this.gaugeCenterY = (chartArea.top + chartArea.bottom + this.chart.outerRadius) / 2;
		this.arrowLength = this.chart.radiusLength * 2;
	};
	GaugeChartHelper.prototype.getCoordOnCircle = function(r, alpha) {
		return {
			x: r * Math.cos(alpha),
			y: r * Math.sin(alpha)
		};
	};
	GaugeChartHelper.prototype.getAngleOfValue = function(value) {
		var result = 0;
		var gaugeValue = value - this.minValue;
		if (gaugeValue <= 0) {
			result = 0;
		} else if (gaugeValue >= this.totalValue) {
			result = Math.PI;
		} else {
			result = Math.PI * gaugeValue / this.totalValue;
		}
		if (this.isRevers) {
			return Math.PI - result;
		} else {
			return result;
		}
	};
	GaugeChartHelper.prototype.renderLimitLabel = function(value) {
		var ctx = this.ctx;
		var angle = this.getAngleOfValue(value);
		var coord = this.getCoordOnCircle(this.chart.outerRadius + (this.chart.radiusLength / 2), angle);
		var align;
		var diff = angle - (Math.PI / 2);
		if (diff > 0) {
			align = "left";
		} else if (diff < 0) {
			align = "right";
		} else {
			align = "center";
		}
		ctx.textAlign = align;
		ctx.font = this.fontSize + "px " + this.fontStyle;
		ctx.fillStyle = this.fontColor;
		var text = this.markerFormatFn(value);
		ctx.fillText(text, this.gaugeCenterX - coord.x, this.gaugeCenterY - coord.y);
	};
	GaugeChartHelper.prototype.renderLimits = function() {
		for (var i = 0, ln = this.limits.length; i < ln; i++) {
			this.renderLimitLabel(this.limits[i]);
		}
	};
	GaugeChartHelper.prototype.renderValueLabel = function() {
		var label = this.data.value.toString();
		var ctx = this.ctx;
		ctx.font = "30px " + this.fontStyle;
		var stringWidth = ctx.measureText(label).width;
		var elementWidth = 0.75 * this.gaugeRadius * 2;
		var widthRatio = elementWidth / stringWidth;
		var newFontSize = Math.floor(30 * widthRatio);
		var fontSizeToUse = Math.min(newFontSize, this.gaugeRadius);
		ctx.textAlign = "center";
		ctx.font = fontSizeToUse + "px " + this.fontStyle;
		ctx.fillStyle = this.data.valueColor || this.fontColor;
		ctx.fillText(label, this.gaugeCenterX, this.gaugeCenterY);
	};
	GaugeChartHelper.prototype.renderValueArrow = function(value) {
		var angle = this.getAngleOfValue(typeof value === "number" ? value : this.data.value);
		this.ctx.globalCompositeOperation = "source-over";
		this.renderArrow(this.gaugeRadius, angle, this.arrowLength, this.arrowAngle, this.arrowColor);
	};
	GaugeChartHelper.prototype.renderSmallValueArrow = function(value) {
		var angle = this.getAngleOfValue(value);
		this.ctx.globalCompositeOperation = "source-over";
		this.renderArrow(this.gaugeRadius - 1, angle, this.arrowLength - 1, this.arrowAngle, this.arrowColor);
	};
	GaugeChartHelper.prototype.clearValueArrow = function(value) {
		var angle = this.getAngleOfValue(value);
		this.ctx.lineWidth = 2;
		this.ctx.globalCompositeOperation = "destination-out";
		this.renderArrow(this.gaugeRadius - 1, angle, this.arrowLength + 1, this.arrowAngle, "#FFFFFF");
		this.ctx.stroke();
	};
	GaugeChartHelper.prototype.renderArrow = function(radius, angle, arrowLength, arrowAngle, arrowColor) {
		var coord = this.getCoordOnCircle(radius, angle);
		var arrowPoint = {
			x: this.gaugeCenterX - coord.x,
			y: this.gaugeCenterY - coord.y
		};
		var ctx = this.ctx;
		ctx.fillStyle = arrowColor;
		ctx.beginPath();
		ctx.moveTo(arrowPoint.x, arrowPoint.y);
		coord = this.getCoordOnCircle(arrowLength, angle + arrowAngle);
		ctx.lineTo(arrowPoint.x + coord.x, arrowPoint.y + coord.y);
		coord = this.getCoordOnCircle(arrowLength, angle - arrowAngle);
		ctx.lineTo(arrowPoint.x + coord.x, arrowPoint.y + coord.y);
		ctx.closePath();
		ctx.fill();
	};
	GaugeChartHelper.prototype.animateArrow = function() {
		var stepCount = 30;
		var animateTimeout = 300;
		var gaugeValue = this.data.value - this.minValue;
		var step = gaugeValue / stepCount;
		var i = 0;
		var currentValue = this.minValue;
		var interval = setInterval(function() {
			i++;
			this.clearValueArrow(currentValue);
			if (i > stepCount) {
				clearInterval(interval);
				this.renderValueArrow();
			} else {
				currentValue += step;
				this.renderSmallValueArrow(currentValue);
			}
		}.bind(this), animateTimeout / stepCount);
	};
	Chart.defaults.tsgauge = {
		animation: {
			animateRotate: true,
			animateScale: false
		},
		cutoutPercentage: 95,
		rotation: Math.PI,
		circumference: Math.PI,
		legend: {
			display: false
		},
		scales: {},
		arrowColor: "#444"
	};
	Chart.controllers.tsgauge = Chart.controllers.doughnut.extend({
		initialize: function(chart) {
			var gaugeHelper = this.gaugeHelper = new GaugeChartHelper();
			gaugeHelper.setup(chart, chart.config);
			gaugeHelper.applyGaugeConfig(chart.config);
			chart.config.options.animation.onComplete = function(chartElement) {
				gaugeHelper.updateGaugeDimensions();
				gaugeHelper.animateArrow();
			};
			Chart.controllers.doughnut.prototype.initialize.apply(this, arguments);
		},
		draw: function() {
			Chart.controllers.doughnut.prototype.draw.apply(this, arguments);
			var gaugeHelper = this.gaugeHelper;
			gaugeHelper.updateGaugeDimensions();
			gaugeHelper.renderValueLabel();
			if (gaugeHelper.showMarkers) {
				gaugeHelper.renderLimits();
			}
			gaugeHelper.renderSmallValueArrow(gaugeHelper.minValue);
		}
	});
})();


/***/ })

}]);
//# sourceMappingURL=default~pages-history-history-module~pages-summary-summary-module-es2015.js.map