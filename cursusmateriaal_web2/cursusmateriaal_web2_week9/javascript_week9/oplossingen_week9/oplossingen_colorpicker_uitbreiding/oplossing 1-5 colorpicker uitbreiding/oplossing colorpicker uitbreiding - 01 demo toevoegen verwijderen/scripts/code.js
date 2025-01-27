const initialize = () => {
    let btnSave = document.querySelector("#btnSave");
	let sliders = document.querySelectorAll(".slider");
	for (let i = 0; i < sliders.length; i++) {
		// we moeten zowel op het input als het change event reageren,
		// zie http://stackoverflow.com/questions/18544890
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}
	update();

    /* de code hierboven is qua werking ongewijzigd t.o.v. de colorpicker oplossing */

    btnSave.addEventListener("click", saveSwatch);
};

const saveSwatch = () => {
    // voeg een nieuwe swatch component toe
    let swatchComponents=document.querySelector("#swatchComponents");
    let swatch=buildSwatchComponent();
    swatchComponents.appendChild(swatch);
};


let i=0; // simpel tellertje als globale variabele, enkel voor de demo

const buildSwatchComponent = () => {
    // maak de twee element nodes
    let swatch=document.createElement("div");
    let btnDelete=document.createElement("input");

    // stel de swatch in
    swatch.classList.add("swatch");

    // stel de delete knop in
    btnDelete.setAttribute("type", "button");
    btnDelete.setAttribute("value", "X");
    btnDelete.addEventListener("click", deleteSwatch);

    // geef elke swatch een nummer, enkel voor de demo
    swatch.textContent=i;
    i++;

    // voeg de swatch en button toe aan de swatchcomponent
    swatch.appendChild(btnDelete);
    return swatch;
};

const deleteSwatch = (event) => {
    let swatchComponents=document.querySelector("#swatchComponents");
    let button=event.target;
    let swatch=button.parentNode;
    swatchComponents.removeChild(swatch);

    event.stopPropagation();
};

/* de code hieronder is qua werking ongewijzigd t.o.v. de colorpicker oplossing */

const update = () => {
	let red=document.querySelector("#sldRed").value;
	document.querySelector("#lblRed").textContent=red;

	let green=document.querySelector("#sldGreen").value;
	document.querySelector("#lblGreen").textContent=green;

	let blue=document.querySelector("#sldBlue").value;
	document.querySelector("#lblBlue").textContent=blue;

	let swatch=document.querySelector("#swatch");
	swatch.style.background=`rgb(${red},${green},${blue})`;
};

window.addEventListener("load", initialize);