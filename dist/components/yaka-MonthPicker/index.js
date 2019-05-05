'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _datePicker = require('igroot/lib/date-picker');

var _datePicker2 = _interopRequireDefault(_datePicker);

require('igroot/lib/date-picker/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

require('moment/locale/zh-cn');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_moment2.default.locale('zh-cn');
var format = "YYYY-MM";
var MonthPicker = _datePicker2.default.MonthPicker;
var _MonthPicker = function _MonthPicker(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange;

  var _value = value ? (0, _moment2.default)(value) : undefined;
  var resolveOnchange = function resolveOnchange(value) {
    onChange && onChange(value ? (0, _moment2.default)(value).format(format) : undefined);
  };
  return _react2.default.createElement(MonthPicker, { value: _value, onChange: resolveOnchange });
};

exports.default = _MonthPicker;