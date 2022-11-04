const express = require("express");
const app = express();
const data = require("./data.json");

app.use(express.json());

/* 
http://localhost:3000/clients

https://jsonplaceholder.typicode.com/users --> traz usuários fakes
*/

app.get("/clients", function(req, res) {
    res.json(data);
});

app.get("/clients/:id", function(req, res) {
    const { id } = req.params
    const client = data.find(cli => cli.id == id)

    res.json(client);

});
app.post("/clients", function(req, res) {
    const { name, email } = req.body;

    // salvar novo cliente
    
    res.json({name, email});
    //manda de novo pro client

});

app.put("/clients/:id", function(req, res) {

    const { id } = req.params;
    const client = data.find(cli => cli.id == id);
    const { name } = req.body;

    client.name = name;

    res.json(client);
});

app.delete("/clients/:id", function(req, res) {
    const { id } = req.params;
    const clientsFiltered = data.filter(client => client.id != id)

    res.json(clientsFiltered);
});

app.listen(3000, function() {
    console.log("Server is running");
});