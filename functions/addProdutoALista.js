const acharItem = require('./acharItem.js');
const criarSubtotal = require('./criarSubtotal.js');

function addProdutoALista(produtos, quantidade, idDoProduto) {
    const item = acharItem(produtos, idDoProduto);
    const subtotal = criarSubtotal(quantidade, item.preco);
    listaDeCompras.push({ item, subtotal, quantidade });
    total.push(subtotal)
    return listaDeCompras
}
 export default addProdutoALista;