'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _cropperjs = require('cropperjs');

var _cropperjs2 = _interopRequireDefault(_cropperjs);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReactCropperJS = _react2.default.createClass({
  displayName: 'ReactCropperJS',


  propTypes: {
    // react cropper options
    alt: _react2.default.PropTypes.string,
    crossOrigin: _react2.default.PropTypes.string,
    src: _react2.default.PropTypes.string.isRequired,

    // cropper options
    aspectRatio: _react2.default.PropTypes.number,
    autoCrop: _react2.default.PropTypes.bool,
    autoCropArea: _react2.default.PropTypes.number,
    background: _react2.default.PropTypes.bool,
    center: _react2.default.PropTypes.bool,
    checkCrossOrigin: _react2.default.PropTypes.bool,
    checkOrientation: _react2.default.PropTypes.bool,
    cropBoxMovable: _react2.default.PropTypes.bool,
    cropBoxResizable: _react2.default.PropTypes.bool,
    guides: _react2.default.PropTypes.bool,
    highlight: _react2.default.PropTypes.bool,
    minCanvasHeight: _react2.default.PropTypes.number,
    minCanvasWidth: _react2.default.PropTypes.number,
    minContainerHeight: _react2.default.PropTypes.number,
    minContainerWidth: _react2.default.PropTypes.number,
    minCropBoxHeight: _react2.default.PropTypes.number,
    minCropBoxWidth: _react2.default.PropTypes.number,
    modal: _react2.default.PropTypes.bool,
    movable: _react2.default.PropTypes.bool,
    preview: _react2.default.PropTypes.string,
    restore: _react2.default.PropTypes.bool,
    responsive: _react2.default.PropTypes.bool,
    rotatable: _react2.default.PropTypes.bool,
    scalable: _react2.default.PropTypes.bool,
    toggleDragModeOnDblclick: _react2.default.PropTypes.bool,
    viewMode: _react2.default.PropTypes.oneOf([0, 1, 2, 3]),
    wheelZoomRation: _react2.default.PropTypes.number,
    zoomable: _react2.default.PropTypes.bool,
    zoomOnTouch: _react2.default.PropTypes.bool,
    zoomOnWheel: _react2.default.PropTypes.bool,

    // CropperJS event callbacks
    crop: _react2.default.PropTypes.func,
    cropend: _react2.default.PropTypes.func,
    cropmove: _react2.default.PropTypes.func,
    cropstart: _react2.default.PropTypes.func,
    ready: _react2.default.PropTypes.func,
    zoom: _react2.default.PropTypes.func,

    // Variable props
    canvasData: _react2.default.PropTypes.shape({
      left: _react2.default.PropTypes.number,
      top: _react2.default.PropTypes.number,
      width: _react2.default.PropTypes.number,
      hegiht: _react2.default.PropTypes.number
    }),
    cropBoxData: _react2.default.PropTypes.shape({
      left: _react2.default.PropTypes.number,
      top: _react2.default.PropTypes.number,
      width: _react2.default.PropTypes.number,
      hegiht: _react2.default.PropTypes.number
    }),
    data: _react2.default.PropTypes.shape({
      x: _react2.default.PropTypes.number,
      y: _react2.default.PropTypes.number,
      width: _react2.default.PropTypes.number,
      height: _react2.default.PropTypes.number,
      rotate: _react2.default.PropTypes.number,
      scaleX: _react2.default.PropTypes.number,
      scaleY: _react2.default.PropTypes.number
    }),
    dragMode: _react2.default.PropTypes.oneOf(['crop', 'move', 'none']),
    enable: _react2.default.PropTypes.bool,
    moveTo: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.number),
    rotateTo: _react2.default.PropTypes.number,
    scaleX: _react2.default.PropTypes.number,
    scaleY: _react2.default.PropTypes.number,
    style: _react2.default.PropTypes.object,
    zoomTo: _react2.default.PropTypes.number,

    // Type of image to return as a data URL
    imgType: _react2.default.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      data: null,
      dragMode: 'crop',
      enable: true,
      imgType: 'image/jpeg',
      rotateTo: 0,
      scaleX: 1,
      scaleY: 1,
      src: null,
      zoomTo: 1
    };
  },
  componentDidMount: function componentDidMount() {
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
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
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
  },
  componentWillUnmount: function componentWillUnmount() {
    if (this.cropper) {
      // Destroy the cropper, this makes sure events
      // such as resize are cleaned up and do not leak
      this.cropper.destroy();
    }
  },
  getCroppedImgDataURL: function getCroppedImgDataURL() {
    return this.getCroppedCanvas().toDataURL(this.props.imgType);
  },


  // Event handlers
  crop: function crop(event) {
    this.props.crop(event, this.getCroppedImgDataURL());
  },
  cropend: function cropend(event) {
    this.props.cropend(event, this.getCroppedImgDataURL());
  },
  cropmove: function cropmove(event) {
    this.props.cropmove(event, this.getCroppedImgDataURL());
  },
  cropstart: function cropstart(event) {
    this.props.cropstart(event, this.getCroppedImgDataURL());
  },
  ready: function ready(event) {
    this.props.ready(event, this.getCroppedImgDataURL());
  },
  zoom: function zoom(event) {
    this.props.zoom(event, this.getCroppedImgDataURL());
  },


  // CropperJS wrapped functions
  move: function move(offsetX, offsetY) {
    return this.cropper.move(offsetX, offsetY);
  },
  moveTo: function moveTo(x, y) {
    return this.cropper.moveTo(x, y);
  },
  zoomTo: function zoomTo(ratio) {
    return this.cropper.zoomTo(ratio);
  },
  rotate: function rotate(degree) {
    return this.cropper.rotate(degree);
  },
  rotateTo: function rotateTo(degree) {
    return this.cropper.rotateTo(degree);
  },
  enable: function enable() {
    return this.cropper.enable();
  },
  disable: function disable() {
    return this.cropper.disable();
  },
  reset: function reset() {
    return this.cropper.reset();
  },
  clear: function clear() {
    return this.cropper.clear();
  },
  replace: function replace(url) {
    return this.cropper.replace(url);
  },
  scaleX: function scaleX(_scaleX) {
    return this.cropper.scaleX(_scaleX);
  },
  scaleY: function scaleY(_scaleY) {
    return this.cropper.scaleY(_scaleY);
  },
  getData: function getData(rounded) {
    return this.cropper.getData(rounded);
  },
  setData: function setData(data) {
    return this.cropper.setData(data);
  },
  getContainerData: function getContainerData() {
    return this.cropper.getContainerData();
  },
  getImageData: function getImageData() {
    return this.cropper.getImageData();
  },
  getCanvasData: function getCanvasData() {
    return this.cropper.getCanvasData();
  },
  setCanvasData: function setCanvasData(data) {
    return this.cropper.setCanvasData(data);
  },
  getCropBoxData: function getCropBoxData() {
    return this.cropper.getCropBoxData();
  },
  setCropBoxData: function setCropBoxData(data) {
    return this.cropper.setCropBoxData(data);
  },
  getCroppedCanvas: function getCroppedCanvas(options) {
    return this.cropper.getCroppedCanvas(options);
  },
  setAspectRatio: function setAspectRatio(aspectRatio) {
    return this.cropper.setAspectRatio(aspectRatio);
  },
  setDragMode: function setDragMode(dragMode) {
    return this.cropper.setDragMode(dragMode);
  },
  render: function render() {
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
        alt: this.props.alt === undefined ? 'picture' : this.props.alt,
        style: imgStyle
      })
    );
  }
});

exports.default = ReactCropperJS;