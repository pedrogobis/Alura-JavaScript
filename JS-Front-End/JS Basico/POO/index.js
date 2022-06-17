import User from "./user.js";
import Admin from "./Admin.js";
import Docente from "./Docentes.js";

const novoUser = new User('Paulo', 'paulo@gmail.com', '2001-01-01');
//console.log(novoUser.exibirInfos())

const novoAdmin = new Admin('Mauricio', 'mauricio@sosk.com','1997-25-02')

const novoProfessor = new Docente('Maria Fernanda', 'mf@sosk.com', '1998-13-05')

novoAdmin.nome = 'Arlequina da Silva'
console.log(novoAdmin.nome)
console.log(novoAdmin.sobrenome)
console.log(novoAdmin.exibirInfos())
//console.log(novoProfessor.exibirInfos())

//console.log(novoUser)