// CONTROLADOR
const calc = require('../calculadora/calculadora');

function index(req, res) {
    let err = req.query.erro_valor;
    res.render('index.html', {err});
}

function resultado(req, res) {
    // Variáveis
    let numeroA = Number(req.body.numeroA);
    let numeroB = Number(req.body.numeroB);
    let operador = req.body.operador;
    let resposta;
    let tipo_operacao = calc.nomeOperador(operador);
    
    // Verificando se o valor de entrada é numérico
    if(isNaN(numeroA) || isNaN(numeroB)){
        res.redirect('/?erro_valor=true');
    }else{
        resposta = calc.calcular(numeroA, numeroB, operador);
        res.render('resultado.html', {numeroA, numeroB, tipo_operacao, resposta});
    }
}

// Exportar os modulos
module.exports = {
    index,
    resultado
}