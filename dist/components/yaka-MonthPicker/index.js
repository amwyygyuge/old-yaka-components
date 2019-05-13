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
var defaultFormat = "YYYY-MM";
var MonthPicker = _datePicker2.default.MonthPicker;
var _MonthPicker = function _MonthPicker(props) {
  var value = props.value,
      onChange = props.onChange,
      format = props.format;

  var _format = format ? format : defaultFormat;
  var _value = value ? (0, _moment2.default)(value, _format) : undefined;
  var resolveOnchange = function resolveOnchange(value) {
    onChange && onChange(value ? (0, _moment2.default)(value).format(_format) : undefined);
  };
  return _react2.default.createElement(MonthPicker, { value: _value, onChange: resolveOnchange, format: _format });
};

exports.default = _MonthPicker;