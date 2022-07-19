// forEach é uma maneira de reiterar os valores anteriores de um array
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Isso é a mesma coisa
for(let valor of numeros) {
    console.log(valor)
}

// Que isso, só que escrito de maneiras diferentes
numeros.forEach(valor => console.log(valor))