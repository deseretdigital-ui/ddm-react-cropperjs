import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactCropper from '../src/ReactCropperJS';
import './scss/styles.scss';

class CropperExample extends Component {
  cropperProps = {
    src: 'images/demo.jpg',
    alt: 'Demo Image',
    // 16:9 ratio
    aspectRatio: (16 / 9),
    guides: true,
    preview: '.crop-preview',
    zoomable: false,
    viewMode: 1,
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

  crop = (event) => {
    let details = document.querySelector('.crop-details');
    details.innerHTML = JSON.stringify(event.detail, null, 2);
  }

  render() {
    return (
      <div className="cropperjs-wrapper">
        <div className="preview-container">
          <div className="crop-preview crop-preview__normal" />
          <div className="crop-preview crop-preview__smaller" />
          <h3>Data from event.detail</h3>
          <pre className="crop-details" />
        </div>
        <ReactCropper ref="cropper" {...this.cropperProps} crop={this.crop} />
      </div>
    );
  }
}

ReactDOM.render(
  <CropperExample />,
  document.getElementById('ReactCropperExample')
);
