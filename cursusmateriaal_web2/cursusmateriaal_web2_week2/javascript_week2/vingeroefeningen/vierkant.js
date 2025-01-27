const aantalRegels=4;

// Andere oplossingen zijn ook mogelijk natuurlijk..

let sterretjes="";
for (let i=0;i<aantalRegels;i++) {
    for (let i=0;i<aantalRegels;i++) {
        sterretjes+="*";
    }
    sterretjes+="\n";
}
console.log(sterretjes);
