const words = ['spray', 'limit', 'elite', 'exhuberant'];

const newArray = [];
for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if(item.length >= 6) {
        newArray.push(item);
    }
}
console.log('newArray', newArray);
console.log('original', words);

const filter = words.filter(item => item.length >= 6);
console.log('filro', filter);
console.log('original', words);


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
const entrega = orders.filter(item => item.delivered && item.total > 100);
console.log('entregados', entrega);
console.log('original', orders);

const search = (name) => {
    return orders.filter(item => {
        return item.customerName.includes(name);
    });
};
console.log(search('o'));