let pacietes = document.querySelectorAll('.paciente');

pacietes.forEach(function(paciente){
    paciente.addEventListener('dblclick', ()=>{
        console.log('fui clicado')
    }
    )
})