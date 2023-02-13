
let memNumber = []

for(i=0; i<5; i++){
    let casualNumber = Math.floor(Math.random() * 100) + 1;
    memNumber.push(casualNumber);
    //console.log(casualNumber)
}

console.log(memNumber)


alert(memNumber)

setTimeout(askNumber, 4000);

let rispostaUtente = []

function askNumber(){
    for(i=0; i<5; i++){
    let numberUtente = prompt("Inserisci i numeri appena visualizzati")
    rispostaUtente.push(numberUtente);
    console.log (numberUtente)
    }
    console.log (rispostaUtente)
}

