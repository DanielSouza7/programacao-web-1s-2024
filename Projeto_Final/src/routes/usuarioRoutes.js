const express = require('express');
const router = express.Router();

const usuarioController = require('../controller/usuarioController');

// Rota para abrir a página de cadastro
router.get('/cadastrar_usuario', usuarioController.abrirCadastro); // carregar a pagina cadastrar_usuario.html

// Rota para cadastrar o usuário
router.post('/cadastrar_usuario', usuarioController.cadastrarUsuario); // enviar os dados da pagina cadastrar_usuario.html pro BD 

// Rota para listar usuários
router.get('/api/usuarios', usuarioController.listarUsuarios);

// Rota para abrir a página de atualização
router.get('/atualizar_usuario', usuarioController.abrirAtualizacao);

// Rota para atualizar o usuário
router.post('/atualizar_usuario', usuarioController.atualizarUsuario);

module.exports = router;