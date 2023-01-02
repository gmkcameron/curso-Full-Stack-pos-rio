const materialService = require("../services/MaterialService");

class MaterialController {
    obterPorTodos(req, res) {
        let materiais = materialService.obterPorTodos();

        return res.json(materiais);
    }
    obterPorId(req, res) {
        const { id } = req.params;

        let material = materialService.obterPorId(id);

        return res.json(material);
    }
    cadastrar(req, res) {
        let material = materialService.cadastrar(req.body);

        return res.json(material);
    }
    atualizar(req, res) {
        const { id } = req.params;
        
        let material = materialService.atualizar(id, req.body);

        return res.json(material);
    }
    deletar(req, res) {
        const { id } = req.params;

        return res.send(materialService.deletar(id));
    }
}

module.exports = MaterialController;