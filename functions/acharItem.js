function acharItem(produtos, idDoProduto) {
    return produtos.find((element) => element.id === idDoProduto);
}

export default acharItem;