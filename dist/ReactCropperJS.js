'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _cropperjs = require('cropperjs');

var _cropperjs2 = _interopRequireDefault(_cropperjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactCropperJS = function (_Component) {
  _inherits(ReactCropperJS, _Component);

  function ReactCropperJS() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ReactCropperJS);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ReactCropperJS.__proto__ || Object.getPrototypeOf(ReactCropperJS)).call.apply(_ref, [this].concat(args))), _this), _this.crop = function (event) {
      _this.props.crop(event, _this.getCroppedImgDataURL());
    }, _this.cropend = function (event) {
      _this.props.cropend(event, _this.getCroppedImgDataURL());
    }, _this.cropmove = function (event) {
      _this.props.cropmove(event, _this.getCroppedImgDataURL());
    }, _this.cropstart = function (event) {
      _this.props.cropstart(event, _this.getCroppedImgDataURL());
    }, _this.ready = function (event) {
      _this.props.ready(event, _this.getCroppedImgDataURL());
    }, _this.zoom = function (event) {
      _this.props.zoom(event, _this.getCroppedImgDataURL());
    }, _this.moveTo = function (x, y) {
      return _this.cropper.moveTo(x, y);
    }, _this.zoomTo = function (ratio) {
      return _this.cropper.zoomTo(ratio);
    }, _this.rotate = function (degree) {
      return _this.cropper.rotate(degree);
    }, _this.rotateTo = function (degree) {
      return _this.cropper.rotateTo(degree);
    }, _this.enable = function () {
      return _this.cropper.enable();
    }, _this.disable = function () {
      return _this.cropper.disable();
    }, _this.reset = function () {
      return _this.cropper.reset();
    }, _this.clear = function () {
      return _this.cropper.clear();
    }, _this.replace = function (url) {
      return _this.cropper.replace(url);
    }, _this.scaleX = function (scaleX) {
      return _this.cropper.scaleX(scaleX);
    }, _this.scaleY = function (scaleY) {
      return _this.cropper.scaleY(scaleY);
    }, _this.getData = function (rounded) {
      return _this.cropper.getData(rounded);
    }, _this.setData = function (data) {
      return _this.cropper.setData(data);
    }, _this.getContainerData = function () {
      return _this.cropper.getContainerData();
    }, _this.getImageData = function () {
      return _this.cropper.getImageData();
    }, _this.getCanvasData = function () {
      return _this.cropper.getCanvasData();
    }, _this.setCanvasData = function (data) {
      return _this.cropper.setCanvasData(data);
    }, _this.getCropBoxData = function () {
      return _this.cropper.getCropBoxData();
    }, _this.setCropBoxData = function (data) {
      return _this.cropper.setCropBoxData(data);
    }, _this.getCroppedCanvas = function (options) {
      return _this.cropper.getCroppedCanvas(options);
    }, _this.setAspectRatio = function (aspectRatio) {
      return _this.cropper.setAspectRatio(aspectRatio);
    }, _this.setDragMode = function (dragMode) {
      return _this.cropper.setDragMode(dragMode);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ReactCropperJS, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var options = {},
          prop = void 0;
      for (prop in this.props) {
        if (prop !== 'src' && prop !== 'alt' && prop !== 'crossOrigin') {
          var propValue = this.props[prop];

          if (typeof this.props[prop] === 'function' && this.hasOwnProperty(prop)) {
            propValue = this[prop];
          }

          options[prop] = propValue;
        }
      }

      this.cropper = new _cropperjs2.default(this.refs.img, options);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.src !== this.props.src) {
        this.cropper.reset().clear().replace(nextProps.src);
      }

      if (nextProps.aspectRatio !== this.props.aspectRatio) {
        this.setAspectRatio(nextProps.aspectRatio);
      }

      if (nextProps.data !== this.props.data) {
        this.setData(nextProps.data);
      }

      if (nextProps.dragMode !== this.props.dragMode) {
        this.setDragMode(nextProps.dragMode);
      }

      if (nextProps.cropBoxData !== this.props.cropBoxData) {
        this.setCropBoxData(nextProps.cropBoxData);
      }

      if (nextProps.canvasData !== this.props.canvasData) {
        this.setCanvasData(nextProps.canvasData);
      }

      if (nextProps.moveTo !== this.props.moveTo) {
        if (nextProps.moveTo.length > 1) {
          this.moveTo(nextProps.moveTo[0], nextProps.moveTo[1]);
        } else {
          this.moveTo(nextProps.moveTo[0]);
        }
      }

      if (nextProps.zoomTo !== this.props.zoomTo) {
        this.zoomTo(nextProps.zoomTo);
      }

      if (nextProps.rotateTo !== this.props.rotateTo) {
        this.rotateTo(nextProps.rotateTo);
      }

      if (nextProps.scaleX !== this.props.scaleX) {
        this.scaleX(nextProps.scaleX);
      }

      if (nextProps.scaleY !== this.props.scaleY) {
        this.scaleY(nextProps.scaleY);
      }

      if (nextProps.enable !== this.props.enable) {
        if (nextProps.enable) {
          this.enable();
        } else {
          this.disable();
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.cropper) {
        // Destroy the cropper, this makes sure events
        // such as resize are cleaned up and do not leak
        this.cropper.destroy();
      }
    }
  }, {
    key: 'getCroppedImgDataURL',
    value: function getCroppedImgDataURL() {
      return this.getCroppedCanvas().toDataURL(this.props.imgType, this.props.imgQuality);
    }

    // Event handlers

  }, {
    key: 'move',


    // CropperJS wrapped functions
    value: function move(offsetX, offsetY) {
      return this.cropper.move(offsetX, offsetY);
    }
  }, {
    key: 'render',
    value: function render() {
      var imgStyle = {
        opacity: 0
      };
      return _react2.default.createElement(
        'div',
        {
          src: null,
          crossOrigin: null,
          alt: null,
          style: this.props.style
        },
        _react2.default.createElement('img', {
          crossOrigin: this.props.crossOrigin,
          ref: 'img',
          src: this.props.src,
          alt: this.props.alt,
          style: imgStyle
        })
      );
    }
  }]);

  return ReactCropperJS;
}(_react.Component);

