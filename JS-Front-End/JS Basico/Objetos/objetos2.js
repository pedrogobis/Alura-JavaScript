// vamos acessar um objeto e acessar as chaves do objeto
let cliente = {
    nome: 'Fernando',
    idade: 32,
    sexo: 'Masculino',
    cpf: '15799835487',
    email: 'fernandodias@gmail.com'
}
// para o desafio, imagino que vai usar uma lista cruzada e percorrer a lista dando a chave de cada.


const chaves = ['nome', 'idade', 'sexo', 'cpf', 'email'];

// Aparentemente eu quase acertei, ele  nao definiu uma variavel com uma lista que recebe os dois, MAS ele usou a lista criada como indice para as chaves no objeto.


// Podemos acessar deste modo também, usando colchetes.
console.log(cliente['cpf'])

//console.log(cliente[chaves[2]])


// agora estamos acessando as informações, sem a interface do objeto. 
chaves.forEach(chave =>{console.log(cliente[chave])})

// Caso tente acessar uma chave que não existe dentro do js, ele apenas retorna o valor indefinido.
console.log(cliente['conta'])
