// ...rest ou ...spread - Mais conhecido como spread operator ou rest operator
const numero = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];

const [primeiroNumero, segundoNumero, ...resto] = numero

console.log(primeiroNumero, segundoNumero)
console.log(resto)

const [um, ,tres, ,cinco] = numeros

console.log(um, tres, cinco)