const user = {
    nome: 'Sosk',
    email: 'pedro@gmail.com',
    nascimento: '2022/01/01',
    role: 'estudante',
    ativo: true,
    exibirInfo: function(){
        console.log(this.nome, this.email, this.nascimento)
    }
}

const admin = {
    nome: 'Marta',
    email: 'martinha@gmail.com',
    nascimento: '2022/01/01',
    role: 'admin',
    criarCurso: function() {
        console.log('cuso criado')
    }
}

Object.setPrototypeOf (admin, user) // vai passar funcoes de um para outro, herdar, primeiro parametro é quem vai receber, segundo parammetro é quem vai dar
admin.criarCurso()
admin.exibirInfo()

let nome = 'fernanda'
nome.toUpperCase()

console.log(nome.bold())