// Assuming myImg is of type HTMLImageElement and not null.
const setImageSource = (imgElement: HTMLImageElement, source: string): void => {
  if (imgElement) {
    imgElement.src = source;
  } else {
    console.error('Image element is not found.');
  }
};

// Usage
const myImg = document.getElementById('myImage') as HTMLImageElement;
if (myImg) {
  setImageSource(myImg, 'path/to/image.jpg');
}
