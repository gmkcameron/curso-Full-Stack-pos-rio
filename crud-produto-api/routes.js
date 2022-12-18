const express = require('express');
const routes = express.Router();

const ProdutoController = require("./src/controllers/produtoController");
const produtoController = new ProdutoController();

routes.get("/produtos", produtoController.obterPorTodos);
routes.get("/produtos/:id", produtoController.obterPorId);
routes.post("/produtos", produtoController.cadastrar);
routes.put("/produtos/:id", produtoController.atualizar);
routes.delete("/produtos/:id", produtoController.deletar);

module.exports = routes;
