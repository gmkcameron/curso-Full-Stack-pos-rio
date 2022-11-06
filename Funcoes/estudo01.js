function primeiraFuncao() {
    console.log("Testando função");
}

// chamada da função
primeiraFuncao();

//nome é o argumento
function dizerNome(nome) {
    console.log("O nome é: " + nome);
}

dizerNome("Joazinho");
//pode reaproveitar a função, trocando só o parâmetro:
dizerNome("Filho");

//parâmetro de uma função passando como variável
let nomeBancoDeDados = "Carlos";

dizerNome(nomeBancoDeDados);

//usando return
function soma(a, b) {
    return a + b;
}

let somaUm = soma(2, 5);

console.log(somaUm);

let somaDois = soma(5, 5);

console.log(somaDois);

console.log(soma(4, 5));




