let priorities=["low", "medium", "high"];

const getTextForPriorityLevel = (level) => {
    // geef de tekst terug voor dit priority level (bv. 0 is "low" en 2 is "high"
    return priorities[level];
};

const getPriorityLevelForText = (text) => {
    // geef het level terug voor deze priority tekst (bv. "low" is 0 en "high" is 2)
    // of -1 indien de tekst geen geldige priority tekst is.
    return priorities.indexOf(text);
};

const setup = () => {
    // Zorg ervoor dat een klik op de #btnAdd button onze 'addTask' event listener oproept
    let btnAdd = document.getElementById("btnAdd");
    btnAdd.addEventListener("click", addTask);

    // Zorg ervoor dat een klik op een .dot element onze 'filterTasks' event listener oproept
    let elmFilterDots=document.getElementsByClassName("dot");
    for (let i=0;i<elmFilterDots.length;i++) {
        elmFilterDots[i].addEventListener("click", filterTasks);
    }

    // Voeg enkele tasks toe, om snel te kunnen testen
    insertTaskHTML(0, "low priority");
    insertTaskHTML(1, "medium priority");
    insertTaskHTML(2, "high priority");
};

const addTask= () =>{
    // haal de titel op van de task
    let txtDescription=document.getElementById("txtDescription");
    let description = txtDescription.value.trim();

    // haal het priority level op van de task en zet om naar een getal
    let sldLevel = document.getElementById("sldLevel");
    let level = parseInt(sldLevel.value, 10);

    if(!isNaN(level) && description.length>0){
        insertTaskHTML(level, description)
    }

    // maak titel inputveld leeg
    txtDescription.value = "";
};

const insertTaskHTML = (level, description) => {
    // Voeg de HTML code toe aan .tasks voor deze task (level is een Number, description is een string)
    // De task krijgt ook een class volgens het priority level (.low, medium of .high)

    // Je hoeft hierbij geen rekening te houden met de actuele filter level!
    // (maw indien wegens de filter enkel 'high' getoond wordt en je voegt een 'low' toe, dan mag deze 'low' zichtbaar zijn)
    let levelText = getTextForPriorityLevel(level);
    let html = `<p class="task ${levelText}">${description}</p>`;

    let divTasks = document.getElementsByClassName("tasks")[0];
    divTasks.innerHTML+=html;
};

const filterTasks = (event) => {
    // achterhaal op welke .dot geklikt werd
    let elmFilterDot = event.target;

    // haal de (onzichtbare) tekst op in deze .dot
    let filterText = elmFilterDot.textContent;

    // zet de tekst om naar een priority level (zodat je een Number hebt)
    let filterLevel = getPriorityLevelForText(filterText);
    if(filterLevel!=-1) {
        // pas de classes aan van de .task elementen op basis van filterLevel
        adjustForFilter(filterLevel);
    }
};

const adjustForFilter = (filterLevel) => {
    // pas de CSS classes aan van de .task elementen (filterLevel is een Number)

    let txtTasks=document.getElementsByClassName("task");
    for (let i=0;i<txtTasks.length;i++) {
        let txtTask=txtTasks[i];
        txtTask.classList.remove("hidden");

        // voor elk level dat kleiner is dan wat gevraagd is
        for (let level=0;level<filterLevel;level++) {
            let levelText=getTextForPriorityLevel(level);
            // indien task dit level heeft, verberg ze
            if (txtTask.classList.contains(levelText)) {
                txtTask.classList.add("hidden");
            }
        }
    }
};

window.addEventListener("load", setup);