'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _timePicker = require('igroot/lib/time-picker');

var _timePicker2 = _interopRequireDefault(_timePicker);

require('igroot/lib/time-picker/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

require('moment/locale/zh-cn');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_moment2.default.locale('zh-cn');
var format = "YYYY-MM HH:mm:ss";
var _TimePicker = function _TimePicker(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange;

  var _value = value ? (0, _moment2.default)(value) : undefined;
  var resolveOnchange = function resolveOnchange(value) {
    onChange && onChange(value ? (0, _moment2.default)(value).format(format) : undefined);
  };
  return _react2.default.createElement(_timePicker2.default, { value: _value, onChange: resolveOnchange, showTime: true });
};

exports.default = _TimePicker;