let pacietes = document.querySelectorAll('table');


// Do jeito que está aqui, apenas os itens já adicionados seriam removidos, itens novos adicionados, não seriam removidos.
// mas por que?
// por que o addeventlistner está apenas no filho e nao no pai da tabela, quando está no pai da tabela, independente de itens novos ou antigos vao ser alterados.
pacietes.forEach(function(paciente){
    paciente.addEventListener('dblclick', function(event){ // arrow function n funcionou?
        let alvo = event.target;
        let paiDoAlvo = alvo.parentNode; // TR  
        paiDoAlvo.classList.add('fadeOut'); // para adicionar classe não precisa do ponto

        setTimeout(() => { // arrow funciton para esperar
            paiDoAlvo.remove();
            
        }, 500); //aceita o tempo em milesegundos.


        //this.remove(); por estar pegando o pai, nao poderemos usar o this, pois se não iria apagara  tabela inteira
    });
});