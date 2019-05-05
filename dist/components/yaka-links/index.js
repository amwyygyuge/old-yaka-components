"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  margin: "3px 0",
  display: "block"
};
var Links = function Links(props) {
  var _props$links = props.links,
      links = _props$links === undefined ? [] : _props$links;

  return links.map(function (_ref) {
    var value = _ref.value,
        name = _ref.name;
    return _react2.default.createElement(
      "a",
      { style: style, key: value, href: value, target: "_blank" },
      name ? name : value
    );
  });
};

exports.default = Links;