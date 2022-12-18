const express = require('express');
const port = 3000;
const app = express();
app.use(express.json());

app.listen(port, () => console.log(`API rodando na porta ${port}`));

let listaUsuarios = [];
let idAtual = 1;

app.get(`/usuarios`, (req, res) => {
    res.json(listaUsuarios);
});

app.get(`/usuarios/:id`, (req, res) => {
    const usuario = listaUsuarios.find(usuario => usuario.id == req.params.id);

    if (!usuario) {
        res.send('Usuário não encontrado, favor tentar novamente!')
    }

    res.json(usuario);
});

app.post(`/usuarios`, (req, res) => {
    const usuario = {id: idAtual, ...req.body};
    listaUsuarios.push(usuario);

    idAtual++;
    res.send(usuario);
});

app.put(`/usuarios/:id`, (req, res) => {
    const index = listaUsuarios.findIndex(usuario => usuario.id == req.params.id);

    if(index < 0) {
        res.send('Usuário não encontrado, tente novamente!')
    }

    const usuario = {id: parseInt(req.params.id), ...req.body};

    listaUsuarios.splice(index, 1, usuario)

    res.send(usuario);
});

app.delete(`/produtos/:id`, (req, res) => {
    const index = listaUsuarios.findIndex(usuario => usuario.id == req.params.id);

    if(index < 0) {
        res.send('Usuário não encontrado, tente novamente!');
    }

    listaUsuarios.splice(index, 1
        );

    res.send(`${req.params.id} deletado com sucesso!`);
});

