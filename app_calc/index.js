// Index Principal
const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('html', mustacheExpress());

app.set('view engine', 'html');
app.set('views', __dirname + '/src/views');

// Rotas
app.use(express.urlencoded({extended: true}));
app.use('/', require('./src/routes/calculadoraRoutes'));

// Porta
const PORT = 8080;
app.listen(PORT, function () {
    console.log('app rodando na porta ' + PORT);
});