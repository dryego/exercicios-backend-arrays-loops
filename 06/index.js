const numeros = [3, 4, 7, 8, 1, 6, 5, 10, 10];

let somaPar = 0;

for (let par of numeros) {
    if ((par % 2) == 0) {
        somaPar += par;
    }
}
console.log(somaPar);

