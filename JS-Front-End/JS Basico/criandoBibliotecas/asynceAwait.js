// vamos ver como executar a mesma coisa do index.js porém usando os metodos antigos async e await
import chalk from 'chalk';
import fs from 'fs'; // biblioteca para ler arquivos em js.
const caminho = './arquivo/texto1.md' // caminho do arquivo.




// regex \[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\) \\ retorna dois grupos, um grupo só com o nome e um grupo só com o link.

function extraiLinks(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm; //
    const arrayResult = [];
    //const linksExtraidos = texto.match(regex); // match é um metodo de string
    //const linksExtraidos = regex.exec(texto)// passamos o texto que vai ser executado
    let temp;
    while((temp = regex.exec(texto)) !== null){
        arrayResult.push({[temp[1]]: temp[2]}) // chave do objeto precisa estar entre colchetes
    }
    //console.log(arrayResult) // teste deu certo
    return arrayResult;
}

//extraiLinks(texto1)// testado e funcionando


/// pra funcionar precisa rodar no terminal e não no output, da erro.

function trataErro(erro){
  // agora vamos inserir alguns dados dos parametros do objeto erro, o .code vai mostrar apenas o erro, e o segundo parametro, vai ser a mensagem a ser exibida
  throw new Error(chalk.red(erro.code, 'arquivo não encontrado.'));
}


async function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8';
    try{
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)// pegando o texto
        console.log(extraiLinks(texto)) // se fosse sincrono era só deixar assim

    }catch(erro){
        trataErro(erro);
    }finally {
        console.log(chalk.yellow('operação concluída'));
    }


}


pegaArquivo(caminho)