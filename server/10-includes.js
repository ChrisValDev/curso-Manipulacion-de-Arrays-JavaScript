const pets = ['cat', 'dog', 'bat'];

let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === 'dog') {
        includeInArray = true;
    }
};
console.log('for', includeInArray);

const result = pets.includes('dog');
console.log('includes', result);