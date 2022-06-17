import User from "./user.js";

class Docente extends User{
    constructor(nome, email, nascimento, role = 'admin', ativo = true){
        super(nome, email, nascimento, role, ativo)
 
    }
    aprovaEstudantes(estudante, curso){
        return `estudante ${estudante}, aprovado no curso de ${curso} com sucesso`
    }
}

const novoprofessor = new Docente('Fernanda', 'fernadna@outlook.com', '1990-30-10')

console.log(novoprofessor)
console.log(novoprofessor.exibirInfos())
console.log(novoprofessor.aprovaEstudantes('Carlos', 'geografia'))