function somartotal(listaDeCompras) {
    let valor = Math.round(listaDeCompras.reduce((valor, item) => {
        return item.subtotal + valor;
    }, 0));
    let valorFormatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return valorFormatado;
}
export default somartotal;