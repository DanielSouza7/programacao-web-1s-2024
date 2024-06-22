const express = require('express');
const router = express.Router();

const produtoController = require('../controller/produtoController');
const autenticacaoController = require('../controller/autenticacaoController');

router.get('/', produtoController.indexView);
router.get('/home', autenticacaoController.verificarAutenticacao, produtoController.homeView);

// Rota para cadastrar novo produto
router.post('/cadastrar_produto', autenticacaoController.verificarAutenticacao, produtoController.cadastrarProduto);

// Rota para levar até a página de controle de produtos
router.get('/controle_produtos', autenticacaoController.verificarAutenticacao, produtoController.controleProdutosView);

// Rota para excluir o produto
router.delete('/excluir_produto/:id_produto', autenticacaoController.verificarAutenticacao, produtoController.excluirProduto);

// Rota para modificar o produto
router.get('/modificar_produto/:id_produto', autenticacaoController.verificarAutenticacao, produtoController.modificarProdutoView);
router.post('/modificar_produto/:id_produto', autenticacaoController.verificarAutenticacao, produtoController.modificarProduto);

module.exports = router;