const Sequelize = require('sequelize');
const database = require('../db');

const Produto = database.define('produto', {
    // Identificador do produto
    id_produto: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    
    // Usuário dono do produto
    id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    
    // Nome do produto
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    
    // Categoria do produto
    categoria: {
        type: Sequelize.STRING,
        allowNull: false
    },

    // Descrição do produto
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    
    // Preço do produto
    preco: {
        type: Sequelize.FLOAT,
        allowNull: false
    },

    // Quantidade do produto
    quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    indicador_ativo: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
});

module.exports = Produto;