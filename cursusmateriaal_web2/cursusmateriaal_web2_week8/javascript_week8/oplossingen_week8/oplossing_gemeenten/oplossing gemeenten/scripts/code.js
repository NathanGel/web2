const setup = () => {
    let gemeenten = [];
	
    let stoppen=false;
    while(!stoppen) {
		// vraag de gebruiker om een tekst
        let input = window.prompt("Geef een gemeente in (of 'stop' om te stoppen)");
        // stop loop indien de gebruiker
		// - de tekst 'stop' typt
		// - op cancel drukt (input==null)
		stoppen=(input==null || input.trim().toLowerCase() == "stop");
        if(!stoppen){
			// voeg gemeente toe achteraan het array
            gemeenten.push(input);
        }
    }

	// sorteer het array met gemeenten
    gemeenten.sort(compare);

	// voeg de nodige HTML toe aan de DOM-tree voor de gemeenten
    voegGemeentenToe(gemeenten);
};

const voegGemeentenToe = (gemeenten) => {
	// Zoek het <select> in de DOM-tree
    let selGemeenten = document.querySelector("#selGemeenten");
	
    for(let i=0; i<gemeenten.length; i++){
		// per gemeente een <option> in het <select> element
        selGemeenten.insertAdjacentHTML("beforeend", `<option>${gemeenten[i]}</option>`);
    }
};

const compare = (a,b) => {
	// sorteer alfabetisch (a < z)
    return a.localeCompare(b);
	
	// om omgekeerd alfabetisch te sorteren (z < a),
	// moet het teken omgekeerd worden (let op het minteken) :
	// return -a.localeCompare(b);
};

window.addEventListener("load", setup);