const setup = () => {
    // Vraag de DOM-tree om het element met id 'myDiv'
    let myDiv = document.getElementById("myDiv");

    // Zorg ervoor dat de functie printKlik wordt opgeroepen als er  op de div wordt geklikt
    myDiv.addEventListener("click", printKlik);
}

const printKlik = () => {
    console.log("klik");
}

window.addEventListener("load", setup);