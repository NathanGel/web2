const setup = () => {
    let div = document.getElementsByClassName("div");
    div[0].addEventListener("click", printKlik);
}

const printKlik = () => {
    console.log("klik");
}

window.addEventListener("load", setup);