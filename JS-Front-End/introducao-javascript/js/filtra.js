let entradaFiltro = document.querySelector('#filtrar-tabela');

// esta escutando cada palavra que voce digita.
entradaFiltro.addEventListener('input',function(){ 
    console.log(this.value)

    let pacientes = document.querySelectorAll('.paciente');
    if( this.value.length > 0){// verificacao, se digitou algo acontece isso
        for(let i = 0; i < pacientes.length; i++){ // vai percorrer a tabela
            let paciente = pacientes[i];
            let tdNome = paciente.querySelector('.info-nome');
            let nome = tdNome.textContent;
            // usando pela primeira vez o regex em um projeto.
            // pra usar o regex, usamos uma variavel com new RegExp(ondevaiprocurar, regex)
            let expressao = new RegExp(this.value, "i") // i serve para deixar o campo case insensitive.
            // verificação com o regex
            // vai procurar tudo que estiverdentro do nome
            if(!expressao.test(nome)){
                paciente.classList.add('invisivel')// adiciona a classe que esconde o conteudo
            }else{
                paciente.classList.remove('invisivel')
            }

    }
    }else{
        for(let i = 0; i < pacientes.length; i++){ // vai percorrer a tabela
            let paciente = pacientes[i];
            paciente.classList.remove('invisivel')
    }
    
}
})
