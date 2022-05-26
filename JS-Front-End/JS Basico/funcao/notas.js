let notas = [10, 9, 7]
let notas2 = [10, 6.5, 8, 7.5]

let somaDasNotas = 0

for(let i =0; i< notas2.length;i++){
    somaDasNotas += notas2[i]
}

let media = somaDasNotas/ notas2.length;

console.log(somaDasNotas)
console.log(media)