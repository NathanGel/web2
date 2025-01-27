const setup = () => {
    // Vraag de DOM-tree om het element met id 'myDiv'
    let myDiv = document.getElementById("myDiv");

    // Zorg ervoor dat de functie printKlik wordt opgeroepen als er  op de div wordt geklikt
    myDiv.addEventListener("click", printKlik);

    // Voeg de gevraagde mouse-gerelateerde event listeners toe
    myDiv.addEventListener("mouseenter", printEnter);
    myDiv.addEventListener("mousemove", printMove);
    myDiv.addEventListener("mouseleave", printLeave);
}

const printKlik = () => {
    console.log("klik");
}

const printEnter = () => {
    console.log("enter");
}

const printMove = () => {
    console.log("move");
}

const printLeave = () => {
    console.log("leave");
}

window.addEventListener("load", setup);