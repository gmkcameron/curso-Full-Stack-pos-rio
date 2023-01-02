const MaterialModel = require("../models/MaterialModel");

let materiais = [];
let idAtual = 1;

function obterPorTodos() {
    return materiais;
}

function obterPorId(id) {
    return materiais.find( material => material.id == id);
}

function cadastrar(obj) {
    let material = new MaterialModel(obj);
    material.id = idAtual;

    materiais.push(material);

    idAtual++;

    return material;
}

function atualizar(id, obj) {
    const index = materiais.findIndex(material => material.id == id);

    if(index < 0) {
        return "Material não encontrado. Tente novamente!"
    }

    const material = { id: parseInt(id), ...obj };
}