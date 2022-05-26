let notas2 = [10, 6.5, 8, 7.5]
let somaDasNotas = 0


// foreach, inclui uma arrow funciton, só que o elemento não fica dentro de parentes, estrutura mais simples que a propria arrow function.
notas2.forEach(nota =>{
    somaDasNotas += nota
})

let media = somaDasNotas/ notas2.length;
console.log(somaDasNotas)
console.log(media)