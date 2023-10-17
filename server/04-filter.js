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