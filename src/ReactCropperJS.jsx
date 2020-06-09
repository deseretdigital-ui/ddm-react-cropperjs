import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Cropper from 'cropperjs';

class ReactCropperJS extends PureComponent {
  static propTypes = {
    // DDM react cropperJS options
    alt: PropTypes.string,
    crossOrigin: PropTypes.string,
    src: PropTypes.string.isRequired,

    // CropperJS options
    aspectRatio: PropTypes.number,
    autoCrop: PropTypes.bool,
    autoCropArea: PropTypes.number,
    background: PropTypes.bool,
    center: PropTypes.bool,
    checkCrossOrigin: PropTypes.bool,
    checkOrientation: PropTypes.bool,
    cropBoxMovable: PropTypes.bool,
    cropBoxResizable: PropTypes.bool,
    guides: PropTypes.bool,
    highlight: PropTypes.bool,
    minCanvasHeight: PropTypes.number,
    minCanvasWidth: PropTypes.number,
    minContainerHeight: PropTypes.number,
    minContainerWidth: PropTypes.number,
    minCropBoxHeight: PropTypes.number,
    minCropBoxWidth: PropTypes.number,
    modal: PropTypes.bool,
    movable: PropTypes.bool,
    preview: PropTypes.string,
    restore: PropTypes.bool,
    responsive: PropTypes.bool,
    rotatable: PropTypes.bool,
    scalable: PropTypes.bool,
    toggleDragModeOnDblclick: PropTypes.bool,
    viewMode: PropTypes.oneOf([0, 1, 2, 3]),
    wheelZoomRation: PropTypes.number,
    zoomable: PropTypes.bool,
    zoomOnTouch: PropTypes.bool,
    zoomOnWheel: PropTypes.bool,

    // CropperJS event callbacks
    crop: PropTypes.func,
    cropend: PropTypes.func,
    cropmove: PropTypes.func,
    cropstart: PropTypes.func,
    ready: PropTypes.func,
    zoom: PropTypes.func,

    // Variable props
    canvasData: PropTypes.shape({
      left: PropTypes.number,
      top: PropTypes.number,
      width: PropTypes.number,
      height: PropTypes.number
    }),
    cropBoxData: PropTypes.shape({
      left: PropTypes.number,
      top: PropTypes.number,
      width: PropTypes.number,
      height: PropTypes.number
    }),
    data: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
      width: PropTypes.number,
      height: PropTypes.number,
      rotate: PropTypes.number,
      scaleX: PropTypes.number,
      scaleY: PropTypes.number
    }),
    dragMode: PropTypes.oneOf(['crop', 'move', 'none']),
    enable: PropTypes.bool,
    moveTo: PropTypes.arrayOf(PropTypes.number),
    rotateTo: PropTypes.number,
    scaleX: PropTypes.number,
    scaleY: PropTypes.number,
    style: PropTypes.object,
    zoomTo: PropTypes.number,

    // Type of image and the quality of the image to return as a data URL
    imgType: PropTypes.string,
    imgQuality: PropTypes.number
  }

  static defaultProps = {
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
  }

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
  }

  componentDidUpdate(prevProps) {
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

  componentWillUnmount() {
    if (this.cropper) {
      // Destroy the cropper, this makes sure events
      // such as resize are cleaned up and do not leak
      this.cropper.destroy();
    }
  }

  getCroppedImgDataURL() {
    return this.getCroppedCanvas().toDataURL(
      this.props.imgType,
      this.props.imgQuality
    );
  }

  // Event handlers
  crop = (event) => {
    this.props.crop(event, this.getCroppedImgDataURL());
  }

  cropend = (event) => {
    this.props.cropend(event, this.getCroppedImgDataURL());
  }

  cropmove = (event) => {
    this.props.cropmove(event, this.getCroppedImgDataURL());
  }

  cropstart = (event) => {
    this.props.cropstart(event, this.getCroppedImgDataURL());
  }

  ready = (event) => {
    this.props.ready(event, this.getCroppedImgDataURL());
  }

  zoom = (event) => {
    this.props.zoom(event, this.getCroppedImgDataURL());
  }

  // CropperJS wrapped functions
  move(offsetX, offsetY) {
    return this.cropper.move(offsetX, offsetY);
  }

  moveTo = (x, y) => {
    return this.cropper.moveTo(x, y);
  }

  zoomTo = (ratio) => {
    return this.cropper.zoomTo(ratio);
  }

  rotate = (degree) => {
    return this.cropper.rotate(degree);
  }

  rotateTo = (degree) => {
    return this.cropper.rotateTo(degree);
  }

  enable = () => {
    return this.cropper.enable();
  }

  disable = () => {
    return this.cropper.disable();
  }

  reset = () => {
    return this.cropper.reset();
  }

  clear = () => {
    return this.cropper.clear();
  }

  replace = (url) => {
    return this.cropper.replace(url);
  }

  scaleX = (scaleX) => {
    return this.cropper.scaleX(scaleX);
  }

  scaleY = (scaleY) => {
    return this.cropper.scaleY(scaleY);
  }

  getData = (rounded) => {
    return this.cropper.getData(rounded);
  }

  setData = (data) => {
    return this.cropper.setData(data);
  }

  getContainerData = () => {
    return this.cropper.getContainerData();
  }

  getImageData = () => {
    return this.cropper.getImageData();
  }

  getCanvasData = () => {
    return this.cropper.getCanvasData();
  }

  setCanvasData = (data) => {
    return this.cropper.setCanvasData(data);
  }

  getCropBoxData = () => {
    return this.cropper.getCropBoxData();
  }

  setCropBoxData = (data) => {
    return this.cropper.setCropBoxData(data);
  }

  getCroppedCanvas = (options) => {
    return this.cropper.getCroppedCanvas(options);
  }

  setAspectRatio = (aspectRatio) => {
    return this.cropper.setAspectRatio(aspectRatio);
  }

  setDragMode = (dragMode) => {
    return this.cropper.setDragMode(dragMode);
  }

  render() {
    const imgStyle = {
      opacity: 0
    };
    return (
      <div
        src={null}
        alt={null}
        style={this.props.style}
      >
        <img
          crossOrigin={this.props.crossOrigin}
          ref="img"
          src={this.props.src}
          alt={this.props.alt}
          style={imgStyle}
        />
      </div>
    );
  }
}

export default ReactCropperJS;
