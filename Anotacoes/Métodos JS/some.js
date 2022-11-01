/* Retorna true ou false de acordo com o parâmetro
e a condição */ 
const numbers = [10, 6, 2, 85, 23, 1, 3];

const value = numbers.some(isBiggerThan10);

function isBiggerThan10(element, index, array) {
    return element > 10;
}

console.log(value);
