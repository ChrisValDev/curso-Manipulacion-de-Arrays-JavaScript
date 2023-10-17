const elements = ["Fire", "Air", "Water"];

let respFinal = '';
const separator = '--'
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    respFinal = respFinal + element + separator;
};

console.log('for', respFinal);

respFinal2 = elements.join('--');
console.log('join', respFinal2);

const title = 'Curso de manipulacion de arrays';
const array = title.split(' ');
console.log(array);
const newTitle = array.join('/');
console.log(newTitle);
const titleModific = newTitle.toLowerCase();
console.log(titleModific);