const express = require('express');
const router = express.Router();
//dentro de models importei curso
const { curso } = require('../models');


// usado no inicio do codigo --> const listaCursos = []

router.get('/', async (req, res) => {
const cursos = await curso.findAll() //findAll consulta todos os dados de uma determinada entidade
    res.json(cursos);
});

router.post('/', async (req, res) => {
    const { nome, ch } = req.body;
    await curso.create({ nome, ch }) //cria um novo objeto no banco, passando os dados do objeto
    // console.log(dadosCurso);
    // listaCursos.push(dadosCurso);
    res.send('Curso adicionado com sucesso!');
});

module.exports = router