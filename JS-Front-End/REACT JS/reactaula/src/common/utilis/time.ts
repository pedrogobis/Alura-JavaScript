export function tempoParaSegundos(tempo:string){
    // definindo valor padrão caso seja nulo o valor dividido
    const [horas='0', minutos='0', segundos='0'] = tempo.split(":")
    
    // vamos converter os valores em segundos.
    const horasEmSegundos = Number(horas) * 3600;
    const minutosEmSegundos = Number(minutos) * 60;

    // funcao esta retornando uma soma de todos os segundos.
    return horasEmSegundos + minutosEmSegundos + Number(segundos)
}

