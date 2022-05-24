let btnAdicionarPaciente = document.querySelector("#buscar-paciente");

btnAdicionarPaciente.addEventListener('click',()=>{
    console.log('clicou em buscar')
    
    // Vamos usar a api e pegar os dados e adicionar na tabela
    let xhr = new XMLHttpRequest(); // xhr faz requisições em sites
    let erroAjax = document.querySelector('#erro-ajax');
    // Configurando o xhr
    // setamos que queremos pegar os dados, do link.
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); 
    
    // escuta se a pagina abriu, vai pegar os dados e retornar de alguma maneira
    xhr.addEventListener('load',()=>{
        if(xhr.status == 200){
            // vai receber a resposta do servidor api
            let resposta = xhr.responseText;
            // a resposta vai ser um texto json no formato de um objeto
            
    
            // aqui estamos pegando essa resposta em formato de texto, e convertendo ela para um objeto
            var pacientes = JSON.parse(resposta)
    
            // adicionapacientenatabela recebe um por vez, então vamos usar o foreach
            pacientes.forEach((paciente) => {
                adicionaPacienteNaTabela(paciente)
                
            });

        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove('invisivel');
            erroAjax.classList.add('mensagens-erro');
        }

    })
    
    xhr.send()

})

/*
Esse metodo que aprendemos é o que se chama de AJAX

Fazer uma requisição com javascript de modo assincrono 
assincrono porque não para o fluxo do nosso javascrip, ele continua executando o js, sem parar

*/
