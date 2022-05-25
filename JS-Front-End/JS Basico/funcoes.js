let numeros = [1, 5, 9, 110, 56, 77, 87, 13]


// funcao para pegar o mair
// aqui usamos o reduce, cujo qual preciso estudar, em uma função anonima pegando dois elementos e comparando 
// reduce segundo os documentos, é melhor para todos os casos, até quando tem mais informaçoes no vetor.
let max = numeros.reduce((a,b)=>{
    return Math.max(a,b)
}, -Infinity)


let max2 = Math.max(...numeros); // funciona mas não é o ideal.

console.log(max)
console.log(max2)

/*
function mostraNumeros(array){
    array.forEach(numero => {
        console.log(`menor numero do array é ${Math.min(array[numero])}`)
        console.log(`maior numero do array é ${Math.max(array)}`)
        //
        
    });
}

function numeroAleatorio(array){
    return array[Math.floor(Math.random() * array.length)];
}

numeroAleatorio(numeros)

//mostraNumeros(numeros)
*/