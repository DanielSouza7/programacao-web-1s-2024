const Usuario = require('../model/usuario');

function cadastrarUsuario(req, res) {
    let usuario = {
        nome: req.body.nome,
        cpf: req.body.cpf,
        data_nascimento: req.body.data_nascimento,
        email: req.body.email,
        telefone: req.body.telefone,
        endereco: req.body.endereco,
        bairro: req.body.bairro,
        uf: req.body.uf,
        cep: req.body.cep,
        senha: req.body.senha,
    }
    
    Usuario.create(usuario).then(()=>{
        let sucesso = true;
        res.render("cadastrar_usuario.html", {sucesso});
    }).catch((err)=>{
        console.log(err);
        let erro = true;
        res.render("cadastrar_usuario.html", {erro});
    });
}

function listarUsuarios(req, res) {
    Usuario.findAll().then((usuarios)=>{
        res.json(usuarios);
    }).catch((err)=>{
        res.json(err);
    });
}

module.exports = {
    cadastrarUsuario,
    listarUsuarios
}