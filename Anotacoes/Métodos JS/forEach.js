const numbers = [10, 6, 8, 19, 18, 20];

/* Executa uma dada função passada como callback e 
esta função será executada pra cada elemento do array */
numbers.forEach(printNumber);

function printNumber(value, index, array) {
    console.log(`Index: ${index} Value: ${value}`);
}
