var frutas = ['Maçã', 'Morango'];

var adicionar = frutas.push('Laranja', 'Caqui', 'Jaca'); //add item

var ultimo = frutas.pop(); //remove ultimo

var primeiro = frutas.shift(); //remove primeiro

frutas.push('Manga');

var pos = frutas.indexOf('Caqui'); //diz indice de um item
//console.log(pos);

var removedItem = frutas.splice(pos, 2); //remove item pelo índice

var vegetais = ['Repolho', 'Nabo', 'Rabanete', 'Cenoura'];
var pos = 1, n = 2;
var itensRemovidos = vegetais.splice(pos, n); //n = nº itens a remover e pos = a partir de que posição

console.log(vegetais);
console.log(itensRemovidos);

var copiar = frutas.slice(); //copia um array
console.log(copiar);  
