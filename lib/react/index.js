"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WarningCircle = exports.Warning = exports.WaitingCircleFill = exports.WaitingCircle = exports.Waiting = exports.Volume = exports.SuccessCircle = exports.Success = exports.StarFill = exports.Star = exports.Search = exports.PlusCircle = exports.Plus = exports.Minus = exports.Keyboard = exports.InfoCircleFill = exports.InfoCircle = exports.Info = exports.Empty = exports.DeleteKey = exports.CloseCircleFill = exports.CloseCircle = exports.Close = exports.ArrowUp = exports.ArrowRight = exports.ArrowLeft = exports.ArrowDown = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames29 = _interopRequireDefault(require("classnames"));

var _excluded = ["className", "type", "style", "prefixCls", "theme", "size"],
    _excluded2 = ["className"],
    _excluded3 = ["className"],
    _excluded4 = ["className"],
    _excluded5 = ["className"],
    _excluded6 = ["className"],
    _excluded7 = ["className"],
    _excluded8 = ["className"],
    _excluded9 = ["className"],
    _excluded10 = ["className"],
    _excluded11 = ["className"],
    _excluded12 = ["className"],
    _excluded13 = ["className"],
    _excluded14 = ["className"],
    _excluded15 = ["className"],
    _excluded16 = ["className"],
    _excluded17 = ["className"],
    _excluded18 = ["className"],
    _excluded19 = ["className"],
    _excluded20 = ["className"],
    _excluded21 = ["className"],
    _excluded22 = ["className"],
    _excluded23 = ["className"],
    _excluded24 = ["className"],
    _excluded25 = ["className"],
    _excluded26 = ["className"],
    _excluded27 = ["className"],
    _excluded28 = ["className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Icon = function Icon(props) {
  var _classnames;

  var className = props.className,
      type = props.type,
      style = props.style,
      _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'za-icon' : _props$prefixCls,
      _props$theme = props.theme,
      theme = _props$theme === void 0 ? 'default' : _props$theme,
      _props$size = props.size,
      size = _props$size === void 0 ? 'md' : _props$size,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var cls = (0, _classnames29["default"])(prefixCls, className, (_classnames = {}, (0, _defineProperty2["default"])(_classnames, "".concat(prefixCls, "--").concat(type), !!type), (0, _defineProperty2["default"])(_classnames, "".concat(prefixCls, "--").concat(theme), !!theme), (0, _defineProperty2["default"])(_classnames, "".concat(prefixCls, "--").concat(size), !!size), _classnames));

  var newProps = _objectSpread({
    className: cls,
    style: style,
    type: type,
    theme: theme,
    size: size
  }, rest);

  return /*#__PURE__*/React.createElement("span", newProps);
};

var ArrowDown = function ArrowDown(props) {
  var className = props.className,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded2);
  var cls = (0, _classnames29["default"])(className, (0, _defineProperty2["default"])({}, "icon-arrow-down", true));

  var newProps = _objectSpread({
    className: cls
  }, rest);

  return /*#__PURE__*/React.createElement(Icon, newProps);
};

exports.ArrowDown = ArrowDown;

var ArrowRight = function ArrowRight(props) {
  var className = props.className,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded3);
  var cls = (0, _classnames29["default"])(className, (0, _defineProperty2["default"])({}, "icon-arrow-right", true));

  var newProps = _objectSpread({
    className: cls
  }, rest);

  return /*#__PURE__*/React.createElement(Icon, newProps);
};

exports.ArrowRight = ArrowRight;

var CloseCircle = function CloseCircle(props) {
  var className = props.className,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded4);
  var cls = (0, _classnames29["default"])(className, (0, _defineProperty2["default"])({}, "icon-close-circle", true));

  var newProps = _objectSpread({
    className: cls
  }, rest);

  return /*#__PURE__*/React.createElement(Icon, newProps);
};

exports.CloseCircle = CloseCircle;

var ArrowLeft = function ArrowLeft(props) {
  var className = props.className,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded5);
  var cls = (0, _classnames29["default"])(className, (0, _defineProperty2["default"])({}, "icon-arrow-left", true));

  var newProps = _objectSpread({
    className: cls
  }, rest);

  return /*#__PURE__*/React.createElement(Icon, newProps);
};

exports.ArrowLeft = ArrowLeft;

