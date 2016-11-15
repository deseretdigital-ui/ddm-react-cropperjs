import React, {Component, PropTypes} from 'react';
import Cropper from 'cropperjs';

class ReactCropperJS extends Component {

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
        crossOrigin={null}
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
