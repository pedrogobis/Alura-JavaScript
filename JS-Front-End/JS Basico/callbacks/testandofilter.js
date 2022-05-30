
let carros = ['fox', 'uno', 'vectra', 'argo'];
let valoresCarros = [41000, 33300, 14500, 34000]

let carrosCaros = carros.filter((carro, i) => valoresCarros[i] < 25000)

console.log(`Os carros abaixo de R$25000,00 são ${carrosCaros}`)