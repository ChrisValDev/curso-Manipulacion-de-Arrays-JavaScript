const elements = [1,1,2,2];
const othersElements = [3,3,4,4];

const newArray = elements;
for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index];
    newArray.push(element);
};
console.log('for', newArray);

const elements1 = [1,1,2,2];
const othersElements1 = [3,3,4,4];

const result = elements1.concat(othersElements1);
console.log('concat', result);