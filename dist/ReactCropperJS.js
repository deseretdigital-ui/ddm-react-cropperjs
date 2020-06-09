"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _cropperjs = _interopRequireDefault(require("cropperjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ReactCropperJS = /*#__PURE__*/function (_PureComponent) {
  _inherits(ReactCropperJS, _PureComponent);

  var _super = _createSuper(ReactCropperJS);

  function ReactCropperJS() {
    var _this;

    _classCallCheck(this, ReactCropperJS);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "crop", function (event) {
      _this.props.crop(event, _this.getCroppedImgDataURL());
    });

    _defineProperty(_assertThisInitialized(_this), "cropend", function (event) {
      _this.props.cropend(event, _this.getCroppedImgDataURL());
    });

    _defineProperty(_assertThisInitialized(_this), "cropmove", function (event) {
      _this.props.cropmove(event, _this.getCroppedImgDataURL());
    });

    _defineProperty(_assertThisInitialized(_this), "cropstart", function (event) {
      _this.props.cropstart(event, _this.getCroppedImgDataURL());
    });

    _defineProperty(_assertThisInitialized(_this), "ready", function (event) {
      _this.props.ready(event, _this.getCroppedImgDataURL());
    });

    _defineProperty(_assertThisInitialized(_this), "zoom", function (event) {
      _this.props.zoom(event, _this.getCroppedImgDataURL());
    });

    _defineProperty(_assertThisInitialized(_this), "moveTo", function (x, y) {
      return _this.cropper.moveTo(x, y);
    });

    _defineProperty(_assertThisInitialized(_this), "zoomTo", function (ratio) {
      return _this.cropper.zoomTo(ratio);
    });

    _defineProperty(_assertThisInitialized(_this), "rotate", function (degree) {
      return _this.cropper.rotate(degree);
    });

    _defineProperty(_assertThisInitialized(_this), "rotateTo", function (degree) {
      return _this.cropper.rotateTo(degree);
    });

    _defineProperty(_assertThisInitialized(_this), "enable", function () {
      return _this.cropper.enable();
    });

    _defineProperty(_assertThisInitialized(_this), "disable", function () {
      return _this.cropper.disable();
    });

    _defineProperty(_assertThisInitialized(_this), "reset", function () {
      return _this.cropper.reset();
    });

    _defineProperty(_assertThisInitialized(_this), "clear", function () {
      return _this.cropper.clear();
    });

    _defineProperty(_assertThisInitialized(_this), "replace", function (url) {
      return _this.cropper.replace(url);
    });

    _defineProperty(_assertThisInitialized(_this), "scaleX", function (scaleX) {
      return _this.cropper.scaleX(scaleX);
    });

    _defineProperty(_assertThisInitialized(_this), "scaleY", function (scaleY) {
      return _this.cropper.scaleY(scaleY);
    });

    _defineProperty(_assertThisInitialized(_this), "getData", function (rounded) {
      return _this.cropper.getData(rounded);
    });

    _defineProperty(_assertThisInitialized(_this), "setData", function (data) {
      return _this.cropper.setData(data);
    });

    _defineProperty(_assertThisInitialized(_this), "getContainerData", function () {
      return _this.cropper.getContainerData();
    });

    _defineProperty(_assertThisInitialized(_this), "getImageData", function () {
      return _this.cropper.getImageData();
    });

    _defineProperty(_assertThisInitialized(_this), "getCanvasData", function () {
      return _this.cropper.getCanvasData();
    });

    _defineProperty(_assertThisInitialized(_this), "setCanvasData", function (data) {
      return _this.cropper.setCanvasData(data);
    });

    _defineProperty(_assertThisInitialized(_this), "getCropBoxData", function () {
      return _this.cropper.getCropBoxData();
    });

    _defineProperty(_assertThisInitialized(_this), "setCropBoxData", function (data) {
      return _this.cropper.setCropBoxData(data);
    });

    _defineProperty(_assertThisInitialized(_this), "getCroppedCanvas", function (options) {
      return _this.cropper.getCroppedCanvas(options);
    });

    _defineProperty(_assertThisInitialized(_this), "setAspectRatio", function (aspectRatio) {
      return _this.cropper.setAspectRatio(aspectRatio);
    });

    _defineProperty(_assertThisInitialized(_this), "setDragMode", function (dragMode) {
      return _this.cropper.setDragMode(dragMode);
    });

    return _this;
  }

  _createClass(ReactCropperJS, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var options = {},
          prop;

      for (prop in this.props) {
        if (prop !== 'src' && prop !== 'alt' && prop !== 'crossOrigin') {
          var propValue = this.props[prop];

          if (typeof this.props[prop] === 'function' && this.hasOwnProperty(prop)) {
            propValue = this[prop];
          }

          options[prop] = propValue;
        }
      }

      this.cropper = new _cropperjs["default"](this.refs.img, options);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.src !== prevProps.src) {
        this.cropper.reset().clear().replace(this.props.src);
      }

      if (this.props.aspectRatio !== prevProps.aspectRatio) {
        this.setAspectRatio(this.props.aspectRatio);
      }

      if (this.props.data !== prevProps.data) {
        this.setData(this.props.data);
      }

      if (this.props.dragMode !== prevProps.dragMode) {
        this.setDragMode(this.props.dragMode);
      }

      if (this.props.cropBoxData !== prevProps.cropBoxData) {
        this.setCropBoxData(this.props.cropBoxData);
      }

      if (this.props.canvasData !== prevProps.canvasData) {
        this.setCanvasData(this.props.canvasData);
      }

      if (this.props.moveTo !== prevProps.moveTo) {
        if (this.props.moveTo.length > 1) {
          this.moveTo(this.props.moveTo[0], this.props.moveTo[1]);
        } else {
          this.moveTo(this.props.moveTo[0]);
        }
      }

      if (this.props.zoomTo !== prevProps.zoomTo) {
        this.zoomTo(this.props.zoomTo);
      }

      if (this.props.rotateTo !== prevProps.rotateTo) {
        this.rotateTo(this.props.rotateTo);
      }

      if (this.props.scaleX !== prevProps.scaleX) {
        this.scaleX(this.props.scaleX);
      }

      if (this.props.scaleY !== prevProps.scaleY) {
        this.scaleY(this.props.scaleY);
      }

      if (this.props.enable !== prevProps.enable) {
        if (this.props.enable) {
          this.enable();
        } else {
          this.disable();
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.cropper) {
        // Destroy the cropper, this makes sure events
        // such as resize are cleaned up and do not leak
        this.cropper.destroy();
      }
    }
  }, {
    key: "getCroppedImgDataURL",
    value: function getCroppedImgDataURL() {
      return this.getCroppedCanvas().toDataURL(this.props.imgType, this.props.imgQuality);
    } // Event handlers

  }, {
    key: "move",
    // CropperJS wrapped functions
    value: function move(offsetX, offsetY) {
      return this.cropper.move(offsetX, offsetY);
    }
  }, {
    key: "render",
    value: function render() {
      var imgStyle = {
        opacity: 0
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        src: null,
        alt: null,
        style: this.props.style
      }, /*#__PURE__*/_react["default"].createElement("img", {
        crossOrigin: this.props.crossOrigin,
        ref: "img",
        src: this.props.src,
        alt: this.props.alt,
        style: imgStyle
      }));
    }
  }]);

  return ReactCropperJS;
}(_react.PureComponent);

