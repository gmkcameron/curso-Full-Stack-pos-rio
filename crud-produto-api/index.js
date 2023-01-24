const express = require("express");
const port = 3100;
const app = express();

app.use(express.json());

require('dotenv').config();
require('./src/database');

const routes = require("./routes");
app.use(routes);

app.listen(port, () => console.log(`API rodando na porta ${port}`));

// const produtoService = require("./src/services/ProdutoService");

// app.get("/produtos", (req, res) => {
//     res.json(listaProdutos);
// });

// app.get("/produtos/:id", (req, res) => {
//     const produto = listaProdutos.find(produto => produto.id == req.params.id);

//     if (!produto) {
//         res.send("Produto não encontrado, tente novamenete por favor.")
//     }

//     res.json(produto);
// });

// app.post("/produtos", (req, res) => {
//     let produto = produtoService.cadastrar(req.body);
    
//     res.send(produto);
// });

// app.put("/produtos/:id", (req, res) => {
//     const index = listaProdutos.findIndex(produto => produto.id == req.params.id);

//     if (index < 0) {
//         res.send("Produto não encontrado, tente novamenete por favor.")
//     }

//     const produto = { id: parseInt(req.params.id), ...req.body };

//     listaProdutos.splice(index, 1, produto);

//     res.send(produto);
// });

// app.delete("/produtos/:id", (req, res) => {
//     const index = listaProdutos.findIndex(produto => produto.id == req.params.id);

//     if (index < 0) {
//         res.send("Produto não encontrado, tente novamenete por favor.")
//     }

//     listaProdutos.splice(index, 1);

//     res.send(`${req.params.id} deletado com sucesso.`);
// });