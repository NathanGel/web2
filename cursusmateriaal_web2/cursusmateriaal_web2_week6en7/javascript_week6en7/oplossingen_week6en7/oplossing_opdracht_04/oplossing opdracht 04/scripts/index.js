const setup = () => {
    // registeer click event listener 'voegToe' bij #btnAdd
    let btnAdd = document.querySelector("#btnAdd");
    btnAdd.addEventListener("click", voegToe);

    // registreer click event listener 'wisAlles' bij #btnClear
    let btnClear = document.querySelector("#btnClear");
    btnClear.addEventListener("click", wisAlles);

    // HIERONDER STAAT CODE DIE GEWIJZIGD IS TOV 'oplossing opdracht 02'
    // registreer click event listener 'maakBelangrijk' op het niveau van het <ul> element
    // Wegens event bubbling komt elk klik event op een <li> sowieso ook bij de click event
    // listener van het <ul> element terecht!
    let lstIngredients = document.querySelector("#lstIngredients");
    lstIngredients.addEventListener("click", maakBelangrijk);

    // Dit is een aanzienlijk vereenvoudiging, er is maar 1 event listener koppeling nodig
    // ipv allemaal afzonderlijke op elk <li> element. Bovendien werkt deze zowel met kliks
    // op <li>s uit de HTML als met deze die we via javascript toevoegden.
    // Strikt genomen zou deze oplossing ook werken met .innerHTML+=, maar we geven toch de
    // voorkeur aan .insertAdjacentHTML().
}

const voegToe = () => {
    // Lees de tekst uit het textveld en voeg nieuw <li> element toe
    let txtInput = document.querySelector("#txtInput");
    let ingredient = txtInput.value;
    let lstIngredients = document.querySelector("#lstIngredients");

    // voeg het nieuwe item toe met .insertAdjacentHTML() zodat de event listeners
    // van bestaande elementen behouden blijven
    lstIngredients.insertAdjacentHTML("beforeend", `<li>${ingredient}</li>`);

    // HIERONDER STAAT DE CODE DIE GEWIJZIGD IS TOV 'oplossing opdracht 02'
    // de code voor het koppelen vd event listener op het nieuwe <li> element is verdwenen
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

window.addEventListener('load', setup);



















