'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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
  alt: _react.PropTypes.string,
  crossOrigin: _react.PropTypes.string,
  src: _react.PropTypes.string.isRequired,

  // CropperJS options
  aspectRatio: _react.PropTypes.number,
  autoCrop: _react.PropTypes.bool,
  autoCropArea: _react.PropTypes.number,
  background: _react.PropTypes.bool,
  center: _react.PropTypes.bool,
  checkCrossOrigin: _react.PropTypes.bool,
  checkOrientation: _react.PropTypes.bool,
  cropBoxMovable: _react.PropTypes.bool,
  cropBoxResizable: _react.PropTypes.bool,
  guides: _react.PropTypes.bool,
  highlight: _react.PropTypes.bool,
  minCanvasHeight: _react.PropTypes.number,
  minCanvasWidth: _react.PropTypes.number,
  minContainerHeight: _react.PropTypes.number,
  minContainerWidth: _react.PropTypes.number,
  minCropBoxHeight: _react.PropTypes.number,
  minCropBoxWidth: _react.PropTypes.number,
  modal: _react.PropTypes.bool,
  movable: _react.PropTypes.bool,
  preview: _react.PropTypes.string,
  restore: _react.PropTypes.bool,
  responsive: _react.PropTypes.bool,
  rotatable: _react.PropTypes.bool,
  scalable: _react.PropTypes.bool,
  toggleDragModeOnDblclick: _react.PropTypes.bool,
  viewMode: _react.PropTypes.oneOf([0, 1, 2, 3]),
  wheelZoomRation: _react.PropTypes.number,
  zoomable: _react.PropTypes.bool,
  zoomOnTouch: _react.PropTypes.bool,
  zoomOnWheel: _react.PropTypes.bool,

  // CropperJS event callbacks
  crop: _react.PropTypes.func,
  cropend: _react.PropTypes.func,
  cropmove: _react.PropTypes.func,
  cropstart: _react.PropTypes.func,
  ready: _react.PropTypes.func,
  zoom: _react.PropTypes.func,

  // Variable props
  canvasData: _react.PropTypes.shape({
    left: _react.PropTypes.number,
    top: _react.PropTypes.number,
    width: _react.PropTypes.number,
    height: _react.PropTypes.number
  }),
  cropBoxData: _react.PropTypes.shape({
    left: _react.PropTypes.number,
    top: _react.PropTypes.number,
    width: _react.PropTypes.number,
    height: _react.PropTypes.number
  }),
  data: _react.PropTypes.shape({
    x: _react.PropTypes.number,
    y: _react.PropTypes.number,
    width: _react.PropTypes.number,
    height: _react.PropTypes.number,
    rotate: _react.PropTypes.number,
    scaleX: _react.PropTypes.number,
    scaleY: _react.PropTypes.number
  }),
  dragMode: _react.PropTypes.oneOf(['crop', 'move', 'none']),
  enable: _react.PropTypes.bool,
  moveTo: _react.PropTypes.arrayOf(_react.PropTypes.number),
  rotateTo: _react.PropTypes.number,
  scaleX: _react.PropTypes.number,
  scaleY: _react.PropTypes.number,
  style: _react.PropTypes.object,
  zoomTo: _react.PropTypes.number,

  // Type of image and the quality of the image to return as a data URL
  imgType: _react.PropTypes.string,
  imgQuality: _react.PropTypes.number
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