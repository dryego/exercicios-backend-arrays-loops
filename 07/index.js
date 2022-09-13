const nomes = ["Ana", "Joana", "Carlos", "amanda"];

let nomesA = [];

for (let nome of nomes) {
    if (nome[0] === "a" || nome[0] === "A") {
        nomesA.push(nome);
    }
}
console.log(nomesA);