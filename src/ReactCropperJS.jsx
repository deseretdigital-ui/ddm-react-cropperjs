import React from 'react';

import Cropper from 'cropperjs';
import './styles.scss';

const ReactCropperJS = React.createClass({

  propTypes: {
    // react cropper options
    alt: React.PropTypes.string,
    crossOrigin: React.PropTypes.string,
    src: React.PropTypes.string.isRequired,

    // cropper options
    aspectRatio: React.PropTypes.number,
    autoCrop: React.PropTypes.bool,
    autoCropArea: React.PropTypes.number,
    background: React.PropTypes.bool,
    center: React.PropTypes.bool,
    checkCrossOrigin: React.PropTypes.bool,
    checkOrientation: React.PropTypes.bool,
    cropBoxMovable: React.PropTypes.bool,
    cropBoxResizable: React.PropTypes.bool,
    guides: React.PropTypes.bool,
    highlight: React.PropTypes.bool,
    minCanvasHeight: React.PropTypes.number,
    minCanvasWidth: React.PropTypes.number,
    minContainerHeight: React.PropTypes.number,
    minContainerWidth: React.PropTypes.number,
    minCropBoxHeight: React.PropTypes.number,
    minCropBoxWidth: React.PropTypes.number,
    modal: React.PropTypes.bool,
    movable: React.PropTypes.bool,
    preview: React.PropTypes.string,
    restore: React.PropTypes.bool,
    responsive: React.PropTypes.bool,
    rotatable: React.PropTypes.bool,
    scalable: React.PropTypes.bool,
    toggleDragModeOnDblclick: React.PropTypes.bool,
    viewMode: React.PropTypes.oneOf([0, 1, 2, 3]),
    wheelZoomRation: React.PropTypes.number,
    zoomable: React.PropTypes.bool,
    zoomOnTouch: React.PropTypes.bool,
    zoomOnWheel: React.PropTypes.bool,

    // CropperJS event callbacks
    crop: React.PropTypes.func,
    cropend: React.PropTypes.func,
    cropmove: React.PropTypes.func,
    cropstart: React.PropTypes.func,
    ready: React.PropTypes.func,
    zoom: React.PropTypes.func,

    // Variable props
    canvasData: React.PropTypes.shape({
      left: React.PropTypes.number,
      top: React.PropTypes.number,
      width: React.PropTypes.number,
      hegiht: React.PropTypes.number
    }),
    cropBoxData: React.PropTypes.shape({
      left: React.PropTypes.number,
      top: React.PropTypes.number,
      width: React.PropTypes.number,
      hegiht: React.PropTypes.number
    }),
    data: React.PropTypes.shape({
      x: React.PropTypes.number,
      y: React.PropTypes.number,
      width: React.PropTypes.number,
      height: React.PropTypes.number,
      rotate: React.PropTypes.number,
      scaleX: React.PropTypes.number,
      scaleY: React.PropTypes.number
    }),
    dragMode: React.PropTypes.oneOf(['crop', 'move', 'none']),
    enable: React.PropTypes.bool,
    moveTo: React.PropTypes.arrayOf(React.PropTypes.number),
    rotateTo: React.PropTypes.number,
    scaleX: React.PropTypes.number,
    scaleY: React.PropTypes.number,
    style: React.PropTypes.object,
    zoomTo: React.PropTypes.number,

    // Type of image to return as a data URL
    imgType: React.PropTypes.string
  },

  getDefaultProps() {
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

  componentDidMount() {
    let options = {}, prop;
    for (prop in this.props) {
      if (prop !== 'src' && prop !== 'alt' && prop !== 'crossOrigin') {
        let propValue = this.props[prop];

        if (typeof this.props[prop] === 'function' &&
            this.hasOwnProperty(prop)
        ) {
          propValue = this[prop];
        }

        options[prop] = propValue;
      }
    }

    this.cropper = new Cropper(this.refs.img, options);
  },

  componentWillReceiveProps(nextProps) {
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

  componentWillUnmount() {
    if (this.cropper) {
      // Destroy the cropper, this makes sure events
      // such as resize are cleaned up and do not leak
      this.cropper.destroy();
    }
  },

  getCroppedImgDataURL() {
    return this.getCroppedCanvas().toDataURL(this.props.imgType);
  },

  // Event handlers
  crop(event) {
    this.props.crop(event, this.getCroppedImgDataURL());
  },

  cropend(event) {
    this.props.cropend(event, this.getCroppedImgDataURL());
  },

  cropmove(event) {
    this.props.cropmove(event, this.getCroppedImgDataURL());
  },

  cropstart(event) {
    this.props.cropstart(event, this.getCroppedImgDataURL());
  },

  ready(event) {
    this.props.ready(event, this.getCroppedImgDataURL());
  },

  zoom(event) {
    this.props.zoom(event, this.getCroppedImgDataURL());
  },

  // CropperJS wrapped functions
  move(offsetX, offsetY) {
    return this.cropper.move(offsetX, offsetY);
  },

  moveTo(x, y) {
    return this.cropper.moveTo(x, y);
  },

  zoomTo(ratio) {
    return this.cropper.zoomTo(ratio);
  },

  rotate(degree) {
    return this.cropper.rotate(degree);
  },

  rotateTo(degree) {
    return this.cropper.rotateTo(degree);
  },

  enable() {
    return this.cropper.enable();
  },

  disable() {
    return this.cropper.disable();
  },

  reset() {
    return this.cropper.reset();
  },

  clear() {
    return this.cropper.clear();
  },

  replace(url) {
    return this.cropper.replace(url);
  },

  scaleX(scaleX) {
    return this.cropper.scaleX(scaleX);
  },

  scaleY(scaleY) {
    return this.cropper.scaleY(scaleY);
  },

  getData(rounded) {
    return this.cropper.getData(rounded);
  },

  setData(data) {
    return this.cropper.setData(data);
  },

  getContainerData() {
    return this.cropper.getContainerData();
  },

  getImageData() {
    return this.cropper.getImageData();
  },

  getCanvasData() {
    return this.cropper.getCanvasData();
  },

  setCanvasData(data) {
    return this.cropper.setCanvasData(data);
  },

  getCropBoxData() {
    return this.cropper.getCropBoxData();
  },

  setCropBoxData(data) {
    return this.cropper.setCropBoxData(data);
  },

  getCroppedCanvas(options) {
    return this.cropper.getCroppedCanvas(options);
  },

  setAspectRatio(aspectRatio) {
    return this.cropper.setAspectRatio(aspectRatio);
  },

  setDragMode(dragMode) {
    return this.cropper.setDragMode(dragMode);
  },

  render() {
    const imgStyle = {
      opacity: 0
    };
    return (
      <div
        src={null}
        crossOrigin={null}
        alt={null}
        style={this.props.style}
      >
        <img
          crossOrigin={this.props.crossOrigin}
          ref="img"
          src={this.props.src}
          alt={this.props.alt === undefined ? 'picture' : this.props.alt}
          style={imgStyle}
        />
      </div>
    );
  }
});

export default ReactCropperJS;
