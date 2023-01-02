const curso = (sequelize, DataTypes) => {
    /* deifne recebe como 1º parametro o nome do model
    2º parametro sao os dados que vou inserir na tabela */
    const Curso = sequelize.define('Curso', {
        nome: {
            type: DataTypes.STRING
        },
        ch: {
            type: DataTypes.INTEGER
        }
    }, {
        tableName: 'curso'
    });

    return Curso
}

//pra importar em outro lugar e usar
module.exports = curso