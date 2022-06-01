class cliente{
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

let sosk = new cliente('pedro', 'pedro@email.com', 11133344487, 15000)

console.log(sosk.cpf)// ainda não esta protegido 

sosk.depositar(3000)
sosk.exibirSaldo()