function apresentar(nome) {
    return `meu nome eh ${nome}`;
}

//Arrow function
const apresentarArrow = nome => `meu nome eh ${nome}`;
const soma = (num1, num2) => num1 + num2;

//Arrow function com mais de uma linha de instrução
const somaNumeros = (num1, num2) => {
    if (num1 || num2 > 10) {
        return "somente numeros de 1 a 9"
    } else {
        return num1 + num2;
    }
}