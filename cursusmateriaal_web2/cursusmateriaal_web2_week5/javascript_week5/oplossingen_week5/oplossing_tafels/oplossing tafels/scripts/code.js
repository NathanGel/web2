const setup = () => {
    // Zorg ervoor dat een klik op de button onze event listener oproept
    let btnGo = document.getElementById("btnGo");
    btnGo.addEventListener("click", addTafel);

    // Doordat het toevoegen van de HTML afgesplitst is in een aparte functie (en niet
    // gewoon in de  click event listener staat), kunnen we dit stukje functionaliteit
    // rechstreeks oproepen tijdens het ontwikkelen. Anders zouden we bij het uitproberen
    // telkens zelf de testgetallen 4 en 12 moeten intypen en op 'Go' klikken.
    //insertTafelHTML(4);
    //insertTafelHTML(12);
};

const addTafel= () =>{
    // Neem de tekst uit het tekstveld en check of het een getal is
    let txtGetal = document.getElementById("txtGetal");
    let getal = parseInt(txtGetal.value, 10);

    // let op : indien het tekstveld bv. GEEN tekst bevat
    // dan heeft 'getal' nu de NaN-waarde, dus we daarop controleren
    if(Number.isNaN(getal)){
        window.alert("Geen geldig getal");
    } else {
        // het is een getal, dus we kunnen een tafel toevoegen
        insertTafelHTML(getal)
    }

    // maak inputveld leeg
    txtGetal.value = "";
};

const insertTafelHTML = (getal) => {
    // maak de HTML voor de hoofding
    let htmlHoofding=`<h1 class="hoofding">Tafel van ${getal}</h1>`;

    // maak de HTML voor de inhoud
    let htmlInhoud="";
    for (let i=1;i<=10;i++) {
        let product = i*getal;
        let htmlRegel=`<p>${getal} x ${i} = ${product}</p>`;
        htmlInhoud+=htmlRegel;
    }

    // maak een <div> met class tafel die de hoofding en inhoud bevat
    let htmlTafel=`<div class="tafel">${htmlHoofding}${htmlInhoud}</div>`;

    // voeg deze html toe aan het div element voor de tafels
    let divTafels = document.getElementById("divTafels");
    divTafels.innerHTML+=htmlTafel;

    // merk op dat het gebruik van ".innerHTML+=" een aantal nadelen heeft,
    // normaliter zouden we schrijven :
    // divTafels.insertAdjacentHTML("beforeend", htmlTafel);
    // We komen hier in een volgende les nog op terug.
};

window.addEventListener("load", setup);