import React from 'react';
import ReactDom from 'react-dom';
import ReactCropper from '../src/ReactCropperJs';

const Wrapper = React.createClass({
  propTypes: {
    style: React.PropTypes.object,
    // react cropper options
    crossOrigin: React.PropTypes.string,
    src: React.PropTypes.string,
    alt: React.PropTypes.string,

    // cropper options
    aspectRatio: React.PropTypes.number,
    crop: React.PropTypes.func,
    preview: React.PropTypes.string,
    strict: React.PropTypes.bool,
    responsive: React.PropTypes.bool,
    checkImageOrigin: React.PropTypes.bool,
    background: React.PropTypes.bool,
    modal: React.PropTypes.bool,
    guides: React.PropTypes.bool,
    highlight: React.PropTypes.bool,
    autoCrop: React.PropTypes.bool,
    autoCropArea: React.PropTypes.number,
    dragCrop: React.PropTypes.bool,
    movable: React.PropTypes.bool,
    cropBoxMovable: React.PropTypes.bool,
    cropBoxResizable: React.PropTypes.bool,
    doubleClickToggle: React.PropTypes.bool,
    zoomable: React.PropTypes.bool,
    mouseWheelZoom: React.PropTypes.bool,
    touchDragZoom: React.PropTypes.bool,
    rotatable: React.PropTypes.bool,
    minContainerWidth: React.PropTypes.number,
    minContainerHeight: React.PropTypes.number,
    minCanvasWidth: React.PropTypes.number,
    minCanvasHeight: React.PropTypes.number,
    minCropBoxWidth: React.PropTypes.number,
    minCropBoxHeight: React.PropTypes.number,

    // cropper callbacks
    cropstart: React.PropTypes.func,
    cropmove: React.PropTypes.func,
    cropend: React.PropTypes.func,
    zoom: React.PropTypes.func
  },

  crop(event) {
    let details = document.querySelector('.crop-details');
    details.innerHTML = JSON.stringify(event.detail, null, 2);
  },

  render() {
    let props = Object.assign({}, this.props);
    let {crop} = this.props;
    if (!crop) {
      crop = this.crop;
    }
    return (
      <div className="cropperjs-wrapper">
        <div className="preview-container">
          <div className="crop-preview crop-preview__normal"></div>
          <div className="crop-preview crop-preview__smaller"></div>
          <pre className="crop-details"></pre>
        </div>
        <ReactCropper ref="cropper" {...props} crop={crop} />
      </div>
    );
  }
});

let props = {
  src: '../images/demo.jpg',
  alt: 'Demo Image',
  aspectRatio: (406 / 195),
  guides: true,
  preview: '.crop-preview',
  zoomable: false,
  viewMode: 0,
  // Disable toggling drag mode between "crop" and "move" on doubleclick
  toggleDragModeOnDblclick: false,
  dragMode: 'crop',
  minContainerWidth: 600,
  minContainerHeight: 400,
  minCanvasWidth: 600,
  minCanvasHeight: 400,
  autoCrop: true,
  style: {
    width: '600px',
    height: '400px'
  }
}

ReactDom.render(
  <Wrapper {...props} />,
  document.getElementById('ReactCropperExample')
);
