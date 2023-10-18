const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

const newArray = [];
for (i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element);
    }
};
console.log('for', newArray); // Ejercicio comunmente en entrevistas con el ciclo for, aplanar un array de arrays.

const result = matriz.flat();
console.log('flat', result);

const matriz1 = [
    [1,2,3],
    [4,5,6, [10,11,12, [13,14,15, [16,17,18, [19,20,21]]]]],
    [7,8,9],
];

const result1 = matriz1.flat(5);
console.log('flat', result1);