// Dit is het array waarmee je de dropdown box moet opvullen (i.e. het <select> element)
const colours=["LightGrey","PaleGreen","LightBlue","Yellow"];

// NIET VERGETEN : roep de setup functie op zodra de browser klaar is met het inladen van de pagina.

const setup = () => {
	//de kleurkeuzes toevoegen aan het selectMenu
	let selectMenu = document.querySelector("#cbxColor");
	for(let i = 0; i<colours.length; i++){
		let kleur = document.createElement("option");
		kleur.textContent = colours[i];
		selectMenu.appendChild(kleur);
	}

	let controls = document.querySelector("#controls");
	let btnRemoveAll = document.createElement("input");
	btnRemoveAll.setAttribute("id", "btnRemoveAll");
	btnRemoveAll.setAttribute("type", "button")
	btnRemoveAll.value = "Remove all notes";
	btnRemoveAll.addEventListener("click", clearNotes);
	//btnRemoveAll.addEventListener("click", () => clearNotes(document.querySelector("#notes")));
	controls.appendChild(btnRemoveAll);

	//een eventListener koppelen aan de Add note knop
	let btnAddNote = document.querySelector("#btnAdd");
	btnAddNote.addEventListener("click", createOneNote);
};

const createOneNote = () => {
	let notesDiv = document.querySelector("#notes");
	
	//het note element creeeren en de klasse "note toevoegen voor de styling"
	let note = document.createElement("div");
	note.classList.add("note");
	
	//Het input veld opvragen en toevoegen aan element inhoudNote en vervolgens koppelen aan note
	let input = document.querySelector("#txtDescription").value;
	let inhoudNote = document.createElement("h1");
	inhoudNote.textContent = input;
	note.appendChild(inhoudNote);

	//eem element aanmaken, de datum vastleggen en koppelen aan het note element
	let tijdstip = document.createElement("p");
	const iso=new Date().toISOString(); 
	tijdstip.textContent = iso.substring(11, 19);
	note.appendChild(tijdstip);

	//de gekozen kleur opvragen en instellen
	let selectMenu = document.querySelector("#cbxColor");
	let gekozenKleur = selectMenu.selectedIndex;
	note.style.backgroundColor = colours[gekozenKleur];

	//een eventListener koppelen aan het note element
	note.addEventListener("click", removeClickedNote);

	//finaal nog de volledige note elementNode koppelen aan de <div> waar notes geplaatst worden en de counter updaten
	notesDiv.appendChild(note);
	updateCount();
};

const updateCount = () => {
	let notesDiv = document.querySelectorAll("#notes>div");
	let aantalNotes = notesDiv.length;
	let notesCounter = document.querySelector("#txtNoteCount");
	notesCounter.textContent = aantalNotes;
	// deze functie past de teller aan
	// en (indien nodig) toont/verbergt ze ook de ganse informatie regel
};

const removeClickedNote = (event) => {
    // voor deze functie mag je zelf kiezen welke parameter(s) je nodig hebt,
    // dit hangt nml. af van hoe je de event handling aanpakt
	let note = event.currentTarget; //belangrijk currentTarget anders verkeerde waarde als note currentTarget gaat over het element waar de eventListener aan vasthangt
	let divNotes = note.parentNode;
	divNotes.removeChild(note);
	updateCount();
};

const clearNotes = () => {//container (notes) als parameter kon ook
	// voor deze functie mag je zelf kiezen welke parameter(s) je nodig hebt,
	// dit hangt nml. af van hoe je de event handling aanpakt
	let notesDiv = document.querySelector("#notes");
    
    // Loop door alle notities en verwijder ze
    while (notesDiv.firstElementChild) {
        notesDiv.removeChild(notesDiv.firstElementChild);
    }
	updateCount();
};

window.addEventListener("load", setup);