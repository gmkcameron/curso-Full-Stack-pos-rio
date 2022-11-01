const latinhas = ["Koka-Kola", "Esprite"];

latinhas.push("colecao-especial");

//pega todas as latinhas que nao sao especiais
const latinhasNaoEsprite = latinhas.filter(latinha => {
    return latinha !== "Esprite";
})

const latinhaKoka = latinhas.find(function(latinha) {
    return latinha === "Koka-Kola";
})

const found = latinhas.includes("colecao-especial", 1);

const novasLatinhas = [...latinhas, "Tubaina"];

const latinhasAtualizadas = novasLatinhas.slice(-2);

latinhas.pop();

console.log(latinhas);
