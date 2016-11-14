# DDM React CropperJS

[CropperJS](https://github.com/fengyuanchen/cropperjs) wrapped in a React component

See the [CropperJS Documentation](https://github.com/fengyuanchen/cropperjs#usage) for more information

Inspiration taken from [react-cropper](https://github.com/roadmanfong/react-cropper)

## Installation

```shell
npm install --save ddm-react-cropperjs
```

NOTE: You must include the cropper.css (or cropper.min.css) file in your project. It can be found in `node_modules/cropperjs/dist`.

## Example
See [example/example.jsx]()

## Props

### src
The image source URL.

* **Required**
* Type: `string`
* Default: `null`


### alt
The text for the image alt attribute.

* Type: `string`
* Default: `picture`


### aspectRatio
Set the aspect ratio of the crop box. By default, the crop box is free ratio.

* Type: `number`
* Default: N/A


https://github.com/fengyuanchen/cropperjs#aspectratio

### canvasData
Change the canvas (image wrapper) position and size with new data.

* Type: `object`
* Default: `null`


```javascript
canvasData = {
  left: 200,
  top: 200,
  width: 600,
  height: 400
}
```

https://github.com/fengyuanchen/cropperjs#setcanvasdatadata

### crop
This event fires when the canvas (image wrapper) or the crop box changed.

* Type: `function`
* Default: N/A

**Parameters**
* event: Custom event object
* dataURL: The cropped image data URL returned in the format specified in the imgType prop

```javascript
<ReactCropperJS
  crop={(event, dataURL)} => {
    console.log(event.detail);
    this.img.src = dataURL;
  }}
/>
```

https://github.com/fengyuanchen/cropperjs#crop-2

### cropBoxData
Change the crop box position and size with new data.

* Type: `object`
* Default: `null`

```javascript
cropBoxData = {
  left: 200,
  top: 200,
  width: 600,
  height: 400
}
```

https://github.com/fengyuanchen/cropperjs#setcropboxdatadata

### cropend
This event fires when the canvas (image wrapper) or the crop box stops changing.

* Type: `function`
* Default: N/A

**Parameters**
* event: Custom event object
* dataURL: The cropped image data URL returned in the format specified in the imgType prop

```javascript
<ReactCropperJS
  cropend={(event, dataURL)} => {
    console.log(event.detail);
    this.img.src = dataURL;
  }}
/>
```

https://github.com/fengyuanchen/cropperjs#cropend-1

### cropmove
This event fires when the canvas (image wrapper) or the crop box is changing.

* Type: `function`
* Default: N/A

**Parameters**
* event: Custom event object
* dataURL: The cropped image data URL returned in the format specified in the imgType prop

```javascript
<ReactCropperJS
  cropmove={(event, dataURL)} => {
    console.log(event.detail);
    this.img.src = dataURL;
  }}
/>
```

https://github.com/fengyuanchen/cropperjs#cropmove-1

### cropstart
This event fires when the canvas (image wrapper) or the crop box starts to change.

* Type: `function`
* Default: N/A

**Parameters**
* event: Custom event object
* dataURL: The cropped image data URL returned in the format specified in the imgType prop

```javascript
<ReactCropperJS
  cropstart={(event, dataURL)} => {
    console.log(event.detail);
    this.img.src = dataURL;
  }}
/>
```

https://github.com/fengyuanchen/cropperjs#cropstart-1

### crossOrigin
The value to set crossOrigin attribute to on the img element. Related to the
[checkCrossOrigin](https://github.com/fengyuanchen/cropperjs#checkcrossorigin) option.

* Type: `string`
* Default: `null`

More info on the crossOrigin attribute:
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-crossorigin

### data
Change the cropped area position and size with new data (based on the original image).

* Type: `object`
* Default: `null`

https://github.com/fengyuanchen/cropperjs#setdatadata

### dragMode
Change the drag mode.

* Type: `string`
* Default: `crop`
* Options: `none`, `crop`, `move`

https://github.com/fengyuanchen/cropperjs#dragmode

### enable
Boolean flag to enable or disable the component. Setting the value to false will disable it.

* Type: `bool`
* Default: `true`


https://github.com/fengyuanchen/cropperjs#enable

https://github.com/fengyuanchen/cropperjs#disable

### imgType
The image type to return when getting the cropped image data URL from the canvas using `toDataURL`.
Valid options are image/png, image/jpeg, and image/webp. If the data URL returned shows that the format is PNG,
then that means the image type submitted is not supported.

* Type: `string`
* Default: `image/jpeg`

For more information see the `type` parameter here:

https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL

### imgQuality
The quality of the image to return when getting the cropped image data URL from the canvas using `toDataURL`.
Should be a value between 0 and 1 (a percentage). If the value is anything else, the default value of 0.92 will be used.

* Type: `number`
* Default: `0.92`

For more information see the `encoderOptions` parameter here:

https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL

### moveTo
Move the canvas (image wrapper) to an absolute point.

* Type: `array`
* Default: N/A

```javascript
moveTo = [
  100, // X value
  200  // Y value
]
```

https://github.com/fengyuanchen/cropperjs#movetox-y

### ready
This event fires when the target image has been loaded and the cropper instance is ready for cropping.

* Type: `function`
* Default: N/A

https://github.com/fengyuanchen/cropperjs#ready-1

### rotateTo
Rotate the image to an absolute degree.

* Type: `number`
* Default: `0`

https://github.com/fengyuanchen/cropperjs#rotatetodegree

### scaleX
Scale the abscissa of the image.

* Type: `number`
* Default: `1`

https://github.com/fengyuanchen/cropperjs#scalexscalex

### scaleY
Scale the ordinate of the image.

* Type: `number`
* Default: `1`

https://github.com/fengyuanchen/cropperjs#scaleyscaley

### style
Custom styles for the component placed on the wrapping element of the component.

* Type: `object`
* Default: `null`

### zoom
This event fires when a cropper instance starts to zoom in or zoom out its canvas (image wrapper).

* Type: `function`
* Default: N/A

**Parameters**
* event: Custom event object
* dataURL: The cropped image data URL returned in the format specified in the imgType prop

```javascript
<ReactCropperJS
  zoom={(event, dataURL)} => {
    console.log(event.detail);
    this.img.src = dataURL;
  }}
/>
```

https://github.com/fengyuanchen/cropperjs#zoom-1

### zoomTo
Zoom the canvas (image wrapper) to an absolute ratio.

* Type: `number`
* Default: `1`

https://github.com/fengyuanchen/cropperjs#zoomtoratio

### Other props
Accepts all options found in the [CropperJS documentation](https://github.com/fengyuanchen/cropperjs#options) as props.
Except for the props listed above, all props passed in are set only when the component is mounted and cannot
be changed unless the component is unmounted and re-mounted.

## License
[MIT](https://opensource.org/licenses/MIT)
