const pessoa = {
    nome: 'Otávio',
    sobrenome: 'Araujo',
    idade: 21,
    endereco: {
        rua: 'Rua dos Bobos',
        numero: 123
    }
}

const { nome: username, sobrenome, idade } = pessoa
const { nome, ...resto } = pessoa
const { endereco: { rua, numero } } = pessoa

console.log('Meu nome é', username, '\nMeus sobrenomes é', sobrenome, '\nMinha idade é', idade)
console.log('Meu endereço é', rua,', número:', numero)
console.log('\nAqui estou trazendo apenas o resto', resto)