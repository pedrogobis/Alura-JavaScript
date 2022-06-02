// area = n.raio2


let raio = 100.64
let pi = 3.14159
let area = pi * raio ** 2

console.log(`A = ${(pi * raio ** 2).toFixed(4)}`)
console.log('A = ' + (pi * raio ** 2).toFixed(4))

let A = 10
let B = 9
let X = A + B

console.log('X = ' + X)

let a = 30;
let b = 10;
let soma = a + b;

console.log('SOMA = ' +soma)
/*
Boa tarde, João.

Na parte da area, teria que ser assim. area = 3.14158* raio**2.

Com JavaScript, ficou desse jeito.

raio = parseFloat(lines[0]) area = 3.14159 * raio**2

console.log("A=" + (area.toFixed(4)))
*/
let artur =  10//parseInt(lines.shift());
let bruna =  20//parseInt(lines.shift());

console.log(`SOMA = `+ (artur+bruna))

let n1 = 10.0//parseFloat(lines.shift())
let n2 = 10.00//parseFloat(lines.shift())

let media = ((n1*3.5)+(n2*7.5))/(3.5+7.5)
console.log('MEDIA = '+media.toFixed(5))
