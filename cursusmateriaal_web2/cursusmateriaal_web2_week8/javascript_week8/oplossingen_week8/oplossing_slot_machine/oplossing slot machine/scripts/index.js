// een globale variabele met de urls van alle afbeeldingen
const urls = ["images/fruit01.jpg", "images/fruit02.jpg", "images/fruit03.jpg", "images/fruit04.jpg", "images/fruit05.jpg"];

const setup = () => {
    // registreer de 'spin' functie als click event listener van de button (die eigenlijk een hyperlink is!)
    let lnkSpin = document.querySelector(".buttonLink");
    lnkSpin.addEventListener("click", spin);

    // Toon initieel al willekeurige prentjes (in de HTML staat immers 3x src="fruit01.jpg").
    randomizeImages();
}

const spin = (e) => {
    // Telkens de gebruiker spin klikt, tonen we willekeurige afbeeldingen
    // en controleren of er gewonnen werd. Door dit zo over 2 functions te
    // verdelen (ipv alle code bv. hieronder te schrijven), kunnen we
    // randomizeImages() nu ook gebruiken in setup().
    randomizeImages();
    checkWinnings();
	
	// Vermits er op een hyperlink geklikt werd, zouden we best de normale
	// verwerking door de browser (navigatie) tegenhouden.
	e.preventDefault();	
	// Strikt genomen is dit hier niet absoluut noodzakelijk, omdat href="#" en
	// de browser dus op dezelfde pagina blijft. 
	// MAAR : in een langere pagina zou de browser wel naar boven scrollen en 
	// da's niet handig voor de gebruiker.
}

const randomizeImages = () => {
    // haal alle relevante <img> elementen op uit de DOM-tree
    // (let op de spatie in de selector, die op descendants (afstammelingen) duidt
    let imageElements = document.querySelectorAll(".slots img"); // alle img elementen die afstammeling zijn van een element met class 'slots'
    for (let i = 0; i < imageElements.length; i++) {
        // bepaal een random index voor het globale 'urls' array
        let imageElement = imageElements[i];
        let randomIndex = Math.floor(Math.random() * urls.length);

        // verander de afbeelding
        setImageFromIndex(imageElement, randomIndex);
    }
}

const setImageFromIndex = (imageElement, index) => {
    // verander de afbeelding op basis van de index in het 'urls' array
    let url = urls[index];
    // wijzig het 'src' attribuut van het <img> element naar de url uit het array
    imageElement.setAttribute("src", url);
}

const checkWinnings = () => {
    // Er is een winnaar als alle drie <img> elementen dezelfde waarde voor hun 'src' attribuut hebben
    let imageElements = document.querySelectorAll(".slots img");

    // we nemen de url van de eerste afbeelding
    let firstUrl = imageElements[0].getAttribute("src");

    // we vergelijken alle andere afbeeldingen met de url van de eerste afbeelding todat we
    // ofwel een verschil opmerken (loser)
    // ofwel alle afbeeldingen gecheckt hebben zonder verschil te vinden (winner)
    let isWinner = true;
    for (let i = 1; i < imageElements.length; i++) {
        let imageElement = imageElements[i];
        let url = imageElement.getAttribute("src");
        if (url != firstUrl) {
            // niet alle urls zijn gelijk, dus geen winnaar
            isWinner = false;
            break;
        }
    }

    // toon de juiste message en verberg de andere message
    let messages = document.querySelectorAll(".message");
    for (let i=0;i<messages.length;i++) {
        let message = messages[i];

        // indien winner, show winner zoniet show loser
        if (isWinner === message.classList.contains("winner")) { // als er een winnaar is en dit bericht heeft class 'winner'
            message.classList.add("show"); // toon dit bericht door de show class toe te voegen
        } else {
            message.classList.remove("show"); // verberg dit bericht door de show class te verwijderen
        }
    }
}

// roep onze 'setup' functie op eenmaal de DOM-tree klaar is
window.addEventListener("load", setup);
