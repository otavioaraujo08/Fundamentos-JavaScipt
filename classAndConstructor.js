// Classes e construtores
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar() {
        console.log(this.nome, 'está falando')
    }
    
    comer() {
        console.log(this.nome, 'está comendo')
    }

    trabalhar() {
        console.log(this.nome, 'está trabalhando')
    }
}

const pessoaUm = new Pessoa('João', 'Silva')

console.log(pessoaUm)

pessoaUm.falar()

// Apenas o construtor é necessário para criar um novo objeto
function Pessoa2(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
}

Pessoa2.prototype.falar = function() {
    console.log(this.nome, 'está falando')	
}

const pessoaDois = new Pessoa('Maria', 'Santos')

console.log('\n',pessoaDois)

pessoaDois.falar()

