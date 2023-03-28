// Define o objeto com o faturamento mensal de cada estado
const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

// Calcula o faturamento total mensal da distribuidora
const faturamentoTotal = Object.values(faturamento).reduce((acc, curr) => acc + curr, 0);

// Calcula o percentual de representação de cada estado
const percentuais = {};
for (const estado in faturamento) {
    percentuais[estado] = (faturamento[estado] / faturamentoTotal) * 100;
}

// Imprime os percentuais de representação de cada estado
for (const estado in percentuais) {
    console.log(`${estado}: ${percentuais[estado].toFixed(2)}%`);
}
