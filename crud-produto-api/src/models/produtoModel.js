module.exports = class ProdutoModel {
    constructor (obj) {
        obj = obj || {};

        this.id = parseInt(obj.id);
        this.nome = obj.nome;
        this.valor = obj.valor;
        this.qtdEstoque = obj.qtdEstoque;
    }
}
