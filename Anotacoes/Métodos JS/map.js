//Retorna um novo array com o que quero (ler sobre)
const numbers = [1, 2, 3, 4, 5, 6, 7];

const numbersTriple = numbers.map(triple);

function triple(element, index, array) {
    return element * 3;
}

console.log(`ORIGINAL: ${numbers} \nNOVO ARRAY: ${numbersTriple} `);