ReactCropperJS.propTypes = {
  // DDM react cropperJS options
  alt: _propTypes2.default.string,
  crossOrigin: _propTypes2.default.string,
  src: _propTypes2.default.string.isRequired,

  // CropperJS options
  aspectRatio: _propTypes2.default.number,
  autoCrop: _propTypes2.default.bool,
  autoCropArea: _propTypes2.default.number,
  background: _propTypes2.default.bool,
  center: _propTypes2.default.bool,
  checkCrossOrigin: _propTypes2.default.bool,
  checkOrientation: _propTypes2.default.bool,
  cropBoxMovable: _propTypes2.default.bool,
  cropBoxResizable: _propTypes2.default.bool,
  guides: _propTypes2.default.bool,
  highlight: _propTypes2.default.bool,
  minCanvasHeight: _propTypes2.default.number,
  minCanvasWidth: _propTypes2.default.number,
  minContainerHeight: _propTypes2.default.number,
  minContainerWidth: _propTypes2.default.number,
  minCropBoxHeight: _propTypes2.default.number,
  minCropBoxWidth: _propTypes2.default.number,
  modal: _propTypes2.default.bool,
  movable: _propTypes2.default.bool,
  preview: _propTypes2.default.string,
  restore: _propTypes2.default.bool,
  responsive: _propTypes2.default.bool,
  rotatable: _propTypes2.default.bool,
  scalable: _propTypes2.default.bool,
  toggleDragModeOnDblclick: _propTypes2.default.bool,
  viewMode: _propTypes2.default.oneOf([0, 1, 2, 3]),
  wheelZoomRation: _propTypes2.default.number,
  zoomable: _propTypes2.default.bool,
  zoomOnTouch: _propTypes2.default.bool,
  zoomOnWheel: _propTypes2.default.bool,

  // CropperJS event callbacks
  crop: _propTypes2.default.func,
  cropend: _propTypes2.default.func,
  cropmove: _propTypes2.default.func,
  cropstart: _propTypes2.default.func,
  ready: _propTypes2.default.func,
  zoom: _propTypes2.default.func,

  // Variable props
  canvasData: _propTypes2.default.shape({
    left: _propTypes2.default.number,
    top: _propTypes2.default.number,
    width: _propTypes2.default.number,
    height: _propTypes2.default.number
  }),
  cropBoxData: _propTypes2.default.shape({
    left: _propTypes2.default.number,
    top: _propTypes2.default.number,
    width: _propTypes2.default.number,
    height: _propTypes2.default.number
  }),
  data: _propTypes2.default.shape({
    x: _propTypes2.default.number,
    y: _propTypes2.default.number,
    width: _propTypes2.default.number,
    height: _propTypes2.default.number,
    rotate: _propTypes2.default.number,
    scaleX: _propTypes2.default.number,
    scaleY: _propTypes2.default.number
  }),
  dragMode: _propTypes2.default.oneOf(['crop', 'move', 'none']),
  enable: _propTypes2.default.bool,
  moveTo: _propTypes2.default.arrayOf(_propTypes2.default.number),
  rotateTo: _propTypes2.default.number,
  scaleX: _propTypes2.default.number,
  scaleY: _propTypes2.default.number,
  style: _propTypes2.default.object,
  zoomTo: _propTypes2.default.number,

  // Type of image and the quality of the image to return as a data URL
  imgType: _propTypes2.default.string,
  imgQuality: _propTypes2.default.number
};
ReactCropperJS.defaultProps = {
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
};
exports.default = ReactCropperJS;