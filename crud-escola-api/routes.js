const express = require('express');
const routes = express.Router();

const MaterialController = require("./src/controllers/materialController");
const materialController = new MaterialController();

routes.get("/materiais", materialController.obterPorTodos);
routes.get("/materiais/:id", materialController.obterPorId);
routes.post("/materiais", materialController.cadastrar);
routes.put("/materiais/:id", materialController.atualizar);
routes.delete("/materiais/:id", materialController.deletar);

module.exports = routes;
