const express = require('express');

const cursosRouter = require('./cursos')
const estudantesRouter = require('./estudantes')

const router = express.Router();

router.get('/', (req, res) => {
    res.send('App online!');
});

//fala de qqr tipo de rota, nao de um metodo especifico
router.use('/cursos', cursosRouter);
router.use('/estudantes', estudantesRouter);

module.exports = router