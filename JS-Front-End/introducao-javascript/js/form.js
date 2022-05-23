let botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click',function (event){
    event.preventDefault();// evento para nao deixar o botao do form recarregar a pagina, para isso precisou colocar um parametro na funcao sem nome
    
    // Variaveis 

    let formulario = document.querySelector("#form-adiciona")// pelo form da pra pegar todos os dados dele direto, sem ter  que criar uma variavel para cada
    // console.log(formulario.altura.value);// pegando os dados do form usando o . direto 
    // extraindo dados do paciente do form
    let paciente = obtemPacienteDoFormulario(formulario);
    
    // criando elementos tr e td do paciente 
    /*let pacientetr = document.createElement('tr')// criou a linha
    
    // criou os as colunas
    let nomeTd = document.createElement('td')
    let pesoTd = document.createElement('td')
    let alturaTd = document.createElement('td')
    let gorduraTd = document.createElement('td')
    let imcTd = document.createElement('td')
    
    // dando o valor pra cada td
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculaImc(peso, altura);
    
    // adicionando os dados como filhos, na tabela
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
    */
   // selecionando a tabela que vai receber os dados
   
   // Cria tr
   let pacienteTr = montaTr(paciente);
   
    
    let erros = validaPaciente(paciente); // vamos fazer uma validação com base em erro, a valida paciente retorna ou string vazia se deu certo ou uma string com a mensagem de erro que então é mais que 0 caracteres
    console.log(erros)

    if(erros.length > 0){ // aqui ela fez uma verificaão da quantidade de caracteres na variavel.
       //vamos extrair para uma funcao 
       exibeMensagensDeErro(erros);

       return; // com esse return ele não vai terminar a funcao
   } 

    let tabela = document.querySelector("#tabela-pacientes")

    tabela.appendChild(pacienteTr);


    formulario.reset()// essa funcao eu não conhecia, aparentemente serve apenas para formularios.
    document.querySelector("#mensagens-erro").innerHTML ='';
});


function obtemPacienteDoFormulario(formulario){
    
    let paciente = {
        nome: formulario.nome.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gordura: formulario.gordura.value,
        imc: calculaImc(formulario.peso.value, formulario.altura.value) // chamou a funcao aqui direto
        
    }

    return paciente; 

}

function montaTr(paciente){
    let pacienteTr = document.createElement('tr');
    pacienteTr.classList.add("paciente");

        
    // adicionando os dados como filhos, na tabela
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr
}

function montaTd(dado, classe){ // Dado vai ser o paciente.nome/peso/altura...
    let td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

// Validando paciente.

function validaPaciente(paciente){
    // para retornar erros vamos criar um array e depois vamos verificar pore ele.

    let erros = [];
    if(paciente.nome.length == 0) erros.push('Nome invalido!');
    if(!validaPeso(paciente.peso)) erros.push("Peso é invalido!");// if vazio é feio, mas else não, então alteramos a logica, if simples não precisa colocar chaves.     
    if(!validaAltura(paciente.altura)) erros.push('Altura é invalida!');   
    if(paciente.gordura.length == 0) erros.push('Gordura invalida!');
    if(paciente.peso.length == 0) erros.push('Peso não pode estar vazio');
    if(paciente.altura.length == 0) erros.push('Altura não pode estar vazia');

    return erros;
}



function exibeMensagensDeErro(erros){
    let mensagenserro = document.querySelector("#mensagens-erro");
    mensagenserro.innerHTML = ''; // limpando as ul 

    erros.forEach(function(erro) {
        let lierro = document.createElement('li');
        lierro.textContent = erro;
        mensagenserro.appendChild(lierro);
    });


    /*
    Quase né kkkk
    for(erro in erros){
        lierro.textContent = erros[erro];
        mensagenserro.appendChild(lierro)
    }*/


    
}
