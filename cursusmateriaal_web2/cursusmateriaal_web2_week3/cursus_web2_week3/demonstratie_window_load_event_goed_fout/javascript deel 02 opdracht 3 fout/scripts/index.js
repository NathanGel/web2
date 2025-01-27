let pElement = document.getElementById("txtOutput");
pElement.innerHTML = "Welkom!";

// Dit programma werkt niet correct, omdat de code al
// wordt uitgevoerd op het moment dat de DOM-tree
// nog leeg is!
// (er is dus nog geen element met id txtOutput)
//
// Het gevolg is dat de variabele pElement de waarde
// null bevat en als we daar dan de innerHTML property
// van aanspreken krijgen we een fout (die je op de console
// in de Chrome Developer Tools kunt zien).
//
// Je kan dit trouwens zelf zien door een breakpoint op
// de code te zetten en de DOM-tree te bekijken op het
// Elements tabblad in de Chrome Developer tools.
//
// Om ervoor te zorgen dat onze code pas wordt uitgevoerd
// als de DOM-tree klaar is moeten we het window load event
// afwachten zoals in de goeie oplossing wordt getoond.
//




