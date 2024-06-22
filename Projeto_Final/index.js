const express = require('express');
const mustacheExpress = require('mustache-express');
const session = require('express-session');
const db = require('./src/db');

const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/src/views');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.use(session({
    secret: 'secret-token',
    name: 'sessionId',  
    resave: false,
    saveUninitialized: false
}));

// Middleware para adicionar o usuário à resposta local
app.use((req, res, next) => {
    res.locals.usuario = req.session.usuario || null;
    next();
});

// Rotas da aplicação
app.use('/', require('./src/routes/produtoRoutes'));
app.use('/', require('./src/routes/usuarioRoutes'));
app.use('/', require('./src/routes/autenticacaoRoutes'));

// Banco de Dados
db.sync(() => console.log(`Banco de dados conectado`));

// Porta que vai rodar a aplicação
const app_port = 8080
app.listen(app_port, function () {
    console.log('app rodando na porta ' + app_port)
});