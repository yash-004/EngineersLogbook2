"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var request_timeout_1 = require("./request-timeout");
var math_1 = require("./math");
var Gauge = /** @class */ (function () {
    function Gauge(config) {
        this.leftTopOffset = 50;
        this.maxEasing = 1;
        if (!config.container) {
            throw new Error('Container element not found. Make sure container is initialized before creating Gauge');
        }
        if (!config.colors && !config.color) {
            throw new Error('Color is not specified. Please use `color` or `colors` property to specify the color');
        }
        var root = this.createRootSvgElement();
        config.container.appendChild(root);
        this.root = root;
        var fromAngle = config.fromAngle === undefined ? 220 : config.fromAngle;
        var toAngle = config.toAngle === undefined ? 500 : config.toAngle;
        var animationDuration = config.animationDuration;
        this.config = __assign(__assign({}, config), { fromAngle: fromAngle,
            toAngle: toAngle, easing: config.easing || math_1.cubicBezier(0, 0, 0.2, 1), lineWidth: config.lineWidth || 3.5, gaugeRadius: config.gaugeRadius || 35, animationDelay: config.animationDelay || 0, animationDuration: animationDuration === undefined ? 600 : animationDuration, colors: config.colors || Array(toAngle - fromAngle).fill(config.color) });
    }
    Gauge.prototype.createRootSvgElement = function () {
        var root = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        root.setAttribute('viewBox', '0 0 100 100');
        root.style.position = 'absolute';
        return root;
    };
    Gauge.prototype.draw = function (options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var _a = this.config, fromAngle = _a.fromAngle, value = _a.value;
        // Nothing to draw
        if (value === 0) {
            return Promise.resolve();
        }
        var _b = this.getAnimation(options), easing = _b.easing, animationDelay = _b.animationDelay, animationDuration = _b.animationDuration;
        var animationStep = 0;
        var lastAngle = fromAngle + value;
        var easingStep = this.maxEasing / (lastAngle - fromAngle);
        var animate = animationDuration > 0;
        return new Promise(function (resolve) {
            var _loop_1 = function (angle) {
                var timeout = animate
                    ? easing(easingStep * animationStep) * animationDuration
                    : 0;
                request_timeout_1.requestTimeout(function () {
                    _this.renderCircle(angle, animationStep++);
                    if (angle === lastAngle - 1) {
                        resolve();
                    }
                }, animationDelay + timeout);
            };
            for (var angle = fromAngle; angle < lastAngle; angle++) {
                _loop_1(angle);
            }
        });
    };
    Gauge.prototype.getAnimation = function (options) {
        return {
            easing: options.easing || this.config.easing,
            animationDelay: options.animationDelay === undefined
                ? this.config.animationDelay
                : options.animationDelay,
            animationDuration: options.animationDuration === undefined
                ? this.config.animationDuration
                : options.animationDuration
        };
    };
    Gauge.prototype.setValue = function (value, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var _a = this.config, fromAngle = _a.fromAngle, toAngle = _a.toAngle;
        var _b = this.getAnimation(options), easing = _b.easing, animationDuration = _b.animationDuration, animationDelay = _b.animationDelay;
        var maximumAllowedValue = toAngle - fromAngle;
        if (value > maximumAllowedValue) {
            value = maximumAllowedValue;
        }
        var animate = animationDuration > 0;
        var diff = value - this.root.childNodes.length;
        // Skip rendering because nothing changed
        if (diff === 0) {
            return Promise.resolve();
        }
        if (diff < 0) {
            return new Promise(function (resolve) {
                var reversed = Array.from(_this.root.childNodes)
                    .slice(diff)
                    .reverse();
                reversed.forEach(function (child, i) {
                    var timeFraction = (i * _this.maxEasing) / reversed.length;
                    var timeout = animate ? easing(timeFraction) * animationDuration : 0;
                    request_timeout_1.requestTimeout(function () {
                        _this.root.removeChild(child);
                        if (i === Math.abs(diff) - 1) {
                            resolve();
                        }
                    }, animationDelay + timeout);
                });
            });
        }
        var childCount = this.root.childNodes.length;
        var animationStep = 0;
        var colorStep = childCount;
        var lastAngle = fromAngle + childCount + diff;
        var easingStep = this.maxEasing / (lastAngle - (fromAngle + childCount));
        return new Promise(function (resolve) {
            var _loop_2 = function (angle) {
                var delay = animate
                    ? easing(easingStep * animationStep) * animationDuration
                    : 0;
                request_timeout_1.requestTimeout(function () {
                    _this.renderCircle(angle, colorStep++);
                    if (angle === lastAngle - 1) {
                        resolve();
                    }
                }, delay + animationDelay);
                animationStep++;
            };
            for (var angle = fromAngle + childCount; angle < lastAngle; angle++) {
                _loop_2(angle);
            }
        });
    };
    Gauge.prototype.insertAdjacentToRoot = function (where, html) {
        this.config.container.insertAdjacentHTML(where, html);
    };
    Gauge.prototype.getElementAtValue = function (value) {
        var circle = this.root.childNodes[value];
        if (!circle) {
            throw new Error("Element with value " + value + " not found");
        }
        var angle = circle.dataset.angle;
        if (angle === undefined) {
            throw new Error('Data attribute angle not found');
        }
        var circleRect = circle.getBoundingClientRect();
        var parentRect = this.root.getBoundingClientRect();
        return {
            element: circle,
            metadata: {
                relativeLeft: circleRect.left - parentRect.left,
                relativeTop: circleRect.top - parentRect.top,
                angle: parseFloat(angle)
            }
        };
    };
    Gauge.prototype.renderCircle = function (angle, colorStep) {
        var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        var color = this.config.colors[colorStep];
        var _a = math_1.calcCoordinatesFromAngle(this.config.gaugeRadius, angle), x = _a.x, y = _a.y;
        circle.setAttribute('cx', (this.leftTopOffset + x).toString());
        circle.setAttribute('cy', (this.leftTopOffset + y).toString());
        circle.setAttribute('r', this.config.lineWidth.toString());
        circle.setAttribute('data-angle', angle.toString());
        circle.setAttribute('fill', color);
        this.root.appendChild(circle);
    };
    return Gauge;
}());
exports.Gauge = Gauge;
