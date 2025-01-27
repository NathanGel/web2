const setup = () => {
    let btnGo = document.getElementsByClassName("btnGo")[0];
    btnGo.addEventListener("click", voegToe);
}

const voegToe = () => {
    let veelvoud = document.getElementById("tafelVan").value;
    let inputVeld = document.getElementById("tafelVan");
    let span = document.getElementsByTagName("span")[0];
    span.innerHTML+=`<div><p class="heading">Tafel van ${veelvoud}</p><p>${veelvoud} x 1 = ${veelvoud}</p><p class="even">${veelvoud} x 2 = ${veelvoud * 2}</p><p>${veelvoud} x 3 = ${veelvoud * 3}</p><p class="even">${veelvoud} x 4 = ${veelvoud * 4}</p><p>${veelvoud} x 5 = ${veelvoud * 5}</p><p class="even">${veelvoud} x 6 = ${veelvoud* 6}</p><p>${veelvoud} x 7 = ${veelvoud * 7}</p><p class="even">${veelvoud} x 8 = ${veelvoud * 8}</p><p>${veelvoud} x 9 = ${veelvoud * 9}</p><p class="even">${veelvoud} x 10 = ${veelvoud * 10}</p></div>`;
    inputVeld.value = "";
}

window.addEventListener("load", setup);
//oplossing uit de cursus is beter en zonder herhaling.