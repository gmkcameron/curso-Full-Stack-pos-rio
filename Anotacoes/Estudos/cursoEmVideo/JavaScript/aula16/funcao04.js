function fatorial(n) {
    let fatorial = 1
    for (let contador = n; contador > 1; contador--) {
        fatorial *= contador
    }
    return fatorial
}

console.log(fatorial(5));

//5! = 5 * 4 * 3 * 2 * 1 = 120
