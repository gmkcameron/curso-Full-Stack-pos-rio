const numbers = [10, 6, 8, 100, 221, 18, 20];

/* Retorna o 1º VALOR encontrado no array 
de acordo com o callback determinado, lendo da esq p/ dir */
const approvedNumber = numbers.find(isBigEnough);

function isBigEnough(value, index, array) {
    return value > 10;
}

console.log(approvedNumber);
