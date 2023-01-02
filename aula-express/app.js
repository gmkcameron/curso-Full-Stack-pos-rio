const express = require('express');
const routers = require('./api');
const { sequelize } = require('./models')


const app = express();
//pra tratar requisicoes que ve mcom formato json
app.use(express.json());
app.use('/', routers);

//sync faz a conexao com o banco
sequelize.sync().then(() => {
    console.log('Conectado com o banco de dados!')
});

app.listen(3000, () => {
    console.log('App online!');
});