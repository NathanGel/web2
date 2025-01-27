const setup = () =>{
    let gemeenten = [];
 
    let stop = false;
    do{
        let gemeente = window.prompt("Geef een gemeente in (of 'stop' om te stoppen)");
        if(gemeente.trim().toLowerCase() == "stop" || gemeente == null){
            stop = true;
        }else{
            gemeenten.push(gemeente);
        }
    }while(!stop);
    gemeenten.sort(compare);

    voegGemeentenToe(gemeenten);
};

const voegGemeentenToe = (gemeenten) => {
    let select = document.querySelector("#gemeente");
    let options;
    for(let i = 0; i <gemeenten.length; i++){
        options+=`<option>${gemeenten[i]}</option>`
    }
    select.insertAdjacentHTML("beforeend", options);
}

const compare = (a,b) => {
    return a.localeCompare(b);
};

window.addEventListener("load", setup);