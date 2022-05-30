let numeros = [1, 4, 7, 8, 9]

function operacaoNumerica(acum, atual) {
    return atual + acum
   }
   
   const soma = numeros.reduce(operacaoNumerica, 0)

console.log(soma)