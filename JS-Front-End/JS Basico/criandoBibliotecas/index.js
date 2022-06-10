import chalk from 'chalk';
import fs from 'fs'; // biblioteca para ler arquivos em js.

/// pra funcionar precisa rodar no terminal e não no output, da erro.

function trataErro(erro){
  // agora vamos inserir alguns dados dos parametros do objeto erro, o .code vai mostrar apenas o erro, e o segundo parametro, vai ser a mensagem a ser exibida
  throw new Error(chalk.red(erro.code, 'arquivo não encontrado.'));
}

// Vamos re escrever a funcao que criamos, mas prepara-la para ler arquivos maiores, lidando com assincronismo.

function pegaArquivoGrande(caminhoDoArquivo){
  const encoding = 'utf-8';
  fs.promises.readFile(caminhoDoArquivo, encoding)
  .then((texto) => console.log(chalk.cyan(texto)))
  .catch((erro) => trataErro(erro))

}


/*

function pegaArquivo(caminhoDoArquivo){
  const encoding = 'utf-8';
  // underline já aprendo diz para o js ignorar, porém como é funcao temos que declarar ele dentro.
  fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => { 
    if(erro){ //se erro for true
      trataErro(erro) // mostrou o erro apenas
      //console.log(erro)// printou o erro e mostrou todos os dados do errro.
      
    }else{
      
      console.log(chalk.greenBright(texto))
    }
    
    
  })
};
*/

let caminho = './arquivo/texto1.md'// variavel com o caminho como string a ser inserido na funcao.


pegaArquivoGrande(caminho)