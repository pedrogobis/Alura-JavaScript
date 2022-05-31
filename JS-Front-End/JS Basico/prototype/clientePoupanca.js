/// aproveitar o cliente que ja existe e apartir dele um novo tipo de cliente para contas poupanca 

// vamos la usar o extends e import
function criaCliente(nome, cpf, email, saldo){
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor){
        this.saldo += valor
    }
}

function clientePoupanca(nome, cpf, email, saldo, saldoPoup){
   criaCliente.call(this,nome, cpf, email, saldo) // call é diferente do curso do dio
   this.saldoPoup = saldoPoup;
   
}

let otavio = new clientePoupanca('Otavio', 32213345589, 'otavio.rodrigues@gmail.com', 50, 3660)

// usou as informações do criacliente, e adicionou o extra do pouop

console.log(otavio)

// vamos adicionar funcao dentro da funcao já criada

clientePoupanca.prototype.depositaPoup = function(valor){
    this.saldoPoup += valor
}

otavio.depositaPoup(3000)
console.log(otavio.saldoPoup)
