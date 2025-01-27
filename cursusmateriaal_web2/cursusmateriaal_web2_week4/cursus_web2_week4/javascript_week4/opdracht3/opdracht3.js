const setup = () => {
    let div = document.getElementsByClassName("div");
    div[0].addEventListener("click", printKlik);
    div[0].addEventListener("mouseenter", printEnter);
    div[0].addEventListener("mousemove", printMove);
    div[0].addEventListener("mouseleave", printLeave);
}

const printKlik = () => {
    console.log("klik");
    let div = document.getElementsByClassName("div")[0];
    div.style.backgroundColor = "red"
}
const printEnter = () => {
    console.log("enter");
}
const printLeave = () => {
    console.log("leave");
}
const printMove = () => {
    console.log("move");
}

window.addEventListener("load", setup);