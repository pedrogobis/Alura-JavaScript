const arrayNums = [1,2,3,4]

function multiplicaPorDez(num){
    return num *10;
}
// o map faz automaticamente um for num em numeros e coloca cada valor dentro do parametro

const novoValorArrays = arrayNums.map(multiplicaPorDez)

console.log(novoValorArrays)