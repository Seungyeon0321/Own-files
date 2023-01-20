'use strict'

const backgroundImages = [
    "Image1.jpg",
    "Image2.jpg",
    "Image3.jpg",
    "Image4.jpg",
];

const chosenBackgroundImages = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];

function selectedImages () {
    const body = document.querySelector('body');
    const img = document.createElement("Img");
    img.src = chosenBackgroundImages;

    let x = window.matchMedia("(max-width: 1000px)");

    body.style.cssText+=`background-image:url(${chosenBackgroundImages})`;
    
}    

selectedImages();

console.log(chosenBackgroundImages);
