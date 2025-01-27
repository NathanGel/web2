const setup = () => {
	// registeer click event listener 'voegToe' bij #btnAdd
    let btnAdd = document.querySelector("#btnAdd");
    btnAdd.addEventListener("click", voegToe);

	// registreer click event listener 'wisAlles' bij #btnClear
    let btnClear = document.querySelector("#btnClear");
    btnClear.addEventListener("click", wisAlles);

	// registreer click event listener 'maakBelangrijk' bij elke <li> in .lstIngredients
    let lis = document.querySelectorAll("#lstIngredients li");
    for (let i=0;i<lis.length;i++) {
        lis[i].addEventListener("click", maakBelangrijk);
    }
}

const voegToe = () => {
	// Lees de tekst uit het textveld en voeg nieuw <li> element toe
    let txtInput = document.querySelector("#txtInput");
    let ingredient = txtInput.value;
    let lstIngredients = document.querySelector("#lstIngredients");

    // HIERONDER STAAT DE CODE DIE GEWIJZIGD IS TOV 'oplossing opdracht 01'

    // voeg het nieuwe item toe met .insertAdjacentHTML() zodat de event listeners
    // van bestaande elementen behouden blijven
    lstIngredients.insertAdjacentHTML("beforeend", `<li>${ingredient}</li>`);

    // zoek het nieuw toegevoegde <li> element op, i.e. het laatste <li> element in #lstIngredients
    let items = lstIngredients.getElementsByTagName("li"); // merk op, we gebruiken hier NIET document.getElementsByTagName()!
    let newItem = items[items.length-1];

    // koppel de event listener aan dit nieuwe element
    newItem.addEventListener("click", maakBelangrijk);
}

const wisAlles = () => {
	// Wis alle ingredienten
	// Je kunt dit doen door alle de .innerHTML van #lstIngredients een lege string in te stellen
    let lstIngredients = document.querySelector("#lstIngredients");
    lstIngredients.innerHTML="";
}

const maakBelangrijk = (event) => {
	// Geef het geklikte element de CSS class 'belangrijk'
    let li = event.target;
    li.classList.add("belangrijk");
}
	
window.addEventListener('load',setup);



















