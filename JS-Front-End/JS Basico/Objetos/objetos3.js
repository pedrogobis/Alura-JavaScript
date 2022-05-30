// Adicionar informações que ainda estão fazendo falta como telefone e valor.
let cliente = {
    nome: 'Fernando',
    idade: 32,
    sexo: 'Masculino',
    cpf: '15799835487',
    email: 'fernandodias@gmail.com'
}

// adicionando uma chave e valor no objeto.
// lembra praticamente criar uma variavel. 
cliente.telefone='3211-2341';

console.log(cliente)

// alteramos o valor da chave criada
cliente.telefone='3281-2341';
cliente.sexo = 'Feminino' 

console.log(cliente)

// deletando uma chave e valor

delete cliente.sexo

console.log(cliente)