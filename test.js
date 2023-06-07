// -------------------------------------

/**
 * Função que calcula a soma de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A soma dos dois numeros
 */
function soma(a, b) {
    return a + b;
}

console.log(soma(10,100));

/**
 * Função que calcula a multiplicação de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A multiplicação dos dois numeros
 */
function multiplicacao(a, b) {
    return a * b;

}

console.log(multiplicacao(10,100));

/**
 * Função que calcula a divisão de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A divisão dos dois numeros
 */
function divisao(a, b) {
    return a / b;

}

console.log(divisao(10,100));

/**
 * Função que calcula a subtração de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A subtração dos dois numeros
 */
function subtracao(a, b) {
    return a - b;  
}

console.log(subtracao(10,100))

/**
 * Função que resto da divisão de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} O resto da divisão dos dois numeros
 */
function modulo(a, b) {
    return a % b;
    
}
console.log (modulo(10,100))

/**
 * Função que calcula o maior número entre 2
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} O maior número
 */
function max(a, b) {
        if (a >= b) {
            return `${a} é maior que ${b}`;
    }
    else
        if (a <= b) {
            return `${b} é menor que ${a}`;
    }

}
    console.log(max(10,5)); // Mudar o valores '10' e '5' irá mostrar resultado diferentes.

// -------------------------------------

/**
 * Função que concatena 2 strings utilizando template strings
 * @param {string} a - A primeira string
 * @param {string} b - A segunda string
 * @returns {string} As 2 strings concatenadas
 */
function strConcat(a, b) {
    return `Seu nome: ${a} com idade de: ${b}`;
}
    console.log(strConcat('Brayan', 18))

// --------------------------------------

/**
 * Função que implementa controle de fluxo
 * 
 * @param {number} numero - O número em questão
 * @returns {string} 
 *  - "Maior que 10" quando o número é maior que 10
 *  - "Igual a 10" quando o número é igual a 10
 *  - "Menor que 10" quando o número é menor que 10
 */
function retornaNumero(numero = 10) {
    if (numero >= 9) {
        return `O numero e maior que ${numero}`;
    }
    else if (numero >= 5) {
        return `o numero e igual a ${numero}`;
    }
    else {
        return `o numero e menor que ${numero}`;
    }
}
    console.log(retornaNumero(3)); // Mudar o valor do retornaNumero irá mostrar resultado diferente.

// --------------------------------------

/**
 * Função que valida se o número em questão é positivo
 * @param {number} num - Número em questão
 * @returns {boolean} Retorna true para números positivos
 */
function ehPositivo(num) {
    if (num < 0) {
        return`o numero ${num} é negativo`;
    }
    else {
        return`o numero ${num} é positivo`;
    }

}
    console.log(ehPositivo(10)); // Mudar o valor ehPositivo irá mostrar resultado diferente.

