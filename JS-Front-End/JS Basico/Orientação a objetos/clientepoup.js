class Cliente{
    constructor(nome, email, cpf, saldo){
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;

    }

    depositar(valor){
        this.saldo += valor;
    }
    exibirSaldo(){
        console.log(`Seu saldo atual é R$: ${this.saldo}`)
    }
}

class ClientePoupanca extends Cliente{
    constructor(nome, email, cpf, saldo, saldoPoup){
        super(nome, email, cpf, saldo)
        this.saldoPoup = saldoPoup
    }
    depositarPoupanca(valor){
        this.saldoPoup += valor
    }

}

let sosk = new ClientePoupanca('pedro', 'pedro@email.com', 11133344487, 350, 15000)

sosk.depositar(250)
sosk.depositarPoupanca(2500)

console.log(sosk)
//console.log(sosk.saldo)
//console.log(sosk.saldoPoup)