const categoriaService = require("../services/CategoriaService");

class CategoriaController {
    obterPorTodos(req, res) {
        let produtos = categoriaService.obterPorTodos();

        return res.json(produtos);
    }
    obterPorId(req, res) {
        const { id } = req.params;

        let produto = categoriaService.obterPorId(id);

        return res.json(produto);
    }
    cadastrar(req, res) {
        let produto = categoriaService.cadastrar(req.body);

        return res.json(produto);
    }
    atualizar(req, res) {
        const { id } = req.params;

        let produto = categoriaService.atualizar(id, req.body);

        return res.json(produto);
    }
    deletar(req, res) {
        const { id } = req.params;

        return res.send(categoriaService.deletar(id));
    }
}

module.exports = CategoriaController;

