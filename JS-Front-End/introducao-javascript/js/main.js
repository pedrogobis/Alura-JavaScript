let titulo = document.querySelector('h1');
titulo.textContent = 'ApariNutri';

var paciente = document.querySelector('#primeriopass');
var tdpeso = paciente.querySelector('.info-peso');
var peso = tdpeso.textContent;
var tdaltura = paciente.querySelector('.info-altura')
var altura = tdaltura.textContent;
var tdimc = paciente.querySelector('.info-imc') 
var pesoValido = true;
var alturaValida = true;


if(peso <= 0 || peso >= 1000){
    console.log('peso invalido fera')
    pesoValido = false;
    tdimc.textContent = 'Peso invalido'
}
if(altura <= 0 || altura >= 3.00){
    console.log('altura invalida fera')
    alturaValida = false;
    tdimc.textContent = 'Altura invalida'
}

if(alturaValida && pesoValido){
    var imc = peso /  (altura * altura);
    tdimc.textContent = imc;

}else{
    tdimc.textContent = 'Altura e/ou peso invalidos.'
}




console.log(paciente)
console.log(tdpeso)
console.log(peso) 
console.log(altura) 
console.log(imc) 