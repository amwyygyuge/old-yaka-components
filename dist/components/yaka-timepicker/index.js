'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _timePicker = require('igroot/lib/time-picker');

var _timePicker2 = _interopRequireDefault(_timePicker);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('igroot/lib/time-picker/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

require('moment/locale/zh-cn');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_moment2.default.locale('zh-cn');
var defaultFormat = "HH:mm:ss";
var _TimePicker = function _TimePicker(props) {
  var value = props.value,
      onChange = props.onChange,
      format = props.format;

  var _format = format ? format : defaultFormat;
  var _value = value ? (0, _moment2.default)(value, _format) : undefined;
  var resolveOnchange = function resolveOnchange(value) {
    onChange && onChange(value ? (0, _moment2.default)(value).format(_format) : undefined);
  };
  return _react2.default.createElement(_timePicker2.default, _extends({}, props, { value: _value, onChange: resolveOnchange, format: _format }));
};

exports.default = _TimePicker;