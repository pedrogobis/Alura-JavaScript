function promessa(bool) {
    const x = bool;
    return new Promise((resolve, reject) => {
      if (!x) {
        reject(new Error("falha na promessa"));
      }
      resolve("sucesso na promessa");
    });
   }
   
   // funcao para o que fazer com o que retornar da promisse
   function exibeResposta(textoResult) {
    console.log(textoResult);// vai printar a mensagem que a promessa retornar
   }
   
   promessa(true).then((texto) => exibeResposta(texto))
    //.then((texto) => exibeResposta(texto))
   // sucesso na promessa

