let quantidade = 0;
let primeiro = null;
let ultimo = null;

// Retorna a quantidade na fila
function obterQuantidade() {
    return quantidade;
}

// Adiciona um item à fila
function adicionar(data) {
    let node = {
        data: data,
        prox: primeiro
    };
    if (primeiro === null) {
        ultimo = node;
    }

    primeiro = node;

    quantidade++;
}

// Remove um item da fila
function remover() {
    // se a fila estiver vazia retorna nulo
    if (ultimo === null) {
        return null
    } else {
        // senão, percorre a fila até o ultimo item para remove-lo e ajusta a lista
        let current = primeiro;
        let previous = null;

        while (current.prox) {
            previous = current;
            current = current.prox;
        }

        if (quantidade > 1) {
            previous.prox = null;
            ultimo = previous;
        } else {
            // zera/reseta a fila
            primeiro = null;
            ultimo = null;
        }
        quantidade--;
    }
}

// Exibe todos os itens da fila
function exibirTodos() {
    if (primeiro === null) {
        return null;
    } else {
        let arr = new Array();
        let current = primeiro;

        for (let i = 0; i < quantidade ; i++) {
            arr[i] = current.data;
            current = current.prox;
        }

        return arr;
    }
}

adicionar('2022-10-01')
adicionar('2022-10-03')
adicionar('2022-10-02')
adicionar('2022-10-04')

console.log(exibirTodos());
