let cliente = {
    nome: 'Fernando',
    idade: 32,
    sexo: 'Masculino',
    cpf: '15799835487',
    email: 'fernandodias@gmail.com'
}


//Printando os dados do cliente.
console.log(`O ${cliente.nome}, Foi o cliente que mais comprou na nossa loja esse ano, ele tem ${cliente.idade} anos e é do sexo ${cliente.sexo} `)

console.log(`${cliente.nome}, tem ${cliente.idade}, portador do CPF com final ${cliente.cpf.substring(8,11)}`) // usando a funcao nativa substring e selecionar as letras para mostrar.

