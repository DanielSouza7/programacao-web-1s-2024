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

module.exports = {
    indexView,
    homeView,
    cadastrarProduto
}