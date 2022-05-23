// variaveis
let titulo = document.querySelector('h1');
let botaoAdicionar = document.querySelector('#adicionar-paciente');
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
        var imc = peso /  (altura * altura);
        tdimc.textContent = imc.toFixed(2); // toFixed(2) arruma a casa decimal a ser mostrada
    
    }else{
        tdimc.textContent = 'Altura e/ou peso invalidos.'
    }
};

/*
titulo.addEventListener("click", function (){
    alert('olám voce clicou aqui')
}) // atrelando eventos a funcoes
*/

botaoAdicionar.addEventListener('click',function (event){
    event.preventDefault();// evento para nao deixar o botao do form recarregar a pagina, para isso precisou colocar um parametro na funcao sem nome
    
    // Variaveis 

    let formulario = document.querySelector("#form-adiciona")// pelo form da pra pegar todos os dados dele direto, sem ter  que criar uma variavel para cada
    // console.log(formulario.altura.value);// pegando os dados do form usando o . direto 
   
    let nome = formulario.nome.value;
    let peso = formulario.peso.value;
    let altura = formulario.altura.value;
    let gordura = formulario.gordura.value;


    // criando elementos
    let pacientetr = document.createElement('tr')// criou a linha
    
    // criou os as colunas
    let nometd = document.createElement('td')
    let pesotd = document.createElement('td')
    let alturatd = document.createElement('td')
    let gorduratd = document.createElement('td')
    
    // dando o valor pra cada td
    nometd.textContent = nome;
    pesotd.textContent = peso;
    alturatd.textContent = altura;
    gorduratd.textContent = gordura;

    // adicionando os dados como filhos
    pacientetr.appendChild(nometd);
    pacientetr.appendChild(pesotd);
    pacientetr.appendChild(alturatd);
    pacientetr.appendChild(gorduratd);

    // selecionando a tabela que vai receber os dados
    let tabela = document.querySelector("#tabela-pacientes")

    tabela.appendChild(pacientetr);


});


