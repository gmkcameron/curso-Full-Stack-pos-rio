let mariana = {
    nome: "Mariana da Silva",
    cursos: ["Análise de Algoritmo", "Estrutura de Dados", "Introdução à Computação"],
    isActive: true,
    points: 2000
};

let silvia = {
    nome: "Silvia de Andrade",
    cursos: ["HTML", "Estrutura de Dados", "JavaScript"],
    isActive: true,
    points: 1440
};

let laura = {
    nome: "Laura Varmerman",
    cursos: ["Análise de Algoritmo", "Estrutura de Dados", "Introdução à Computação", "Estatística"],
    isActive: false,
    points: 10000
};

let estudantes = [mariana, silvia, laura];

for (estudante of estudantes) {
    console.log(estudante.nome);
}