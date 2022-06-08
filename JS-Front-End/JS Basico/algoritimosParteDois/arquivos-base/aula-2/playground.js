function dorme(milissegundos){
    return new Promise(resolve => setTimeout(resolve, milissegundos));// promisse recursiva chamando ele mesmo e mais o tempo
}
/*
Essa funcao n vai parar nunca
async function incrementaNumero(numero){// funcao assincrona
    console.log(numero) // chama o numero
    await dorme(2000) /// aguarda essa funcao ser executada durante o tempo passado
    return incrementaNumero(numero + 1) // ai retorna o numero mais 1
  }
  
  incrementaNumero(1)
  */

//

// mesma funcao, porem com um if de verificação dando um parametro pra ela parar
async function incrementaNumero(numero){
    console.log(numero)
    await dorme(2000)
  
    if (numero === 10) {
            return 'finalizou'
    }
    return incrementaNumero(numero + 1)
  }
  
  incrementaNumero(1)