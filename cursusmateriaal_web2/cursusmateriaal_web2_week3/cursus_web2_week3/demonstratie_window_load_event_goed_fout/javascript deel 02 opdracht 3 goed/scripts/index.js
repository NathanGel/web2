// Dit introduceert de setup function bij de browser. Merk op de functie
// niet automatisch wordt opgeroepen!
const setup = () => {
    let pElement = document.getElementById("txtOutput");
    pElement.innerHTML = "Welkom!";
}

// Vraag aan de browser om de setup functie op te roepen op het moment
// dat de DOM-tree klaar is voor gebruik
window.addEventListener("load", setup);

// Merk op dat onderstaande NIET werkt (let op de extra haakjes) :
// window.addEventListener("load", setup() );



