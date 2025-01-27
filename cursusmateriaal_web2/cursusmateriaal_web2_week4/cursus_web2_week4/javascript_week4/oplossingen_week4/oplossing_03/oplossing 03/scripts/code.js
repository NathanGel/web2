const setup = () => {
    // Vraag de DOM-tree om het element met id 'myDiv'
    let myDiv = document.getElementById("myDiv");

    // Zorg ervoor dat de functie printKlik wordt opgeroepen als er  op de div wordt geklikt
    myDiv.addEventListener("click", maakRood);
}

const maakRood = () => {
    // Vraag de DOM-tree om het element met id 'myDiv'
    let myDiv = document.getElementById("myDiv");

    // Geef de div een rode achtergrondkleur
    myDiv.style.backgroundColor="red";
}

window.addEventListener("load", setup);