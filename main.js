const produtos = require('./data/produtos.json');
const acharItem= require('./functions/acharItem.js');
const criarSubtotal = require('./functions/criarSubtotal.js');
const somarTotal = require('./functions/somarTotal.js')

const mercadorias = produtos.map(mercadoria => `${mercadoria.id}-${mercadoria.nome}-${mercadoria.preco}\r`);

const listaDeCompras = [];
let quantidade = "";
let idDoProduto = "";

do {
    idDoProduto = parseInt(prompt(`Selecione o item pelo Id\r Digite 0 pra finalizar sua compra ou caso queira cancelar\r ${mercadorias}`));

    if (idDoProduto <= produtos.length && idDoProduto != 0) {
        let quantidade = parseInt(prompt("Insira a quantidade"));
        if (quantidade != 0) {
            addProdutoALista(produtos, quantidade, idDoProduto);

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
    const retornarValor = somartotal(listaDeCompras);
    const pedido = {
        itens: listaDeCompras,
        total: retornarValor
    }
    console.log(JSON.stringify(pedido, null, 2));
}
