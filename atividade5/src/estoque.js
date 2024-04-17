let todos_produtos = [];

function criar_produto(id, nome, qtd) {
    let produto = {
        id: id,
        nome: nome,
        qtd: qtd
    }
    return produto;
}

function adicionar_produto(produto) {
    todos_produtos.push(produto);
}

function listar_produto() {
    return todos_produtos;
}

function remover_produto(id) {
    todos_produtos = todos_produtos.filter((produto) => {
        let x = produto.id != id;
        return x;
    });
}

function alterar_qnt_produto(id, qtd) {
    todos_produtos = todos_produtos.map((produto) => {
        if (produto.id === id) {
            produto.qtd = qtd;
        }
        return produto;
    });
}

module.exports = {
    criar_produto,
    adicionar_produto,
    listar_produto,
    remover_produto,
    alterar_qnt_produto
};