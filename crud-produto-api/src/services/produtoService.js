const ProdutoModel = require("../models/ProdutoModel");

let produtos = [];
let idAtual = 1;

function obterPorTodos() {
    return produtos;
}

function obterPorId(id) {
    return produtos.find(produto => produto.id == id);
}

function cadastrar(obj) {
    let produto = new ProdutoModel(obj);
    produto.id = idAtual;

    produtos.push(produto);

    idAtual++;

    return(produto);
}

function atualizar(id, obj) {
    const index = produtos.findIndex(produto => produto.id == id);

    if (index <0) {
        return "Produto não encontrado, tente novamente por favor!"
    }

    const produto = { id: parseInt(id), ...obj };

    produtos.splice(index, 1, produto);

    return produto
}

function deletar(id) {
    const index = produtos.findIndex(produto => produto.id == id);
    
    if(index < 0) {
        return "produto não encontrado, tente novamente por favor!"
    }

    produtos.splice(index, 1);

    return id
}

module.exports = {
    obterPorTodos,
    obterPorId,
    cadastrar,
    atualizar,
    deletar
}
