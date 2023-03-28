// Solicita um número ao usuário
var numero = parseInt(prompt("Digite um número para verificar se ele pertence à sequência de Fibonacci:"));

// Inicializa as variáveis para o cálculo da sequência de Fibonacci
var anterior = 0;
var atual = 1;
var proximo;

// Loop para gerar a sequência de Fibonacci até que o valor atual seja maior ou igual ao número informado
while (atual < numero) {
    proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
}

// Verifica se o número informado pertence à sequência de Fibonacci
if (atual === numero) {
    console.log(numero + " pertence à sequência de Fibonacci.");
} else {
    console.log(numero + " não pertence à sequência de Fibonacci.");
}
