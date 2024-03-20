/*ATIVIDADE 2       ALUNO: DANIEL SOUZA - UC23100767 */

// Função que verifica se o número é primo
function verificarNumeroPrimo(n){
    // Para números abaixo de 2 (não são primos)
    if (n <= 1) {
        return false;
    }
    
    // Loop para verificar se o número não é primo
    for (let x = 2; x <= Math.sqrt(n); x++) {
        if (n % x === 0) {
            return false;
        }
    }
    
    // Todos os demais números (serão primos)
    return true;
}

// Imprimindo testes
console.log("---------------------- TESTES ----------------------");
console.log("----------------------------------------------------");
console.log(`O número 0 é primo? ${verificarNumeroPrimo(0)}`);
console.log(`O número 1 é primo? ${verificarNumeroPrimo(1)}`);
console.log(`O número 2 é primo? ${verificarNumeroPrimo(2)}`);
console.log(`O número 3 é primo? ${verificarNumeroPrimo(3)}`);
console.log(`O número 7 é primo? ${verificarNumeroPrimo(7)}`);
console.log(`O número 83 é primo? ${verificarNumeroPrimo(83)}`);
console.log(`O número 100 é primo? ${verificarNumeroPrimo(100)}`);
console.log(`O número 991 é primo? ${verificarNumeroPrimo(991)}`);
console.log(`O número 104729 é primo? ${verificarNumeroPrimo(104729)}`);
console.log(`O número 14348907 é primo? ${verificarNumeroPrimo(14348907)}`);
console.log("----------------------------------------------------");