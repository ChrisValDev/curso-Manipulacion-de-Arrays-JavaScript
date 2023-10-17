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