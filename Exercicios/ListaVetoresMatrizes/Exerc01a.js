/* SEM MÉTODO
var A = [1, 0, 5, -2, -5, 7];
var soma = 0;
for(var i = 0; i < A.length; i++) {
    soma += A[i];
}
console.log(soma); */

/* COM MÉTODO
const A = [1, 0, 5, -2, -5, 7];

function reducer(accumulator, curr) {
    return accumulator + curr;
}

console.log(A.reduce(reducer)); */



