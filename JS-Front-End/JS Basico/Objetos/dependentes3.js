let clientes = [
    {
        nome: 'Fernando',
        idade: 32,
        sexo: 'Masculino',
        cpf: '15799835487',
        email: 'fernandodias@gmail.com',
        fones: ['32012331', '987418742'],
        dependentes: [{ // poderia adicionar por fora, como fizemos nas aulas passadas.
            nome: 'Anderson',
            idade: 15,
            parentesco: 'filho',
            
            datanascimento: '08/03/2007'
        },
        {
        nome:'Enzo',
        idade: 10,
        parentesco: 'filho',
        datanascimento: '13/12/2010'
    }
    ]},
    {
        nome: 'Gabriel Simi',
        idade: 25,
        sexo: 'Masculino',
        cpf: '15799447487',
        email: 'gabrielsimi@gmail.com',
        fones: ['998455875', '98678782'],
        dependentes: [{ // poderia adicionar por fora, como fizemos nas aulas passadas.
            nome: 'Miguel',
            idade: 10,
            parentesco: 'filho',
            
            datanascimento: '08/03/2012'
        },
        {
        nome:'Gabriel Junior',
        idade: 5,
        parentesco: 'filho',
        datanascimento: '13/12/2018'
    }
    ]}
];
// tentei fazer do meu jeito, mas só quebrei a cabeça, não obtive o resultado esperado...
// vamos ver como é 

//let listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]


// Consegui automatizar o processo.
let lista = [];

for(let i =0; i < clientes.length; i++){
    lista.push(...clientes[i].dependentes)
}
console.table(lista)