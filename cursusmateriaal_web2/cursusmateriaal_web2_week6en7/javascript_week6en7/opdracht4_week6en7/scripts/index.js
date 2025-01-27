const setup = () => {
	// registeer click event listener 'voegToe' bij #btnAdd
	let btnAdd = document.querySelector("#btnAdd");
	btnAdd.addEventListener("click", voegToe);
	// registreer click event listener 'wisAlles' bij #btnClear
	let btnClear = document.querySelector("#btnClear");
	btnClear.addEventListener("click", wisAlles);
	// registreer click event listener 'maakBelangrijk' bij elke <li> in .lstIngredients
	let ingredienten = document.querySelector("#lstIngredients");
	ingredienten.addEventListener("click", maakBelangrijk);
}

const voegToe = () => {
	// Lees de tekst uit het textveld en voeg nieuw <li> element toe
	let inputVeld = document.querySelector("#txtInput").value;
	let lstIngredients = document.querySelector("#lstIngredients");

	lstIngredients.insertAdjacentHTML("beforeend", `<li>${inputVeld}</li>`);
	lstIngredients.lastChild.addEventListener("click", maakBelangrijk);
}

const wisAlles = () => {
	// Wis alle ingredienten
	// Je kunt dit doen door alle de .innerHTML van #lstIngredients een lege string in te stellen
	let lstIngredients = document.querySelector("#lstIngredients");
	lstIngredients.innerHTML = "";
}

const maakBelangrijk = (event) => {
	 // HIERONDER STAAT DE CODE DIE GEWIJZIGD IS TOV 'oplossing opdracht 02'

    // check of er op een <li> element dan wel rechtreeks op het <ul> element werd geklikt
    if (event.currentTarget !== event.target) {
        // er is niet direct op het <ul> element geklikt, het zal dus op een <li> geweest zijn.
        // geef het geklikte element de CSS class 'belangrijk'
        let li = event.target;
        li.classList.add("belangrijk");
    } else {
        // Indien target === currentTarget hebben we rechtstreeks op het <ul> element geklikt
        // en niet op een <li> element.
    }
}
	
window.addEventListener('load',setup);









