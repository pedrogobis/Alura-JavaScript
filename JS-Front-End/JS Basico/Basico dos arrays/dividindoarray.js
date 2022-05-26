let alunos = ['JOAO', 'MARIA', 'FERNANDO','CARLOS', 'MARCOS', 'JULIANA', 'FERNANDA', 'CLAUDIA', 'PEDRO', 'ENZO','LUIZ', 'MARTA', 'GABRIEL', 'HENRIQUE', 'CAIO', 'ISABELA', 'RENATA'];

let sala1 = alunos.slice(0,alunos.length/2);
let sala2 = alunos.slice(alunos.length/2)

console.log(alunos.length)
console.log(`alunos da sala 1: ${sala1}`)
console.log(`alunos da sala 2: ${sala2}`)