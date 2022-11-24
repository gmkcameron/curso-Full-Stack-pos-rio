const express = require('express');
const port = 3100;

const app = express();

app.get('/somar', (req, res) => {
    console.log(res.query);
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    const total = num1 + num2;

    res.send(`${num1} + ${num2} = ${total}`);
});

app.get('/subtrair', (req, res) => {
    console.log(req.query);
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    const total = num1 - num2;

    res.send(`${num1} - ${num2} = ${total}`);
});

app.get('/multiplicar', (req, res) => {
    console.log(req.query);
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    const total = num1 * num2;

    res.send(`${num1} x ${num2} = ${total}`);
});

app.get('/dividir', (req, res) => {
    console.log(req.query);
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (num2 == 0) {
        res.send('Não é possível fazer a divisão por zero. Tente outro número!')
    }
        
    const total = num1 / num2;

    res.send(`${num1} / ${num2} = ${total}`);
});

app.listen(port, () => console.log(`API rodando na porta ${port}`));
