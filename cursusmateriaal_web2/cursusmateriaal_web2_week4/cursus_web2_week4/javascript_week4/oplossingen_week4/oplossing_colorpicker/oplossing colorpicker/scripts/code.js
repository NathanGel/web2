const setup = () => {
	let sliders = document.getElementsByClassName("slider");
	for (let i = 0; i < sliders.length; i++) {
		// we moeten zowel op het input als het change event reageren,
		// zie http://stackoverflow.com/questions/18544890
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}
	update();
};

const update = () => {
	// haal de waarden op van de 3 sliders
	let red=document.getElementById("sldRed").value;
	let green=document.getElementById("sldGreen").value;
	let blue=document.getElementById("sldBlue").value;
	
	// stop de waarden in de 3 spans
	document.getElementById("lblRed").textContent=red;
	document.getElementById("lblGreen").textContent=green;
	document.getElementById("lblBlue").textContent=blue;
	
	// wijzig de achtergrondkleur van de swatch
	let swatch=document.getElementById("swatch");
	swatch.style.backgroundColor="rgb("+red+","+green+","+blue+")";
};

window.addEventListener("load", setup);