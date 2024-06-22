const Produto = require('../model/produto');

function indexView(req, res) {
    res.render('index.html');
}

function homeView(req, res) {

    Produto.findAll({
        where: {
            id_usuario: req.session.usuario.id,
            indicador_ativo: 1
        }
    }).then((produtos)=>{
        res.render('home.html', {produtos});
    }).catch((erro_recupera_produtos)=>{
        res.render('home.html', {erro_recupera_produtos});
    });
}

// Função para cadastrar novo produto
function cadastrarProduto(req, res) {
    let produto = {
        nome: req.body.nome,
        id_usuario: req.session.usuario.id,
        categoria: req.body.categoria,
        descricao: req.body.descricao,
        preco: req.body.preco,
        quantidade: req.body.quantidade,
        indicador_ativo: 1
    }
    
    Produto.create(produto).then(()=>{
        res.redirect('/home');
    }).catch((err)=>{
        console.log(err);
        let erro_cadastrar_produto = true;
        res.render("home.html", {erro_cadastrar_produto});
    });
}

// Função para mostrar todos os produtos
function controleProdutosView(req, res) {
    Produto.findAll({
        where: {
            id_usuario: req.session.usuario.id,
            indicador_ativo: 1
        }
    }).then((produtos) => {
        res.render('controle_produtos.html', { produtos });
    }).catch((erro_recupera_produtos) => {
        res.render('controle_produtos.html', { erro_recupera_produtos });
    });
}

// Função para excluir um produto
function excluirProduto(req, res) {
    Produto.update({ indicador_ativo: 0 }, {
        where: {
            id_produto: req.params.id_produto,
            id_usuario: req.session.usuario.id
        }
    }).then(() => {
        res.json({ success: true });
    }).catch((err) => {
        console.log(err);
        res.json({ success: false });
    });
}

// Função para visualiar os produtos na página de modificação
function modificarProdutoView(req, res) {
    Produto.findByPk(req.params.id_produto).then((produto) => {
        res.render('modificar_produto.html', { produto });
    }).catch((err) => {
        console.log(err);
        res.redirect('/controle_produtos');
    });
}

// Função para modificar um produto
function modificarProduto(req, res) {
    Produto.update({
        nome: req.body.nome,
        categoria: req.body.categoria,
        descricao: req.body.descricao,
        preco: req.body.preco,
        quantidade: req.body.quantidade
    }, {
        where: {
            id_produto: req.params.id_produto,
            id_usuario: req.session.usuario.id
        }
    }).then(() => {
        res.redirect('/controle_produtos');
    }).catch((err) => {
        console.log(err);
        res.redirect('/modificar_produto/' + req.params.id_produto);
    });
}


module.exports = {
    indexView,
    homeView,
    cadastrarProduto,
    controleProdutosView,
    excluirProduto,
    modificarProdutoView,
    modificarProduto
}