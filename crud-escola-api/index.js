const express = require("express");
const port = 3000;
const app = express();

app.use(express.json());

const routes = require("./routes");
app.use(routes);

app.listen(port, () => console.log(`Api rodando na porta ${port}`));
