// Adicionar a propriedade que permita ações ao cliente, clientes vao poder fazer operações bancarias, ou seja vão ter funções.

// como tinha falado tava chegando nisso kk

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


console.log(cliente.saldo)
cliente.depositar(130)
// depositei dinheiro, mesma função da aula do front end.

console.log(cliente.saldo)
cliente.sacar(50)
console.log(cliente.saldo)
cliente.sacar(500)
console.log(cliente.saldo)

const Silvia = Object.create(cliente)

//Silvia.nome = 'Silvia Souza';
Silvia.idade = 30;
Silvia.sexo = 'Feminino';
Silvia.email = 'silviasouza2000@gmail.com'
Silvia.fones = ['987418742','32012331']

// se não altera dados, não mostra nada da silvia pois faz referencia aos daods do pai, então como mudamos algumas coisas, mostra só as informações alteradas
console.log(Silvia.dependentes)
