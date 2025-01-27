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

	// Dit is de omslachtigere manier, alle radiobuttons in de 'rbtMoedertaal' groep
	// opzoeken en ze allemaal overlopen en hun .checked property, euhm, checken.
	//
	// Hier wordt een CSS attribute selector gebruikt ipv getElementsByName() omdat
	// die laatste wat problemen had in sommige (oudere) browserversies, zie opmerking
	// in de pdf van de vorige les.
    let rbtMoedertaal=document.querySelectorAll("input[name='rbtMoedertaal']");
    for (let i=0;i<rbtMoedertaal.length;i++) {
        if (rbtMoedertaal[i].checked) {
            console.log("moedertaal is "+rbtMoedertaal[i].value);
            break;
        }
    }

	// Dit is de omslachtigere manier, het <select> element opzoeken, diens .selectedIndex
	// opvragen en dan die gebruiken in de .options lijst van het <select> element.
    let selFavorieteBuurland=document.querySelector("#selFavorieteBuurland");
    let selectedIndex=selFavorieteBuurland.selectedIndex;
    let option=selFavorieteBuurland.options[selectedIndex];
    console.log("favoriete buurland is "+option.text);

	// Dit is de omslachtigere manier, alle <option>s in het <select> element overlopen
	// en bij elk de .selected property checken (let op : .selected en niet .checked!).
    let text="bestelling bestaat uit ";
    for (let i=0;i<selBestelling.options.length;i++) {
        option=selBestelling.options[i];
        if (option.selected) {
            text+=option.text+" ";
        }
    }
	
    console.log(text);

};

window.addEventListener("load", setup);