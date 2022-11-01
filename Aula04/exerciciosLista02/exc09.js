let n1 = 2382
soma = 0

while (n1) {
    soma += n1 % 10;
    n1 = Math.floor(n1 / 10);
}

console.log(soma);
