//Filtra de acordo com minha condição
const numbers = [10, 6, 8, 19, 18, 20];

const newArray = numbers.filter(isBigEnough);

function isBigEnough(value, index, array) {
    return value >= 18;
    /* Passa cada valor, seu índice e o array 
    console.log(value)
    console.log(index)
    console.log(array) */
}

console.log(newArray);
