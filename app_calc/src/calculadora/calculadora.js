// CALCULADORA

// Função para calcular as duas entradas
function calcular(numeroA, numeroB, operador) {
    let resultado;
    switch (operador) {
        case '+':
            resultado = numeroA + numeroB;
            break;
        case '-':
            resultado = numeroA - numeroB;
            break;
        case '*':
            resultado = numeroA * numeroB;
            break;
        case '/':
            resultado = numeroA / numeroB;
            break;
    }
    return resultado;
}

// Função para dar nome ao tipo da operação matemática
function nomeOperador(operador) {
    let tipo_operacao;
    switch (operador) {
        case '+':
            tipo_operacao = "soma";
            break;
        case '-':
            tipo_operacao = "subtração";
            break;
        case '*':
            tipo_operacao = "multiplicação";
            break;
        case '/':
            tipo_operacao = "divisão";
            break;
    }
    return tipo_operacao;
}

// Exportar os modulos
module.exports = {
    calcular,
    nomeOperador
}