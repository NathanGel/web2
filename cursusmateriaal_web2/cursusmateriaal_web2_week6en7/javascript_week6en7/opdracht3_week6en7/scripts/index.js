const setup = () => {
    let btnVoegToe = document.querySelector(".btnVoegToe");
    btnVoegToe.addEventListener("click", update);

    let imageURL = document.querySelector(".image");
    imageURL = imageURL.getAttribute("src");

    let inputveld = document.querySelector(".txtInput");
    inputveld.setAttribute("placeholder", imageURL);
};

const update = () => {
    let url = document.querySelector(".txtInput").value;
    let image = document.querySelector(".image");
    
    console.log(url)
    image.setAttribute("src", url);
};

window.addEventListener("load", setup);