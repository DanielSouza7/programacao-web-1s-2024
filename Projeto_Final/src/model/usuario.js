const Sequelize = require('sequelize');
const database = require('../db');

// O Usuário do app será um vendedor
const Usuario = database.define('usuario', {
    // Identificador do usuário
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    // E-mail do usuário (login de entrada)
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    
    // Senha do usuário (senha para entrada)
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    },

    // Nome do usuário
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },

    // CPF do usuário
    cpf: {
        type: Sequelize.NUMBER,
        allowNull: false
    },

    // Data de nascimento do usuário
    data_nascimento: {
        type: Sequelize.NUMBER,
        allowNull: false
    },

    // Telefone do usuário
    telefone: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    
    // Endereço do usuário (parte do endereço)
    endereco: {
        type: Sequelize.STRING,
        allowNull: false
    },

    // Bairro do usuário (parte do endereço)
    bairro: {
        type: Sequelize.STRING,
        allowNull: false
    },

    // UF (parte do endereço)
    uf: {
        type: Sequelize.STRING,
        allowNull: false
    },

    // CEP do usuário (parte do endereço)
    cep: {
        type: Sequelize.NUMBER,
        allowNull: false
    }
});

module.exports = Usuario;