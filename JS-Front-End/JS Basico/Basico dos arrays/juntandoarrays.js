let salaDePython =['ENZO','LUIZ',
'MARTA',       'GABRIEL',
'HENRIQUE',    'RODRIGO',
'ANA BEATRIZ', 'RENATA',
'PAULO',       'MIGUEL'];
let salaDeJs = ['JOAO', 'MARIA',
'FERNANDO',    'MATHEUS',
'CARLOS',      'MARCOS',
'JULIANA',     'FERNANDA',
'CLAUDIA',     'PEDRO']

// concat n altera a array original, então para isso ela precisa ser salva em uma nova variavel.
let salasUnificadas = salaDeJs.concat(salaDePython);

salasUnificadas.sort()

console.log(salasUnificadas, salasUnificadas.length)

/*
Exemplo na documentação da aula.

const arrayOriginal = [50, 60, 70]
const arrayConcat = arrayOriginal.concat([80, [90, 100]])

console.log(arrayConcat)
console.log(arrayOriginal)
*/