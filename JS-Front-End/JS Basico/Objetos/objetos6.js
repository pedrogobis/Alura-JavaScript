// Verificar a melhor forma de agregar a informação de um novo dependente ao objeto cliente.

// lista de objetos?
// yes

let cliente = {
    nome: 'Fernando',
    idade: 32,
    sexo: 'Masculino',
    cpf: '15799835487',
    email: 'fernandodias@gmail.com',
    fones: ['32012331', '987418742'],
    dependentes: [{ // poderia adicionar por fora, como fizemos nas aulas passadas.
        nome: 'Anderson',
        idade: 15,
        parentesco: 'filho',
        datanascimento: '08/03/2007'
    }]
    
}

// como adicionar na lista mesmo? xo tentar o array de telefone 
// não cliente.fones = '23391123'
// Para adicionar em listas usamos o metodo do array, ou seja o push.


cliente.fones.push('32332110')
// funcionou com telefones, agora bora no objeto

cliente.dependentes.push({
    nome:'Enzo',
    idade: 10,
    parentesco: 'filho',
    datanascimento: '13/12/2010'
})
// funcionou perfect


//console.log(cliente.dependentes[0].datanascimento)

// logo vamos partir para construtores de classes

/*
    Tentei fazer meu proprio filter mas pelo visto deu erro na comparação, vamos ver como vai ser na aula. 

let brindeParaMenores = cliente.dependentes.filter((filho, indice)=> dependentes[indice].idade >= 15)

Corrigindo então:
let brindeParaMenores = cliente.dependentes.filter(filho => filho.idade >= 15)

console.log(brindeParaMenores)
*/
let filhoNovo = cliente.dependentes.filter(dependente => dependente.datanascimento === '13/12/2010' ) // é pra retornar apenas um array com apenas um filho.

// retornou apenas um item no array, porém é um objeto, então precisamos informar o indice do objeto, para ai ter acesso a chave filho.
//console.log(filhoNovo[0].idade)

let brindeParaMenores = cliente.dependentes.filter(filho => filho.idade <= 12)
// retornou um array com o objeto, que confere com a verificação
//console.log(brindeParaMenores[0].idade) // acessando o indice, e acessando a cheve do objeto.

console.log(`O filho ${brindeParaMenores[0].nome}, tem direito ao brinde, pois ele tem a idade de ${brindeParaMenores[0].idade}, e ela é menor que 12`)

