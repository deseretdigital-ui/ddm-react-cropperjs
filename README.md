# DDM React CropperJS

[CropperJS](https://github.com/fengyuanchen/cropperjs) wrapped in a React component

See the (CropperJS Documentation)[https://github.com/fengyuanchen/cropperjs#usage] for more information

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
* **Required**
* Type: `string`
* Default: `null`

### alt
* Type: `string`
* Default: `picture`

### aspectRatio
* Type: `number`
* Default: N/A

https://github.com/fengyuanchen/cropperjs#aspectratio

### canvasData
* Type: `object`
* Default: `null`


```javascript
{
  left: 200,
  top: 200,
  width: 600,
  height: 400
}
```

https://github.com/fengyuanchen/cropperjs#setcanvasdata

### crop
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
* Type: `object`
* Default: `null`

```javascript
{
  left: 200,
  top: 200,
  width: 600,
  height: 400
}
```

https://github.com/fengyuanchen/cropperjs#setcropboxdatadata

### cropend
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
* Type: `string`
* Default: `null`

The value to set crossOrigin attribute to on the img element. Related to the
[checkCrossOrigin](https://github.com/fengyuanchen/cropperjs#checkcrossorigin) option.

More info on the crossOrigin attribute:
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-crossorigin

### data
* Type: `object`
* Default: `null`

https://github.com/fengyuanchen/cropperjs#setdatadata

### dragMode
* Type: `string`
* Default: `crop`

https://github.com/fengyuanchen/cropperjs#dragmode

### enable
* Type: `bool`
* Default: `true`

Setting the value to false will disable the component.

https://github.com/fengyuanchen/cropperjs#enable
https://github.com/fengyuanchen/cropperjs#disable

### imgType
* Type: `string`
* Default: `image/jpeg`

The image type to return when getting the cropped image data URL from the canvas using `toDataURL`.
Valid options are image/png, image/jpeg, and image/webp. If the data URL returned shows that the format is PNG,
then that means the image type submitted is not supported.

https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL

### imgQuality
* Type: `number`
* Default: `0.92`

The quality of the image to return when getting the cropped image data URL from the canvas using `toDataURL`.
Should be a value between 0 and 1 (a percentage). If the value is anything else, the default value of 0.92 will be used.

https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL

### moveTo
* Type: `array`
* Default: N/A

```javascript
[
  100, // X value
  200  // Y value
]
```

https://github.com/fengyuanchen/cropperjs#moveto

### ready
* Type: `function`
* Default: N/A

https://github.com/fengyuanchen/cropperjs#ready-1

### rotateTo
* Type: `number`
* Default: `0`

https://github.com/fengyuanchen/cropperjs#rotateto

### scaleX
* Type: `number`
* Default: `1`

https://github.com/fengyuanchen/cropperjs#scalexscalex

### scaleY
* Type: `number`
* Default: `1`

https://github.com/fengyuanchen/cropperjs#scalexscaley

### style
* Type: `object`
* Default: `null`

Custom styles for the component.

https://github.com/fengyuanchen/cropperjs#scalexscaley

### zoom
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
* Type: `number`
* Default: `1`

https://github.com/fengyuanchen/cropperjs#zoomto

### Other props
Accepts all options found in the CropperJS [docs](https://github.com/fengyuanchen/cropperjs#options) as props.
Except for the props listed above, all props passed in are set only when the component is mounted and cannot
be changed unless the component is unmounted and re-mounted.

## License
[MIT](https://opensource.org/licenses/MIT)
