function consoleLog(){
    console.log("1. Hello World");
}

consoleLog()

const souUmDado = function() {
    console.log('2. Sou um dado');
}

souUmDado()

function executarFuncao(funcao){
    console.log('3. Chamando uma função');
    funcao();
}

executarFuncao(souUmDado)

const arrowFunction = () => {
    console.log('4. Sou uma arrow function');
}

arrowFunction()

const objeto = {
    falar: function(){
        console.log('5. Sou um função objeto');
    },
    conversar(){
        console.log('6. Sou outra forma de fazer um função objeto');
    }
}

objeto.falar()
objeto.conversar()