const letras = ["A", "a", "B", "C", "f", "a"];

let somaLetras = 0

for (let letra of letras) {
    if (letra === "e" || letra === "E") {
        somaLetras++;
    }
}
if (somaLetras > 0) {
    console.log(`Foram encontradas ${somaLetras} "e" ou "E".`);

} else {
    console.log(`Nao foram encontradas letras "e" ou "E".`)
}