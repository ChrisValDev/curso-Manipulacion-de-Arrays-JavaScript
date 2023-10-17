const numbers = [1,30,49,29,10,13];

let result = undefined;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element === 30) {
        result = element;
        break;
    }
}
console.log('for', result);

const result2 = numbers.find(item => item === 30);
console.log('find', result2);


const products = [
    {
        name: 'Pizza',
        price: 12,
        id: '🍕',
    },
    {
        name: 'Burger',
        price: 23,
        id: '🍔',
    },
    {
        name: 'Hot dog',
        price: 34,
        id: '🌭',
    },
    {
        name: 'Hot cakes',
        price: 355,
        id: '🥞',
    },
];

const result3 = products.find(item => item.id === '🍔');
console.log('find', result3);
const result4 = products.findIndex(item => item.id === '🍔');
console.log('find', result4);