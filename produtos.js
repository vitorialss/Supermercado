const produtos = [
    {
        "nome": "Achocolatado",
        "preco": 7.99,
        "id": 1,
        "categoria": "alimentos"
    },
    {
        "nome": "Açúcar",
        "preco": 4.99,
        "id": 2,
        "categoria": "alimentos",
    },
    {
        "nome": "Arroz",
        "preco": 6.79,
        "id": 3,
        "categoria": "alimentos",
    },
    {
        "nome": "Feijão",
        "preco": 9.79,
        "id": 4,
        "categoria": "alimentos",
    },
    {
        "nome": "Queijo",
        "preco": 23.45,
        "id": 5,
        "categoria": "alimentos",
    },
    {
        "nome": "Tomate",
        "preco": 5.99,
        "id": 6,
        "categoria": "frutas e legumes",
    },
    {
        "nome": "Alho",
        "preco": 4.90,
        "id": 7,
        "categoria": "frutas e legumes",
    },
    {
        "nome": "Couve",
        "preco": 5.50,
        "id": 8,
        "categoria": "frutas e legumes",
    },
    {
        "nome": "Banana",
        "preco": 4.80,
        "id": 9,
        "categoria": "frutas e legumes",
    },
    {
        "nome": "Maçã",
        "preco": 12.99,
        "id": 10,
        "categoria": "frutas e legumes"
    },
    {
        "nome": "Detergente",
        "preco": 2.39,
        "id": 11,
        "categoria": "limpeza",
    },
    {
        "nome": "Sabão em pó",
        "preco": 5.54,
        "id": 12,
        "categoria": "limpeza",
    },
    {
        "nome": "Amaciante",
        "preco": 16.99,
        "id": 13,
        "categoria": "limpeza",
    },
    {
        "nome": "Desinfetante",
        "preco": 3.57,
        "id": 14,
        "categoria": "limpeza",
    },
    {
        "nome": "Sabão em barra",
        "preco": 10.99,
        "id": 15,
        "categoria": "limpeza",
    },
    {
        "nome": "sabonete",
        "preco": 3.19,
        "id": 16,
        "categoria": "higiene"
    },
    {
        "nome": "Creme dental",
        "preco": 3.90,
        "id": 17,
        "categoria": "higiene"
    },
    {
        "nome": "Desodorante",
        "preco": 10.99,
        "id": 18,
        "categoria": "higiene"
    },
    {
        "nome": "Fio dental",
        "preco": 4.20,
        "id": 19,
        "categoria": "higiene"
    },
    {
        "nome": "Shampoo",
        "preco": 14.85,
        "id": 20,
        "categoria": "higiene"
    }

];

const listaDeCompras = [];
let quantidade = "";
let idDoProduto = "";
let total = [];

function acharItem(produtos, idDoProduto) {
    return produtos.find((element) => element.id === idDoProduto);
}

function addProdutoALista(produtos, quantidade, idDoProduto) {
    const item = acharItem(produtos, idDoProduto);
    const subtotal = criarSubtotal(quantidade, item.preco);
    listaDeCompras.push({ item, subtotal, quantidade });
    total.push(subtotal)
    return listaDeCompras
    return total
}
function criarSubtotal(quantidade, preco) {
    return quantidade * preco;
}

function somartotal(total) {
    let valor = Math.round(total.reduce(function (valor, total) {
        return total + valor;
    }, 0));
    let valorFormatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    console.log(valorFormatado);
}

do {
    idDoProduto = parseInt(prompt("insira o id"));
    console.log(idDoProduto)

    if (idDoProduto <= produtos.length && idDoProduto != 0) {
        let quantidade = parseInt(prompt("Insira a quantidade"));
        console.log(quantidade);
        if (quantidade != 0) {
            addProdutoALista(produtos, quantidade, idDoProduto)
            console.log(listaDeCompras);
        } else {
            alert("Quantidade inválida");
        }
    } else if (idDoProduto === 0) {
        break;

    } else {
        alert("Produto não cadastrado");
    }
} while (idDoProduto != 0);
if (idDoProduto === 0) {
    console.log(listaDeCompras)
    console.log(total)
    somartotal(total)
}
/*Tem que arrancar esse tanto de console.log
exibir a lista de itens, quantidade e o valorFormatado numa só lista num alert
refazer as perguntas do prompt*/

