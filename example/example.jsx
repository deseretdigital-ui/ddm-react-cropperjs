import React from 'react';
import ReactDom from 'react-dom';
import ReactCropper from '../src/ReactCropperJs';

const Wrapper = (props) => {
  return (
    <div className="cropperjs-wrapper">
      <div className="preview-container">
        <div className="crop-preview crop-preview__normal"></div>
        <div className="crop-preview crop-preview__smaller"></div>
        <pre className="crop-details"></pre>
      </div>
      <ReactCropper {...props} />
    </div>
  );
};

const crop = (data) => {
  console.log(data);
  let details = document.querySelector('.crop-details');
  details.innerHTML = JSON.stringify(data.detail, null, 2);
}

let props = {
  src: '../images/demo.jpg',
  alt: 'Demo Image',
  crossOrigin: 'false',
  aspectRatio: (406 / 195),
  guides: true,
  crop: crop,
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
