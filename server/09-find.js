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