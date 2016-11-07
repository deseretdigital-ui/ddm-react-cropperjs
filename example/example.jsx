import ReactCropper from './react-cropper';
import React from 'react';
import ReactDom from 'react-dom';
import {} from './styles.scss';

const Wrapper = (props) => {
  return (
    <div className="cropperjs-wrapper">
      <ReactCropper {...props} />
      <div id="crop-preview"></div>
    </div>
  );
};

const crop = (data) => {
  console.log(data);
}

let props = {
  src: '../images/demo.jpg',
  alt: 'Demo Image',
  crossOrigin: 'false',
  aspectRatio: (16 / 9),
  guides: true,
  crop: crop,
  preview: '#crop-preview'
}

ReactDom.render(
  <Wrapper {...props} />,
  document.getElementById('ReactCropperExample')
);
