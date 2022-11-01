/* Caixa <== 1, 2, 3, 4

const queue = [];

queue.unshift(1);
queue.unshift(2);
queue.unshift(3);
queue.unshift(4);

console.log(queue.pop());
console.log(queue.pop());

console.log(queue); */

//Não deu certo!
const queue = () => {
    const data = []
    /*value é o valor que quero adicionar
    usar push ou unshift dependendo do que quero add*/
    const add = (value) => {
        data.unshift(value);
    }//remove vazio pq vamos tirar o que tiver disponível
    
    const remove = () => {
        if (data.length === 0) {
            return - 1;
        }

        const value = data[data.length - 1]
        data.splice(data.length - 1, 1)
        return value
    }
    //só pra saber o que tá acontecendo
    const print = () => console.log(data) 

    return {
        add,
        remove,
        print
    }
}

const queue1 = queue();

adicionar(1);
adicionar(2);
adicionar(3);
adicionar(4);

console.log(print());