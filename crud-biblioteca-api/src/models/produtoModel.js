module.exports = class ProdutoModel {
    constructor (obj) {
        obj = obj || {};

        this.id = parseInt(obj.id);
        this.nome = obj.nome;
        this.qtdEmprestada = obj.qtdEmprestada;
        this.mesEmprestimo = obj.mesEmprestimo;
    }
}