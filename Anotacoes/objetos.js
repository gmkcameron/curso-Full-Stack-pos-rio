let pessoa = {
    nome: "Guilherme",
    idade: 38,
    feliz: true,
    pets: ["cachorro", "gato"],
    
    carros: {
        camaro: {
            placa: "123456",
            cor: "verde",
        },
        uno: {
            placa: "987654",
            cor: "branco",
        }
    },
    andar: function(Km) {
        console.log(pessoa.nome + " andou " + Km + " km")
    }
}

pessoa.andar(20);

//console.log(pessoa.carros.uno.placa);


/* pessoa.nome = "Carlos";
pessoa.pets[0] = "papagaio";
console.log(pessoa.pets[1]); 
console.log(pessoa.pets[0]); */
