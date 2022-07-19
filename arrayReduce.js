// Normalmente, a função reduce possibilita reduzir um array em um único valor.
// Exemplo: Gerar um somatório de um array de números:
const numeros = [5, 10, 15, 20, 25];

const soma = numeros.reduce((total, valor) => total += valor, 0)
// Valor inicial do total foi definido como = 0

console.log(soma)

const pessoas = [
    { nome: 'João', idade: 20 },
    { nome: 'Maria', idade: 25 },
    { nome: 'Joana', idade: 45 },
    { nome: 'Guilherme', idade: 30 },
]

const pessoaMaisVelha = pessoas.reduce((pessoaMaisVelha, pessoa) => {
    return pessoaMaisVelha.idade < pessoa.idade  ? pessoaMaisVelha = pessoa : pessoaMaisVelha
},)

console.log(`A pessoa mais velha(${pessoaMaisVelha.nome}) possui ${pessoaMaisVelha.idade} anos`)