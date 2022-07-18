// Filter retorna sempre um array igaul ao original ou menor que o original
// Retornar os números maiores que 10:
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosFiltrados = numeros.filter((numero) => numero > 5);

console.log(numerosFiltrados);