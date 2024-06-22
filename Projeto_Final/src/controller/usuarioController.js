const Usuario = require('../model/usuario');

// Função para abrir página de cadastro de usuario
function abrirCadastro(req, res) {
    res.render('cadastrar_usuario.html');
}

// Função para cadastrar usuario
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

// Função para listar usuários
function listarUsuarios(req, res) {
    Usuario.findAll().then((usuarios)=>{
        res.json(usuarios);
    }).catch((err)=>{
        res.json(err);
    });
}

// Função para abrir a página de atualização
function abrirAtualizacao(req, res) {
    const usuario = req.session.usuario;
    res.render('atualizar_usuario.html', {usuario});
}

// Função para atualizar o usuário
async function atualizarUsuario(req, res) {
    const usuarioId = req.session.usuario.id; // assumindo que o ID está salvo na sessão
    let atualizacao = {
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
    };

    try {
        await Usuario.update(atualizacao, { where: { id: usuarioId } });
        // Atualizar as informações do usuário na sessão
        req.session.usuario = { ...req.session.usuario, ...atualizacao };
        res.redirect('/home');
    } catch (err) {
        console.log(err);
        let erro = true;
        res.render('atualizar_usuario.html', {erro, usuario: req.session.usuario});
    }
}

// Exportar as Funções
module.exports = {
    abrirCadastro,
    cadastrarUsuario,
    listarUsuarios,
    abrirAtualizacao,
    atualizarUsuario
}