var ArrowUp = function ArrowUp(props) {
  var className = props.className,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded6);
  var cls = (0, _classnames29["default"])(className, (0, _defineProperty2["default"])({}, "icon-arrow-up", true));

  var newProps = _objectSpread({
    className: cls
  }, rest);

  return /*#__PURE__*/React.createElement(Icon, newProps);
};

exports.ArrowUp = ArrowUp;

var Close = function Close(props) {
  var className = props.className,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded7);
  var cls = (0, _classnames29["default"])(className, (0, _defineProperty2["default"])({}, "icon-close", true));

  var newProps = _objectSpread({
    className: cls
  }, rest);

  return /*#__PURE__*/React.createElement(Icon, newProps);
};

exports.Close = Close;

var CloseCircleFill = function CloseCircleFill(props) {
  var className = props.className,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded8);
  var cls = (0, _classnames29["default"])(className, (0, _defineProperty2["default"])({}, "icon-close-circle-fill", true));

  var newProps = _objectSpread({
    className: cls
  }, rest);

  return /*#__PURE__*/React.createElement(Icon, newProps);
};

exports.CloseCircleFill = CloseCircleFill;

var DeleteKey = function DeleteKey(props) {
  var className = props.className,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded9);
  var cls = (0, _classnames29["default"])(className, (0, _defineProperty2["default"])({}, "icon-delete-key", true));

  var newProps = _objectSpread({
    className: cls
  }, rest);

  return /*#__PURE__*/React.createElement(Icon, newProps);
};

exports.DeleteKey = DeleteKey;

var Empty = function Empty(props) {
  var className = props.className,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded10);
  var cls = (0, _classnames29["default"])(className, (0, _defineProperty2["default"])({}, "icon-empty", true));

  var newProps = _objectSpread({
    className: cls
  }, rest);

  return /*#__PURE__*/React.createElement(Icon, newProps);
};

exports.Empty = Empty;

var InfoCircleFill = function InfoCircleFill(props) {
  var className = props.className,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded11);
  var cls = (0, _classnames29["default"])(className, (0, _defineProperty2["default"])({}, "icon-info-circle-fill", true));

  var newProps = _objectSpread({
    className: cls
  }, rest);

  return /*#__PURE__*/React.createElement(Icon, newProps);
};

exports.InfoCircleFill = InfoCircleFill;

var InfoCircle = function InfoCircle(props) {
  var className = props.className,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded12);
  var cls = (0, _classnames29["default"])(className, (0, _defineProperty2["default"])({}, "icon-info-circle", true));

  var newProps = _objectSpread({
    className: cls
  }, rest);

  return /*#__PURE__*/React.createElement(Icon, newProps);
};

exports.InfoCircle = InfoCircle;

var Info = function Info(props) {
  var className = props.className,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded13);
  var cls = (0, _classnames29["default"])(className, (0, _defineProperty2["default"])({}, "icon-info", true));

  var newProps = _objectSpread({
    className: cls
  }, rest);

  return /*#__PURE__*/React.createElement(Icon, newProps);
};

exports.Info = Info;

var Keyboard = function Keyboard(props) {
  var className = props.className,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded14);
  var cls = (0, _classnames29["default"])(className, (0, _defineProperty2["default"])({}, "icon-keyboard", true));

  var newProps = _objectSpread({
    className: cls
  }, rest);

  return /*#__PURE__*/React.createElement(Icon, newProps);
};

exports.Keyboard = Keyboard;

var Minus = function Minus(props) {
  var className = props.className,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded15);
  var cls = (0, _classnames29["default"])(className, (0, _defineProperty2["default"])({}, "icon-minus", true));

  var newProps = _objectSpread({
    className: cls
  }, rest);

  return /*#__PURE__*/React.createElement(Icon, newProps);
};

exports.Minus = Minus;

var PlusCircle = function PlusCircle(props) {
  var className = props.className,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded16);
  var cls = (0, _classnames29["default"])(className, (0, _defineProperty2["default"])({}, "icon-plus-circle", true));

  var newProps = _objectSpread({
    className: cls
  }, rest);

  return /*#__PURE__*/React.createElement(Icon, newProps);
};

exports.PlusCircle = PlusCircle;

var Plus = function Plus(props) {
  var className = props.className,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded17);
  var cls = (0, _classnames29["default"])(className, (0, _defineProperty2["default"])({}, "icon-plus", true));

  var newProps = _objectSpread({
    className: cls
  }, rest);

  return /*#__PURE__*/React.createElement(Icon, newProps);
};

