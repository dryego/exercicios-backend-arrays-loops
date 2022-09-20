const disjuntores = [false, false, true, false, false, true, false, false];

for (let busca = 0; busca < disjuntores.length; busca++) {
    const dijuntor = disjuntores[busca];
    if (dijuntor != false) {
        console.log(busca);
    }

}
