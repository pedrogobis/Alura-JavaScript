// variaveis
let titulo = document.querySelector('h1');

let pacientes = document.querySelectorAll('.paciente');


for(var i= 0; i< pacientes.length;i++){
    // corrigiu o codigo feito para 1 item apenas
    // criou a variavel paciente que vai ser o indice no array pacientes
    var paciente = pacientes[i]
    
    var tdpeso = paciente.querySelector('.info-peso');
    var peso = tdpeso.textContent;
    var tdaltura = paciente.querySelector('.info-altura')
    var altura = tdaltura.textContent;
    var tdimc = paciente.querySelector('.info-imc') 
    var pesoValido = true;
    var alturaValida = true;

    // Verificação dos dados.
    if(peso <= 0 || peso >= 400){
        console.log('peso invalido fera')
        pesoValido = false;
        tdimc.textContent = 'Peso invalido'
        paciente.classList.add('paciente-invalido')
        //Não é correto alterar elementos especificos dentro do js, js devemos apenas alterar as classes, então o correto é adicionar uma classe dentro do css, e então no js alterar a classe.
        // Tudo que é estilo fica no css
        // tudo que é interação fica no JS.
        //paciente.style.backgroundColor = 'red'; // styles com duas palavras, usar o padrão camelcase para funcionar.
    }
    if(altura <= 0 || altura >= 3.00){
        console.log('altura invalida fera')
        alturaValida = false;
        tdimc.textContent = 'Altura invalida'
        paciente.classList.add('paciente-invalido')
        //paciente.style.backgroundColor = 'red';
    }
    
    if(alturaValida && pesoValido){
        var imc = calculaImc(peso, altura)
        tdimc.textContent = imc; // toFixed(2) arruma a casa decimal a ser mostrada
    
    }else{
        tdimc.textContent = 'Altura e/ou peso invalidos.'
    }
};

/*
titulo.addEventListener("click", function (){
    alert('olám voce clicou aqui')
}) // atrelando eventos a funcoes
*/

function calculaImc(peso, altura){
    let imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);

}