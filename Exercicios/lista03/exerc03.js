let notas = [7.8, 8, 4.3, 3.9];
let maior;
let menor;

let sum = 0;

for (let i = 0; i < notas.length; i++) {
    sum += notas[i];
}

let media = sum/4;

notas.forEach((element) => {
    if(element > maior || maior == undefined) {
        maior = element;
    }

    if(element < menor || menor == undefined) {
        menor = element;
    }
})

console.log("A media de todas as notas é: " + media);
console.log("O maior número é: " + maior);
console.log("O menor número é: " + menor);

