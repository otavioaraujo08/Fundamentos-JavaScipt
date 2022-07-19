// A função map possibilita criar um novo array a partir de um array existente - podendo ou não manter.
// Exemplo:
const numeros = [5, 10, 15, 20, 25];

const numerosDobrados = numeros.map((numero) => numero * 2)

console.log(numerosDobrados)

const pessoas = [
    { nome: 'João', idade: 20 },
    { nome: 'Otávio', idade: 25 },
    { nome: 'Maia', idade: 15 },
    { nome: 'Josi', idade: 30 },
]

// Filtrando por nome
const nomesFiltrados = pessoas.map(pessoa => pessoa.nome)

console.log(nomesFiltrados)

// Filtrando por idade
const idadeFiltrada = pessoas.map(pessoa => pessoa.idade)

console.log(idadeFiltrada)

// Gerando um id pra cada pessoa
const idFiltrado = pessoas.map((pessoa, indice) => {
    // Criando um novo objeto para não sobreescrever o original
    const novoObjeto = { ...pessoa }

    novoObjeto.id = indice

    return novoObjeto
})

console.log(pessoas)
console.log(idFiltrado)