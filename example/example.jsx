import React from 'react';
import ReactDom from 'react-dom';
import ReactCropper from './react-cropper';
import {} from './styles.scss';

const Wrapper = (props) => {
  return (
    <div className="cropperjs-wrapper">
      <div id="crop-preview"></div>
      <div className="crop-details"></div>
      <ReactCropper {...props} />
    </div>
  );
};

const crop = (data) => {
  console.log(data);
  let details = document.querySelector('.crop-details');
  details.innerHTML = JSON.stringify(data.detail);
}

let props = {
  src: '../images/demo.jpg',
  alt: 'Demo Image',
  crossOrigin: 'false',
  aspectRatio: (406 / 195),
  guides: true,
  crop: crop,
  preview: '#crop-preview',
  viewMode: 1,
  // Disable toggling drag mode between "crop" and "move" on doubleclick
  toggleDragModeOnDblclick: false,
  dragMode: 'move'
}

ReactDom.render(
  <Wrapper {...props} />,
  document.getElementById('ReactCropperExample')
);
