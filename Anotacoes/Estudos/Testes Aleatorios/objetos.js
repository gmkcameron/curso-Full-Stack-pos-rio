//Objeto
let pessoa = {
    nome: 'Guilherme',
    idade: 38,
    sexo: 'masculino',
    nacionalidade: 'brasileira',
    pets: ['Lolita', 'Igor', 'Vivi'],

    veiculos: {
        bicicleta: {
            modelo: 'Caloi',
            cor: 'azul',
            rodas: 2,
            marchas: 18,
            amortecedor: false
        },

        carro: {
            modelo: 'Fusca',
            cor: 'azul',
            rodas: 4,
            marchas: 5,
            amortecedor: true
        }
    },
    andar: function(Km) {
        console.log(pessoa.nome + ' andou ' + Km + 'Km ');
    }
}

pessoa.andar(80);

console.log('Modelo do carro: ' + pessoa.veiculos.carro.modelo);

