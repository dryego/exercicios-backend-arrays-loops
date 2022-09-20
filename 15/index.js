const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

for (let busca of original) {
    if ((busca % 2) == 0) {
        pares.push(busca);
    } else {
        impares.push(busca);
    }
}
console.log(pares);
console.log(impares);

