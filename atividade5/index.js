const express = require('express');
const estoque = require('./src/estoque.js');
const app = express();

// Adiciona um novo produto ao estoque
app.get('/adicionar/:id/:nome/:qtd', function (req, res) {
    let id = req.params.id;
    let nome = req.params.nome;
    let qtd = req.params.qtd;
    let produto = estoque.criar_produto(id, nome, qtd);
    
    estoque.adicionar_produto(produto);
    res.send(produto);
});

// Lista todos os produtos do estoque
app.get('/listar', function (req, res) {
    res.send(estoque.listar_produto());
})

// Remove um produto do estoque
app.get('/remover/:id', function (req, res) {
    let id = req.params.id;
    estoque.remover_produto(id);
    res.send(id);
});

// Altera a quantidade de um produto do estoque
app.get('/editar/:id/:qtd', function (req, res) {
    let id = req.params.id;
    let qtd = req.params.qtd;
    let produto = estoque.alterar_qnt_produto(id, qtd);

    res.send('Quantidade alterada');
});

// Porta localhost
const PORT = 8080;
app.listen(PORT, function () {
    console.log('app rodando na porta ' + PORT);
});