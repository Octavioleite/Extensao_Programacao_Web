// Função para transpor uma matriz
function transporMatriz(A) {
    // Função para imprimir uma matriz
    function imprimirMatriz(matriz) {
        matriz.forEach(linha => console.log(linha.join(' ')));
    }

    // Imprimir matriz original
    console.log("Matriz original:");
    imprimirMatriz(A);

    // Calcular e imprimir a transposta
    const transposta = [];
    for (let coluna = 0; coluna < A[0].length; coluna++) {
        const novaLinha = [];
        for (let linha = 0; linha < A.length; linha++) {
            novaLinha.push(A[linha][coluna]);
        }
        transposta.push(novaLinha);
    }

    console.log("\nTransposta:");
    imprimirMatriz(transposta);
}

// Exemplo de uso:
const matrizExemplo = [
    [1, 2],
    [3, 4],
    [5, 6]
];
transporMatriz(matrizExemplo);