exports.Plus = Plus;

var Search = function Search(props) {
  var className = props.className,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded18);
  var cls = (0, _classnames29["default"])(className, (0, _defineProperty2["default"])({}, "icon-search", true));

  var newProps = _objectSpread({
    className: cls
  }, rest);

  return /*#__PURE__*/React.createElement(Icon, newProps);
};

exports.Search = Search;

var Star = function Star(props) {
  var className = props.className,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded19);
  var cls = (0, _classnames29["default"])(className, (0, _defineProperty2["default"])({}, "icon-star", true));

  var newProps = _objectSpread({
    className: cls
  }, rest);

  return /*#__PURE__*/React.createElement(Icon, newProps);
};

exports.Star = Star;

var SuccessCircle = function SuccessCircle(props) {
  var className = props.className,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded20);
  var cls = (0, _classnames29["default"])(className, (0, _defineProperty2["default"])({}, "icon-success-circle", true));

  var newProps = _objectSpread({
    className: cls
  }, rest);

  return /*#__PURE__*/React.createElement(Icon, newProps);
};

exports.SuccessCircle = SuccessCircle;

var StarFill = function StarFill(props) {
  var className = props.className,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded21);
  var cls = (0, _classnames29["default"])(className, (0, _defineProperty2["default"])({}, "icon-star-fill", true));

  var newProps = _objectSpread({
    className: cls
  }, rest);

  return /*#__PURE__*/React.createElement(Icon, newProps);
};

exports.StarFill = StarFill;

var WaitingCircleFill = function WaitingCircleFill(props) {
  var className = props.className,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded22);
  var cls = (0, _classnames29["default"])(className, (0, _defineProperty2["default"])({}, "icon-waiting-circle-fill", true));

  var newProps = _objectSpread({
    className: cls
  }, rest);

  return /*#__PURE__*/React.createElement(Icon, newProps);
};

exports.WaitingCircleFill = WaitingCircleFill;

var Volume = function Volume(props) {
  var className = props.className,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded23);
  var cls = (0, _classnames29["default"])(className, (0, _defineProperty2["default"])({}, "icon-volume", true));

  var newProps = _objectSpread({
    className: cls
  }, rest);

  return /*#__PURE__*/React.createElement(Icon, newProps);
};

exports.Volume = Volume;

var WaitingCircle = function WaitingCircle(props) {
  var className = props.className,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded24);
  var cls = (0, _classnames29["default"])(className, (0, _defineProperty2["default"])({}, "icon-waiting-circle", true));

  var newProps = _objectSpread({
    className: cls
  }, rest);

  return /*#__PURE__*/React.createElement(Icon, newProps);
};

exports.WaitingCircle = WaitingCircle;

var Waiting = function Waiting(props) {
  var className = props.className,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded25);
  var cls = (0, _classnames29["default"])(className, (0, _defineProperty2["default"])({}, "icon-waiting", true));

  var newProps = _objectSpread({
    className: cls
  }, rest);

  return /*#__PURE__*/React.createElement(Icon, newProps);
};

exports.Waiting = Waiting;

var WarningCircle = function WarningCircle(props) {
  var className = props.className,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded26);
  var cls = (0, _classnames29["default"])(className, (0, _defineProperty2["default"])({}, "icon-warning-circle", true));

  var newProps = _objectSpread({
    className: cls
  }, rest);

  return /*#__PURE__*/React.createElement(Icon, newProps);
};

exports.WarningCircle = WarningCircle;

var Success = function Success(props) {
  var className = props.className,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded27);
  var cls = (0, _classnames29["default"])(className, (0, _defineProperty2["default"])({}, "icon-success", true));

  var newProps = _objectSpread({
    className: cls
  }, rest);

  return /*#__PURE__*/React.createElement(Icon, newProps);
};

exports.Success = Success;

var Warning = function Warning(props) {
  var className = props.className,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded28);
  var cls = (0, _classnames29["default"])(className, (0, _defineProperty2["default"])({}, "icon-warning", true));

  var newProps = _objectSpread({
    className: cls
  }, rest);

  return /*#__PURE__*/React.createElement(Icon, newProps);
};

exports.Warning = Warning;