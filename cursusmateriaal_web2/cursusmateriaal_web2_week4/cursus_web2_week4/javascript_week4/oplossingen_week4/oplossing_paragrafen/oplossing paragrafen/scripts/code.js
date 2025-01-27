const setup = () => {
    // Vraag de DOM-tree om een lijst met elementen die de CSS class 'belangrijk' hebben
    let pBelangrijk = document.getElementsByClassName("belangrijk");

    // Overloop alle elementen in de lijst
    for (let i=0;i<pBelangrijk.length;i++) {
        // geef het element de CSS class 'opvallend'
        pBelangrijk[i].classList.add("opvallend");
    }
}

window.addEventListener("load", setup);