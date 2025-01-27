let lastClicked;
const setup = () => {
    let button = document.getElementById("btnVoegToe");
    let testZones = document.getElementsByClassName("testZone");

    button.addEventListener("click", update);
    for(let i = 0; i < testZones.length; i++){
        testZones[i].addEventListener("click", () => testZoneUpdate(testZones[i]))
    }
}

const update = () => {
    let instructionsStart = document.getElementsByClassName("secInstructiesBegin");
    let instructionsAdvance = document.getElementsByClassName("secInstructiesVervolg");
    let secKleurZone = document.getElementById("secKleurZones");
    let txtKleur = document.getElementById("txtKleur");
    let kleurZones = document.getElementsByClassName("kleurZone");
    
    if(isCssColor(txtKleur.value)){
        secKleurZone.innerHTML += `<span class="kleurZone" style="background-color: ${txtKleur.value};">${txtKleur.value}</span>`;
    }
    if(kleurZones.length > 0){
        instructionsStart[0].classList.add("hidden");
        instructionsAdvance[0].classList.remove("hidden");
    }
    for(let i = 0; i< kleurZones.length; i++){
        kleurZones[i].addEventListener("click", () => setLastClicked(kleurZones[i].textContent));
    }
}

const setLastClicked = (color) => {
    lastClicked = color;
}
const testZoneUpdate = (testZone) => {
    testZone.style.backgroundColor = lastClicked;
}
const isCssColor = (color) => {
    const cssColors = [
        "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure",
        "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet",
        "brown", "burlywood", "cadetblue", "chartreuse", "chocolate",
        "coral", "cornflowerblue", "cornsilk", "crimson", "cyan",
        "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen",
        "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange",
        "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue",
        "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink",
        "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick",
        "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite",
        "gold", "goldenrod", "gray", "green", "greenyellow",
        "grey", "honeydew", "hotpink", "indianred", "indigo",
        "ivory", "khaki", "lavender", "lavenderblush", "lawngreen",
        "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow",
        "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon",
        "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue",
        "lightyellow", "lime", "limegreen", "linen", "magenta",
        "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple",
        "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred",
        "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite",
        "navy", "oldlace", "olive", "olivedrab", "orange",
        "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise",
        "palevioletred", "papayawhip", "peachpuff", "peru", "pink",
        "plum", "powderblue", "purple", "rebeccapurple", "red",
        "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown",
        "seagreen", "seashell", "sienna", "silver", "skyblue",
        "slateblue", "slategray", "slategrey", "snow", "springgreen",
        "steelblue", "tan", "teal", "thistle", "tomato",
        "turquoise", "violet", "wheat", "white", "whitesmoke",
        "yellow", "yellowgreen"
    ];

    if (cssColors.includes(color.toLowerCase())) {
        return true;
    } else {
        return false;
    }
};
window.addEventListener("load", setup);