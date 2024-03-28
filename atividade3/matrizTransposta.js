/*ATIVIDADE 3       ALUNO: DANIEL SOUZA - UC23100767 */

// Função que recebe a matriz A e cria uma matriz transposta (B) + imprime a matriz A + imprime a matriz transposta (B)
function transporMatriz(matriz){
    
    // Matriz A
    let matrizA = '';
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            matrizA += matriz[i][j] + ' ';
        }
        matrizA += '\n';
    }
    // Imprimindo a Matriz A
    console.log("-- Matriz Original --");
    console.log(matrizA);

    // Matriz transposta (B)
    let matrizB = '';
    for (let j = 0; j < matriz[0].length; j++) {
        for (let i = 0; i < matriz.length; i++) {
            matrizB += matriz[i][j] + ' ';
        }
        matrizB += '\n';
    }
    // Imprimindo a Matriz B
    console.log("-- Matriz Transposta --");
    console.log(matrizB);
}

// Variável determinadno os valores da matriz original
const matriz = [ [1, 2], [3, 4], [5, 6] ];

// Executando a função
transporMatriz(matriz);