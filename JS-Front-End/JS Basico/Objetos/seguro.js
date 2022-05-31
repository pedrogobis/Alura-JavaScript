// Percorrer um objeto, verificar se existe a chave 'dependentes e caso exista, enviar uma mensagem de oferta de seguro.

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
    },{
        nome:'Enzo',
        idade: 10,
        parentesco: 'filho',
        datanascimento: '13/12/2010'
    }
],

saldo:100,
depositar: function(valor){
    this.saldo += valor
},// fiz a função a seguir. kkk
sacar: function(valor){
    if(valor > this.saldo){
        console.log('voce não tem saldo suficiente para este saque')
        return
    } return this.saldo = this.saldo - valor
}
    
}

// retornou um array com todas as chaves do objeto cliente
// meio obvio se levar em consideração o nome de como usamos...

const propsClientes = Object.keys(cliente);
const valoresdosClientes = Object.values(cliente.dependentes); // retorna os valores de tudo, até os objetos dentro do arrays.
const tudoListasClientes = Object.entries(cliente); // retorna um array para cada chave e valor
//console.log(propsClientes)

function  oferecerSeguro(obj){
    // usamos o includes no array criado com object keys na variavel acima
    if(propsClientes.includes("dependentes") === true){
        console.log(`Vimos que o senhor tem dependentes, que tal fazer um segurozinho pra cada um ein? ${obj.nome}`)
    } return 'Dia ta lindo né?'
}

//console.log(oferecerSeguro(cliente))
console.log(valoresdosClientes);
/*
Meu jeito deu certo, porém na aula vai ser introduzido um novo jeito.

let seguro = '';
for(let info in cliente){
    if(info === 'dependentes'){
        console.log(`Vimos que o senhor tem dependentes, que tal fazer um segurozinho pra cada um ein?`)
    } continue
}
*/