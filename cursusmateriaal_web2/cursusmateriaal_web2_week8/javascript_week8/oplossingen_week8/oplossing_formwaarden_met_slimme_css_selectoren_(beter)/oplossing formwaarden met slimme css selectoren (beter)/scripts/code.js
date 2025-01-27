const setup = () => {
    let btnToon = document.querySelector("#btnToon");
    btnToon.addEventListener("click", toon);
};

const toon = () => {
    let chkIsRoker=document.querySelector("#chkIsRoker");
    if (chkIsRoker.checked) {
        console.log("is roker");
    } else {
        console.log("is geen roker");
    }

	// Met een wat complexere CSS-selector wordt onze code heel wat eenvoudiger
    let rbtMoedertaal = document.querySelector("input[name='rbtMoedertaal']:checked");
    console.log("moedertaal is "+rbtMoedertaal.value);

	// Met een wat complexere CSS-selector wordt onze code heel wat eenvoudiger
	// Let op, het is de pseudo-class :checked en niet :selected (die bestaat niet)
	let optionFavorieteBuurland=document.querySelector("#selFavorieteBuurland option:checked");
    console.log("favoriete buurland is "+optionFavorieteBuurland.text);

	// Met een wat complexere CSS-selector wordt onze code heel wat eenvoudiger
	// Let op de gelijkenis met optionFavorieteBuurland hierboven, de selector is quasi dezelfde
	// maar we verwachten hier (potentieel) meer dan 1 element
    let text="bestelling bestaat uit ";
	let optionsBestelling = document.querySelectorAll("#selBestelling option:checked");
    for (let i=0;i<optionsBestelling.length;i++) {
        text+=optionsBestelling[i].text+" ";
    }
    console.log(text);

};

window.addEventListener("load", setup);