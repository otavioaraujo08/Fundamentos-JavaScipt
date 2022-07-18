Filter retorna sempre um array igaul ao original ou menor que o original
Retornar os números maiores que 10:
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosFiltrados = numeros.filter((numero) => numero > 5);

console.log(numerosFiltrados);

const pessoas = [
    { nome: "Pedro", idade: 20 },
    { nome: "João", idade: 25 },
    { nome: "Thiago", idade: 30 },
    { nome: "Franklin", idade: 10 },
]

const nomesPessoasFiltradas = pessoas.filter((pessoa) => pessoa.nome.length > 5);
const idadePessoasFiltradas = pessoas.filter((pessoa) => pessoa.idade > 20);

console.log(nomesPessoasFiltradas);
console.log(idadePessoasFiltradas);