const numeros = [1, 10, 15, 3, 4, 9];

let maior = Number.NEGATIVE_INFINITY;
let menor = Number.POSITIVE_INFINITY;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
    if (numeros[i] < menor) {
        menor = numeros[i];
    }
}

const resultado = maior - menor;

console.log(resultado);