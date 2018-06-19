'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.YakaSelect = undefined;

var _select = require('igroot/lib/select');

var _select2 = _interopRequireDefault(_select);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('igroot/lib/select/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _select2.default.Option;

var YakaSelect = exports.YakaSelect = function (_Component) {
    _inherits(YakaSelect, _Component);

    function YakaSelect() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, YakaSelect);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = YakaSelect.__proto__ || Object.getPrototypeOf(YakaSelect)).call.apply(_ref, [this].concat(args))), _this), _this.handleFilterOption = function (input, option) {
            var _this$props = _this.props,
                searchKeys = _this$props.searchKeys,
                options = _this$props.options;

            var inputText = input.toLowerCase();
            var optionValue = option.props.value.toLowerCase();
            var optionChildren = option.props.children.toLowerCase();
            var isMatch = optionValue.indexOf(inputText) >= 0 || optionChildren.indexOf(inputText) >= 0;

            if (searchKeys && searchKeys.length) {
                var optionItem = options.filter(function (item) {
                    return item.value.toLowerCase() === optionValue;
                })[0];

                searchKeys.map(function (key) {
                    isMatch = isMatch || optionItem[key] && optionItem[key].toLowerCase().indexOf(inputText) >= 0;
                });
            }

            return isMatch;
        }, _this.findOption = function (key) {
            var options = _this.props.options;

            if (!!options && Array.isArray(options)) {
                var option = options.find(function (item) {
                    return '' + item.value === '' + key;
                });
                if (!!option) {
                    return { key: key, label: option.label };
                } else {
                    return { key: key, label: key };
                }
            } else {
                return { key: key, label: key };
            }
        }, _this.tranform_value = function (value) {
            if (!!value) {
                if (Array.isArray(value)) {
                    return value.map(function (item) {
                        if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) !== "object") {
                            return _this.findOption(item);
                        } else {
                            return item;
                        }
                    });
                } else {
                    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== "object") {
                        return _this.findOption(value);
                    } else {
                        return value;
                    }
                }
            } else {
                return undefined;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(YakaSelect, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                options = _props.options,
                value = _props.value,
                mode = _props.mode;

            var _value = this.tranform_value(value);
            var _options = [];
            if (options && Array.isArray(options)) {
                _options = options.map(function (option) {
                    return _react2.default.createElement(
                        Option,
                        { key: '' + option.value, value: '' + option.value },
                        option.label
                    );
                });
            }
            return _react2.default.createElement(
                _select2.default,
                _extends({
                    showSearch: true,
                    allowClear: true,
                    filterOption: this.handleFilterOption
                }, this.props, {
                    value: _value,
                    labelInValue: true,
                    style: { width: '100%' }
                }),
                _options
            );
        }
    }]);

    return YakaSelect;
}(_react.Component);