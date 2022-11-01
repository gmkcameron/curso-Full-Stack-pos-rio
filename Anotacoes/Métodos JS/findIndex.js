/* Acha o INDEX do 1º nº que tá de acordo 
com a condição criada */ 
const numbers = [10, 6, 8, 19, 18, 20];

const elementIndex = numbers.findIndex(checkNumber);

function checkNumber(element, index, array) {
    return element >= 20;
}

console.log(elementIndex);