_defineProperty(ReactCropperJS, "propTypes", {
  // DDM react cropperJS options
  alt: _propTypes["default"].string,
  crossOrigin: _propTypes["default"].string,
  src: _propTypes["default"].string.isRequired,
  // CropperJS options
  aspectRatio: _propTypes["default"].number,
  autoCrop: _propTypes["default"].bool,
  autoCropArea: _propTypes["default"].number,
  background: _propTypes["default"].bool,
  center: _propTypes["default"].bool,
  checkCrossOrigin: _propTypes["default"].bool,
  checkOrientation: _propTypes["default"].bool,
  cropBoxMovable: _propTypes["default"].bool,
  cropBoxResizable: _propTypes["default"].bool,
  guides: _propTypes["default"].bool,
  highlight: _propTypes["default"].bool,
  minCanvasHeight: _propTypes["default"].number,
  minCanvasWidth: _propTypes["default"].number,
  minContainerHeight: _propTypes["default"].number,
  minContainerWidth: _propTypes["default"].number,
  minCropBoxHeight: _propTypes["default"].number,
  minCropBoxWidth: _propTypes["default"].number,
  modal: _propTypes["default"].bool,
  movable: _propTypes["default"].bool,
  preview: _propTypes["default"].string,
  restore: _propTypes["default"].bool,
  responsive: _propTypes["default"].bool,
  rotatable: _propTypes["default"].bool,
  scalable: _propTypes["default"].bool,
  toggleDragModeOnDblclick: _propTypes["default"].bool,
  viewMode: _propTypes["default"].oneOf([0, 1, 2, 3]),
  wheelZoomRation: _propTypes["default"].number,
  zoomable: _propTypes["default"].bool,
  zoomOnTouch: _propTypes["default"].bool,
  zoomOnWheel: _propTypes["default"].bool,
  // CropperJS event callbacks
  crop: _propTypes["default"].func,
  cropend: _propTypes["default"].func,
  cropmove: _propTypes["default"].func,
  cropstart: _propTypes["default"].func,
  ready: _propTypes["default"].func,
  zoom: _propTypes["default"].func,
  // Variable props
  canvasData: _propTypes["default"].shape({
    left: _propTypes["default"].number,
    top: _propTypes["default"].number,
    width: _propTypes["default"].number,
    height: _propTypes["default"].number
  }),
  cropBoxData: _propTypes["default"].shape({
    left: _propTypes["default"].number,
    top: _propTypes["default"].number,
    width: _propTypes["default"].number,
    height: _propTypes["default"].number
  }),
  data: _propTypes["default"].shape({
    x: _propTypes["default"].number,
    y: _propTypes["default"].number,
    width: _propTypes["default"].number,
    height: _propTypes["default"].number,
    rotate: _propTypes["default"].number,
    scaleX: _propTypes["default"].number,
    scaleY: _propTypes["default"].number
  }),
  dragMode: _propTypes["default"].oneOf(['crop', 'move', 'none']),
  enable: _propTypes["default"].bool,
  moveTo: _propTypes["default"].arrayOf(_propTypes["default"].number),
  rotateTo: _propTypes["default"].number,
  scaleX: _propTypes["default"].number,
  scaleY: _propTypes["default"].number,
  style: _propTypes["default"].object,
  zoomTo: _propTypes["default"].number,
  // Type of image and the quality of the image to return as a data URL
  imgType: _propTypes["default"].string,
  imgQuality: _propTypes["default"].number
});

_defineProperty(ReactCropperJS, "defaultProps", {
  alt: '',
  canvasData: null,
  cropBoxData: null,
  crossOrigin: null,
  data: null,
  dragMode: 'crop',
  enable: true,
  imgType: 'image/jpeg',
  imgQuality: 0.92,
  rotateTo: 0,
  scaleX: 1,
  scaleY: 1,
  src: null,
  style: null,
  zoomTo: 1
});

var _default = ReactCropperJS;
exports["default"] = _default;