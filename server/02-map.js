const letters = ['a', 'b', 'c'];

const newArray = letters.map(element => element + '++');
// for (let index = 0; index < letters.length; index++) {
//     const element = letters[index];
//     newArray.push(element + '++');
// }
console.log('original', letters);
console.log('nuevo', newArray);