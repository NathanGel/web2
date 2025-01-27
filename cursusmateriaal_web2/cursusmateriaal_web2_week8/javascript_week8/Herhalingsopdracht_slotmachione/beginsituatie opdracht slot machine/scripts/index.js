// een globale variabele met de urls van alle afbeeldingen
const urls = ["images/fruit01.jpg", "images/fruit02.jpg", "images/fruit03.jpg", "images/fruit04.jpg", "images/fruit05.jpg"];

const setup = () => {
    let btnSpin = document.querySelector(".buttonLink");
    btnSpin.addEventListener("click", spin);
}

const spin = () => {
    let slots = document.querySelector(".slots");
    let fruits = slots.getElementsByTagName("img");
    for(let i = 0; i< fruits.length; i++){
        let index = Math.floor(1 + Math.random() * 5);
        fruits[i].setAttribute("src", urls[index - 1]);
    }
    
    slots.insertAdjacentHTML("beforeend", "<p></p>")
    let para = document.getElementsByTagName("p")[0];
    let nietGewonnnen = "Zolang u niet stopt bent u geen verliezer!";
    let gewonnen =  "Proficiat!";
    if(fruits[0].getAttribute("src") === fruits[1].getAttribute("src") && fruits[1].getAttribute("src") === fruits[2].getAttribute("src")){
        para.textContent = gewonnen;
    }else{
        para.textContent = nietGewonnnen;
    }
}

window.addEventListener("load", setup);
