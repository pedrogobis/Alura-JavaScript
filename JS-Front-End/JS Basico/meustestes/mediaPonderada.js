/*
let a = 5 //parseFloat(lines.shift())
let b = 6 //parseFloat(lines.shift())
let c = 7 //parseFloat(lines.shift())
let d = 8 //parseFloat(lines.shift())


let diferenca = (a * b - c * d);

console.log('DIFERENCA = '+diferenca)
//let media = ((a*2)+(b*3)+(c*5))/(2+3+5)
//console.log('MEDIA = '+media.toFixed(1))
*/
/*
let funcionario = 25//parseInt(lines.shift());
let valorHora = 100//parseInt(lines.shift());
let horaTrabalhada = 5.50659103.toFixed(2)//parseFloat(lines.shift());


console.log('NUMBER = '+funcionario);
console.log('SALARY = U$ '+(valorHora * horaTrabalhada).toFixed(2))
*/
// erro nesse exercicio foi por estar usando o to fixed e o tofixed retorna string e nao variavel 
/*
let nome = 'JOAO' //String(lines.shift());
let salarioFixo =500.00//parseFloat(lines.shift()).toFixed(2);
let vendasEfetuadas= 1230.30//parseFloat(lines.shift().foFixed(2));

let calculaMargem = vendasEfetuadas*0.15  // porentagem é 0.valor x (15%)

/*
let somaSoma = parseFloat(salarioFixo+ (calculaMargem)).toFixed(2)
let soma2 = (salarioFixo + calculaMargem).toFixed(2) 
//var totalReceber = parseFloat(salarioFixo + (vendasMes * 0.15)).toFixed(2)


let soma = parseFloat(salarioFixo + calculaMargem).toFixed(2);
console.log(typeof soma)
console.log(soma)
*/


let lista3 = [];
let lista4 =[]

for(let i=0; i <= 1; i++){
    lista3.push(parseInt(i))
    lista4.push(parseInt(i))
    
}
for(let i=0; i < 1; i++){
    lista3.push(parseFloat(i))
    lista4.push(parseFloat(i))
    
}



console.log(lista3, lista4)






let lista1 = [13, 2, 15.30 ];
let lista2 = [161, 4, 5.20];

let listajunta = [lista1, lista2];
let soma = 0;
let guardaqtd = 0;


console.log(typeof listajunta[1][2])
for(let i = 0; i< listajunta.length; i++ ){
    guardaqtd = listajunta[i][1]
    
    soma += parseFloat(guardaqtd*parseFloat(listajunta[i][2]))
    
    
}
soma = soma.toFixed(2)
console.log('VALOR A PAGAR: R$' +soma);


