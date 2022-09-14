const original = [5, 7, 13, 17, 26, 34, 118, 245];

let selecao = []; //Guarda valores entre 10 e 20 e > que 100;

for (let maiores of original) {
    if (maiores >= 10 && maiores <= 20) {
        selecao.push(maiores);
    } else if (maiores > 100) {
        selecao.push(maiores);
    }
}
console.log(selecao);