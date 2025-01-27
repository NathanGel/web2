const setup = () => {
    let buttonHerbereken = document.getElementsByClassName("herbereken")[0];
    buttonHerbereken.addEventListener("click", herbereken);
}

const herbereken = () => {
    let prijzen = document.getElementsByClassName("prijs");
    let btws = document.getElementsByClassName("btw");
    let aantallen = document.getElementsByClassName("aantal");
    let subtotalen = document.getElementsByClassName("subtotaal");
    let eindPrijs = 0;
    for(let i = 0; i < prijzen.length; i++){
        let prijsAlsGetal = Number.parseFloat(prijzen[i].textContent, 10);
        let btwAlsGetal = Number.parseFloat(btws[i].textContent, 10);

        let totaal= (prijsAlsGetal * aantallen[i].value) * (btwAlsGetal / 100 + 1);
        
        subtotalen[i].textContent = `${totaal.toFixed(2)} Eur`; 
        eindPrijs+=totaal;
    }
    let eindTotaal = document.getElementsByClassName("eindtotaal");
    eindTotaal[0].textContent = `${eindPrijs} Eur`
}

window.addEventListener("load", setup);