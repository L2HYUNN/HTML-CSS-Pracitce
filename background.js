const body = document.querySelector("body");

const colorArray = ["#81ecec", "#74b9ff", "#a29bfe", "#ffeaa7", "#fab1a0", "#636e72", "#fdcb6e"];

function colorChanger(color) {
    body.style.backgroundColor = color;
}

function changeBackground() {
    const lengthOfColorArray = colorArray.length;
    const changeImgNumber = Math.floor(Math.random() * lengthOfColorArray);
    const thisColor = colorArray[changeImgNumber];
    colorChanger(thisColor);
}

function init() {
    changeBackground();

}

init();