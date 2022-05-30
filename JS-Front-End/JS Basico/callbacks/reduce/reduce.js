const salaJS =[9, 10, 7, 4, 8 , 7 ,9 ,10 ,5, 7];
const salaPython =[6,5,8,9,5,6];
const salaJava = [7, 3.5, 8, 9.5];
const notas =[10, 6.7, 8, 7]

// funcao calculando a media
function mediaSala(notasDaSala){
    // Reduce reduz toda o array em um unico valor, ele é um for que passa por toda o array 
    // precisa ser chamado em uma variavel também
    // precisa ter dois parametros sempre, o acumulador e o atual.
    // o 0 pode ser qualquer valor, ele é tipo uma let definida da soma fora.
    // Nome acumulador e atual, voce pode colocar qualquer nome que se ajuste ao que está fazendo.
    // O reduce recebe 2 PARAMETROS então signfica que é tipo assim reduce(pareametro1(parametro2))
    //  Primeiro parametro recebe uma funcao e o segundo um numero.
    //   Geralmente passamos a função anonima dentro do reduce, mas podemos criar uma função fora normal e depois colocar dentro do reduce.
    //   const somaDasNotas = notasDaSala.reduce(aquiEntrariaUmaFuncao,0 )
    // 
    // Então em suma o reduce serve para reduzir um array, SOMANDO todos os valores dentro dele.
    // 
    // 
    
    const somaDasNotas = notasDaSala.reduce((acumulador,atual) => atual+ acumulador,0 )
    return somaDasNotas/notasDaSala.length
    
}
/*
console.log(`A media da sala de Js foi ${mediaSala(salaJS)}`)
console.log(`A media da sala de Java foi ${mediaSala(salaJava)}`)
console.log(`A media da sala de Python foi ${mediaSala(salaPython)}`)
console.log(`A media da Marta foi ${mediaSala(notas)}`)
*/
const notas2 = [10, 6.7, 8, 7];
// reduce passa pelo loop e retorna a soma, então o resultado vai ser um numero só, depois disso fazemos a divisão pelo tamanho
const media = notas2.reduce((guarda, atual)=> atual + guarda, 0)/notas.length 

console.log(media)


