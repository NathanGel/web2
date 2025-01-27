const setup = () => {
    // deze code wordt pas uitgevoerd als de pagina volledig is ingeladen

    let array = [{
        voornaam: "Jan",
        familienaam: "Janssens",
        adres: {
            straat: "Koekoekstraat 70",
            postcode: "9090",
            gemeente: "Melle"
        }
    }, {
        voornaam: "Mieke",
        familienaam: "Mickelson",
        adres: {
            straat: "Kerkstraat 12",
            postcode: "8000",
            gemeente: "Brugge"
        }
    }];

}

window.addEventListener("load", setup);
