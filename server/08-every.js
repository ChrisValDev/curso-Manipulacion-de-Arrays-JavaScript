const numbers = [1,30,39,29,10,13];

let result = false;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element <= 40) {
        result = true;
    }
}
console.log('for', result);

const result2 = numbers.every(item => item <= 40);
console.log('every', result2);