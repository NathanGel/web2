const setup = () => {
    let sliders = document.getElementsByClassName("slider");
    for(let i = 0; i < sliders.length; i++){
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }
}

const update = () => {
    let sliderRed = document.getElementById("sliderRed");
    let sliderGreen = document.getElementById("sliderGreen")
    let sliderBlue = document.getElementById("sliderBlue");

    let redValue = sliderRed.value;
    let greenValue = sliderGreen.value;
    let blueValue = sliderBlue.value;

    let swatch = document.getElementById("swatch");
    swatch.style.backgroundColor = `rgb(${redValue},${greenValue},${blueValue})`
}

window.addEventListener("load", setup);