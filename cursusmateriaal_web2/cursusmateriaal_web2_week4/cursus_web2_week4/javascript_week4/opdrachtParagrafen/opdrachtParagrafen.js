const setup = () => {
    let belangrijkeParas = document.getElementsByClassName("para");
    for(let i = belangrijkeParas.length; i >0 ; i--){
        if(belangrijkeParas[i - 1].classList.contains("belangrijk")){
            belangrijkeParas[i - 1].classList.add("opvallend");
        }
    }
}
window.addEventListener("load", setup);