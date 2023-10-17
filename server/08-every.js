const numbers = [1,30,49,29,10,13];

let result = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element >= 40) {
        result = false;
    }
}
console.log('for', result);

const result2 = numbers.every(item => item <= 40);
console.log('every', result2);