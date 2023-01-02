const express = require('express');
const port = 3100;
const app = express();

app.use(express.json());

const routes = require("./routes");
app.use(routes);

app.listen(port, () => console.log(`API rodando na porta ${port}`));