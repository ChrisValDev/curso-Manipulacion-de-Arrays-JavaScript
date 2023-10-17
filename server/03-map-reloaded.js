const orders = [
    {
        customerName: 'Nicolas',
        total: 60,
        delivered: true,
    },
    {
        customerName: 'Zulema',
        total: 120,
        delivered: false,
    },
    {
        customerName: 'Santiago',
        total: 180,
        delivered: true,
    },
    {
        customerName: 'Valentina',
        total: 240,
        delivered: true,
    },
];
const arrayTotal = orders.map(item => item.total);
console.log('original', orders);
console.log('arrayTotal', arrayTotal);

// const arrayModific = orders.map(item => {
//     item.tax = .19;// agregando propiedad a cada objeto del array.
//     return item;
// });
// console.log('original', orders); // Se modifico el array original por que copio la referencia en memoria del objeto. No se logro el objetivo que solo era crear un nuevo array sin mutar el original
// console.log('arrayModific', arrayModific);

const arrayModific1 = orders.map(item => {
    return {
        ...item,
        tax: .19,
    }
});

console.log('original', orders);
console.log('arrayModific1', arrayModific1);