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