// acessar a lsta de telefone das pessoas cadastradas no sistema e imprimila, verificando se há mais de um numero em algum cadastro.

let cliente = {
    nome: 'Fernando',
    idade: 32,
    sexo: 'Masculino',
    cpf: '15799835487',
    email: 'fernandodias@gmail.com',
    fones: ['32012331', '987418742'] // array com varios telefones.
}

//console.log(cliente.fones) // já estaria certo, mas né não foi o exemplo da aula.

cliente.fones.forEach(telefone => {
    //console.log(cliente.fones[telefone]) não precisa definir o caminho inteiro.
    console.log(telefone)
    
});