const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

let fila = 0
while (fila < filaDeDentro.length) {
    if (fila <= [4]) {
        filaDeDentro.push(filaDeFora[0]);
        filaDeFora.unshift();
    }
    fila++
}

console.log(filaDeDentro);