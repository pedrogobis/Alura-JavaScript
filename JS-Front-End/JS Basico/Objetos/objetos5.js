// Adicionar dependentes para um dos clientes cadastrados, como nome, idade e parentesco.

let cliente = {
    nome: 'Fernando',
    idade: 32,
    sexo: 'Masculino',
    cpf: '15799835487',
    email: 'fernandodias@gmail.com',
    fones: ['32012331', '987418742'],
    dependentes: { // poderia adicionar por fora, como fizemos nas aulas passadas.
        nome: 'Anderson',
        idade: 15,
        parentesco: 'filho'
    } 
    
}

console.log(cliente.dependentes)
cliente.dependentes.datanascimento = '08/03/2015' // adicionando itens dentro do objeto dentro de outro objeto


console.log(cliente.dependentes)