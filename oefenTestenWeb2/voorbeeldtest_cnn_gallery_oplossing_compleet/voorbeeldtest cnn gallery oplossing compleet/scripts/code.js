let currentIndex =0;

const setup = () => {
    const thumbnailList = document.querySelector("#thumbnail-list");
    for (let i=0;i<galleryData.length;i++) {
        const imageDescription = galleryData[i];
        const html = `<img src="${imageDescription.urlThumb}" data-index="${i}" class="thumbnail">`;

        thumbnailList.insertAdjacentHTML("beforeend", html);
    }

    thumbnailList.addEventListener("click", selectThumbnail);


    // rechtse navigatie pijl click listener
    const navRight = document.querySelector("#image-nav-right");
    navRight.addEventListener("click", navigateRight);

    // linkse navigatie pijl click listener
    const navLeft = document.querySelector("#image-nav-left");
    navLeft.addEventListener("click", navigateLeft);

    // stel max teller waarde in
    const numThumbs = document.querySelector("#numThumbs");
    numThumbs.textContent = galleryData.length;

    currentIndex = 0;
    updateUI();
};

const selectThumbnail = (event) => {
    const indexAsText = event.target.getAttribute("data-index");
    const index = Number.parseInt(indexAsText, 10);

    currentIndex = index;
    updateUI();
}

const updateUI = () => {
    // update de pagina inhoud op basis van de (nieuwe) currentIndex waarde
    const imageDescription = galleryData[currentIndex];
    const urlFull = imageDescription.urlFull;

    // stel grote foto in
    const imgBig = document.querySelector(".image-navigator>img");
    imgBig.setAttribute("src", urlFull);

    // update counter
    const counter = document.querySelector("#counter");
    counter.textContent = currentIndex+1;

    // copyright invullen
    const txtCopyright = document.querySelector("#copyright");
    txtCopyright.textContent = imageDescription.copyright;

    // description invullen
    const txtDescription = document.querySelector("#description");
    txtDescription.innerHTML = imageDescription.description;

    // rode lijn onder juiste thumbnail zetten (en andere rode lijn weghalen)
    const thumbnailList =document.querySelectorAll("#thumbnail-list>img");
    for (let i=0;i<thumbnailList.length;i++) {
        const img = thumbnailList[i];
        const dataIndexAsText = img.getAttribute("data-index");
        const index = Number.parseInt(dataIndexAsText,10);
        if (index === currentIndex) {
            img.classList.add("activeThumbnail");
        } else {
            img.classList.remove("activeThumbnail");
        }
    }
}
const navigateLeft = (event) => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = galleryData.length-1;
    }

    updateUI();

    // zorg dat er niet genavigeerd wordt naar href="#"
    event.preventDefault();
}

const navigateRight = (event) => {
    currentIndex++;
    if (currentIndex > galleryData.length-1) {
        currentIndex =0;
    }

    updateUI();

    // zorg dat er niet genavigeerd wordt naar href="#"
    event.preventDefault();
}

window.addEventListener("load", setup);