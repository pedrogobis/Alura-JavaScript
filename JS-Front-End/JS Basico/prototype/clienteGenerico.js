// Gerar uma funcao que permita a criação de novos clientes apartir de um modelo

function criaCliente(nome, cpf, email, saldo){
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor){
        this.saldo += valor
    }
}

let cliente01 = new criaCliente('Marcos', '11133322255', 'marquinhosleite@gmail.com', 300)

console.log(cliente01)

