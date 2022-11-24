const express = require('express'); //importação do pacote
const app = express(); //instanciando express
const data = require("./data.json");

app.use(express.json());

app.get('/hello-world', (req, res) => {
    res.send('Hello world em express')
}); 

app.listen(3010, function() {
    console.log("Server is running");
});


