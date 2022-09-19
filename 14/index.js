const arrayA = [5, 32, 3, 44, 1];
const arrayB = [57, 4, 21, 2, 13];

for (let i = 0; i < arrayA.length; i++) {
    const itemArrayA = arrayA[i];
    const itemArrayB = arrayB[i];

    if (itemArrayA < itemArrayB) {
        console.log(itemArrayA);
    } else {
        console.log(itemArrayB);
    }
}
