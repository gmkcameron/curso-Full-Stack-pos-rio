let funcao1 = function() {
    console.log(this.nome)
}

let obj1 = {
    nome: "objeto 1",
    funcao: funcao1 
}

let obj2 = {
    nome: "objeto 2",
    funcao: funcao1 
}

obj1.funcao();
obj2.funcao();
