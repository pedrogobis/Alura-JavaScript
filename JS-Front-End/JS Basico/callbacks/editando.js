let nomes = ['Caio', 'PEDRO', 'marTa', 'LUciaNA'];


console.log(nomes)


/* funciona com for
for(let i=0; i < nomes.length; i++){
    nomes[i] = nomes[i].toLocaleUpperCase()
    console.log(nomes[i])
}
*/
//usando map
let nomesAtualizados = nomes.map(nome => nome.toLocaleUpperCase())

console.log(nomesAtualizados)

//console.log(nomesAtualizados)