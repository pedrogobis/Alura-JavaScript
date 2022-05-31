// extrair de uma lista de clientes apenas as informações de dependentes e montar uma lista unica para analise de outras departamentos do banco.

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


let dependentesDeClientes = cliente.dependentes;// retornou um array com clientes
//console.log(dependentesDeClientes[1].nome)


function dependentesDoCliente(arrayDependentes){
    let lista = [];
    arrayDependentes.forEach(dependente => {
        lista.push(dependente.nome)
        
        
    });
    console.log(`Este cliente tem estes dependentes: ${lista}.`)
}

dependentesDoCliente(dependentesDeClientes)
/*
for(let i=0; i> dependentesDeClientes.length; i++){
    console.log(dependentesDeClientes[i].nome)
}
*/

/// Fiz uma função pra pegar a lista dos dependentes, e eles vao usar um operador nativo pra fazer isso [emoji do palhaço]