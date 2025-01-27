const setup = () => {
	let sliders = document.getElementsByClassName("slider");
	for (let i = 0; i < sliders.length; i++) {
		// we moeten zowel op het input als het change event reageren,
		// zie http://stackoverflow.com/questions/18544890
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}
	update();
	let btnSave = document.querySelector(".btnSave");
	btnSave.addEventListener("click", voegToe);
};

const getRGBValues = () => {
	return{
		red: document.getElementById("sldRed").value,
        green: document.getElementById("sldGreen").value,
        blue: document.getElementById("sldBlue").value
    };
};

const update = () => {
	// haal de waarden op van de 3 sliders
	let { red, green, blue } = getRGBValues();
	
	// stop de waarden in de 3 spans
	document.getElementById("lblRed").textContent=red;
	document.getElementById("lblGreen").textContent=green;
	document.getElementById("lblBlue").textContent=blue;
	
	// wijzig de achtergrondkleur van de swatch
	let swatch=document.getElementById("swatch");
	swatch.style.backgroundColor="rgb("+red+","+green+","+blue+")";
};

const voegToe = () => {
	let bSwatch = document.createElement("div");
	bSwatch.setAttribute("class", "bSwatch");
	
	let { red, green, blue } = getRGBValues();
	
	bSwatch.setAttribute("data-red", red);
	bSwatch.setAttribute("data-green", green);
	bSwatch.setAttribute("data-blue", blue);

	bSwatch.style.backgroundColor="rgb("+red+","+green+","+blue+")";
	let bSwatches = document.querySelector(".bSwatches");

	bSwatches.appendChild(bSwatch);
	bSwatch.addEventListener("click", kiesKleur);

	let btnVerwijder = document.createElement("button");
	btnVerwijder.textContent = "X"

	bSwatch.appendChild(btnVerwijder);
	btnVerwijder.addEventListener("click", verwijder);

};

const kiesKleur = (event) => {
	let swatch = document.querySelector(".swatch");
	let kleur = event.target.getAttribute("style");
	swatch.setAttribute("style", kleur);
	
	let red = event.target.getAttribute("data-red");
	let green = event.target.getAttribute("data-green");
	let blue = event.target.getAttribute("data-blue");
	

	let rgb = {red, green, blue};
	rgb = Object.values(rgb);
	let lables = document.querySelectorAll(".components input");
	for(let i = 0; i< lables.length; i++){
		
		lables[i].value = rgb[i];
	}
	
};

const verwijder = (event) => {
	let bswatch = event.target.parentNode;
	bswatch.parentNode.removeChild(bswatch);
	event.stopPropagation();
};

window.addEventListener("load", setup);