let priorities= ["low", "medium", "high"]; // vervang null door een array met drie string waarden, resp. low, medium en high

const getTextForPriorityLevel = (level) => {
    // geef de tekst terug voor dit priority level (bv. 0 is "low" en 2 is "high")
    // (gebaseerd op het priorities array)
    let priorityLevel = priorities[level];
    return priorityLevel;
};

const getPriorityLevelForText = (text) => {
    // geef het level terug voor deze priority tekst (bv. "low" is 0 en "high" is 2)
    // of -1 indien de tekst geen geldige priority tekst is.
    // (gebaseerd op het priorities array)
    let priorityLevel = priorities.indexOf(text);
    return priorityLevel;
};

const setup = () => {
    // Zorg ervoor dat een klik op de #btnAdd button onze 'addTask' event listener oproept
    let btnAdd = document.getElementById("btnAdd");
    btnAdd.addEventListener("click", addTask);
    // Zorg ervoor dat een klik op een .dot element onze 'filterTasks' event listener oproept
    let dotPriority = document.getElementsByClassName("dot");
    for(let i = 0; i < dotPriority.length; i++){
        dotPriority[i].addEventListener("click", filterTasks);
    }
    // Voeg enkele tasks toe, om snel te kunnen testen
    insertTaskHTML(0, "low priority");
    insertTaskHTML(1, "medium priority");
    insertTaskHTML(2, "high priority");
};

const addTask= () => {
    // haal de titel van de task op uit #txtDescription
    let description = document.getElementById("txtDescription"); // geef description de juiste waarde

    // haal het priority level van de task op uit sldLevel en zet om naar een getal
    let level = document.getElementById("sldLevel"); // vervang 0 door de juiste waarde

    // voeg de HTML voor de task toe
    insertTaskHTML(level.value, description.value);

    // maak titel inputveld leeg
    description.value = "";
};

const insertTaskHTML = (level, description) => {
    // Voeg de HTML code toe aan .tasks voor deze task (level is een Number, description is een string)
    if(description.value !== ""){
        let tasks = document.getElementsByClassName("tasks");
        level = Number.parseInt(level);
        // De task krijgt ook een class volgens het priority level (.low, medium of .high)
        // Om de naam vd class te bekomen op basis van het level gebruik je getTextForPriorityLevel
        let textForPriority = getTextForPriorityLevel(level);
        tasks[0].innerHTML += `<p class="task ${textForPriority}">${description}</p>`;
        // Je hoeft hierbij geen rekening te houden met de actuele filter level!
        // (maw indien wegens de filter enkel 'high' getoond wordt en je voegt een 'low' toe, dan mag deze 'low' zichtbaar zijn)
    }
};

const filterTasks = (event) => {
    // achterhaal op welk .dot element geklikt werd
    let target = event.target;
    // haal de (onzichtbare) tekst op uit dit element
    let klasse = target.classList[1];
    // zet de tekst om naar een priority level (zodat je een Number hebt)
    // gebruik hiervoor getPriorityLevelForText
    let filterLevel = getPriorityLevelForText(klasse); // vervang 2 door de juiste waarde

    // pas de classes aan van de .task elementen op basis van filterLevel
    adjustForFilter(filterLevel);
};

const adjustForFilter = (filterLevel) => {
    // Get all tasks
    let tasks = document.getElementsByClassName("task");

    for (let i = 0; i < tasks.length; i++) {
        // Get the priority text of the current task from its class (e.g., 'low', 'medium', 'high')
        let taskPriorityText = tasks[i].classList[1]; // e.g., "low"
        
        // Get the priority level for this text (e.g., 'low' => 0, 'high' => 2)
        let taskPriorityLevel = getPriorityLevelForText(taskPriorityText);

        // Compare the task's priority level with the filter level
        if (filterLevel === 0 || taskPriorityLevel === filterLevel) {
            // Show the task if the filter level is 0 (show all) or matches the task's level
            tasks[i].classList.remove("hidden");
        } else {
            // Otherwise, hide the task
            tasks[i].classList.add("hidden");
        }
    }
};

window.addEventListener("load", setup);// Zorg ervoor dat je setup functie pas wordt uitgevoerd als de DOM-tree klaar is!