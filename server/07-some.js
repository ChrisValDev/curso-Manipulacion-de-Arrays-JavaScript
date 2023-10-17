const numbers = [1, 2, 3, 4];

let result = false;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element % 2 === 0) {
        result = true;
        break;
    }
}
console.log('result', result);

const result2 = numbers.some(element => element % 2 === 0);
console.log('result2', result2);

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
    {
        customerName: 'Zulema',
        total: 240,
        delivered: true,
    },
];

const result3 = orders.some(element => element.delivered);
console.log('result3', result3);