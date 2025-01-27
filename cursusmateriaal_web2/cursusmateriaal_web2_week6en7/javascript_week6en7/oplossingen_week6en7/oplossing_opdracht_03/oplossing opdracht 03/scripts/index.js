const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen

    // koppel de 'wijzig' click event listener aan de button
    let btnWijzig = document.getElementById("btnWijzig");
    btnWijzig.addEventListener("click", wijzig);

    // Vul het invulveld met de url van de afbeelding

    // .. zoek de waarde op van het 'src' attribuut van de afbeelding
    let image = document.getElementById("imgOutput");
    let url = image.getAttribute("src");

    // ..kopieer de url naar het input veld
    let txtInput = document.getElementById("txtInput");
    txtInput.value = url;
}

const wijzig = () => {
    // Verander het 'src' attribuut van de afbeelding naar wat de gebruiker invoerde

    // .. lees de url in het inputveld
    let txtInput = document.getElementById("txtInput");
    let url = txtInput.value;

    // .. stel het 'src' attribuut in van de afbeelding
    let image = document.getElementById("imgOutput");
    image.setAttribute("src", url);
}

window.addEventListener("load", setup);
