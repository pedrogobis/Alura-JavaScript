// percorrer um objeto e extrair informações basicas do cliente em um formato mais legivel e de forma automatizada para fornecer a outros departamentos do banco 

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

// como vamos percorrer um objeto, sem saber os indices

// for in vai é uma funcao do objeto

let = relatorio = '';

for(let info in cliente){
    // info está sendo a chave de cada objeto
    // vamos fazer verificacoes
    // se os tipos forem objeto ou functions ele ignora, se não ele mostra na tela.
    if(typeof cliente[info]==="object" || typeof cliente[info] === "function"){
       continue // note que o array de telefones ele pulou, pois interpretou como object
    } relatorio += `
        ${info} = ${cliente[info]}  
        `// acesando a chave como fizemos pra procurar.
}

console.log(relatorio)