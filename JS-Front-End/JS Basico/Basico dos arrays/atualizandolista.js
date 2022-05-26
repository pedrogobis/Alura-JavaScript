let alunos = ['JOAO', 'MARIA', 'FERNANDO','CARLOS', 'MARCOS', 'JULIANA', 'FERNANDA', 'CLAUDIA', 'PEDRO', 'ENZO','LUIZ', 'MARTA', 'GABRIEL', 'HENRIQUE', 'CAIO', 'ISABELA', 'RENATA'];

console.log(alunos.length)
console.log(`Alunos atuais ${alunos}`)
alunos.splice(14,2,'RODRIGO','ANA BEATRIZ')
             // COMEÇA NO INDICIE 14, DOIS ITENS, E INSERE X   
             // splice altera a array original.

// Podemos inserir itens no indece desejado se não colocarmos nda a ser substituido. 
alunos.splice(3,0, 'MATHEUS')
//alunos.sort()
console.log(alunos.length)
console.log(`Alunos atuais ${alunos}`)
alunos.push('PAULO','MIGUEL')
console.log(alunos)