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
   console.log(pacienteTr)
   

    let tabela = document.querySelector("#tabela-pacientes")

    tabela.appendChild(pacienteTr);

    formulario.reset()// essa funcao eu não conhecia, aparentemente serve apenas para formularios.

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