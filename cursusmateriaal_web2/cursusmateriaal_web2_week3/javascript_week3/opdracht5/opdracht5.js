const setup = () => {
    let buttonWijzig = document.getElementById("btnWijzig");
    buttonWijzig.addEventListener("click", update);
}
const update = () => {
    let pElement = document.getElementById("txtOutput"); 
    pElement.textContent = "welkom";
}

window.addEventListener("load", setup);