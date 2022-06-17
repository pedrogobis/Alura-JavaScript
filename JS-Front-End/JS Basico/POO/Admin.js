import User from "./user.js";

class Admin extends User{
    constructor(nome, email, nascimento, role = 'admin', ativo = true){
        super(nome, email, nascimento, role, ativo)
        this.cursos = [];
        // ae caraiow. ta recebendo os cursos criados. 
    }
    criarCurso(curso, vagas = '300'){
        this.cursos.push({[curso]: vagas})
        console.log(`Curso de ${curso}, Criado com sucesso`)
    }
}

const adminNovo = new Admin('Marcio', 'marcio@hotmail.com', '1970-25-10')

// usar o terminal e nao o output
console.log(adminNovo)
console.log(adminNovo.role)
console.log(adminNovo.exibirInfos())

console.log(adminNovo.criarCurso('marketing'))
console.log(adminNovo.criarCurso('empreendedorismo', '40'))

console.log(adminNovo)