let totaal = 0;
for(let i = 0; i < 500; i++){
    if(i%3===0 || i%5===0){
        console.log(i);
        totaal+=i;
    }
}
console.log(totaal);