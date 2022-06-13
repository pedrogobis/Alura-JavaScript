import fs from 'fs';
const path = require('node:path');

import {trataErro} from "./asynceAwait.js";

async function pegarArquivo(caminho) {
    const caminhoAbsoluto = path.join(__dirname, '..', caminho);
    const encoding = 'utf-8';
    try {
      const arquivos = await fs.promises.readdir(caminhoAbsoluto, { encoding });
      const result = await Promise.all(arquivos.map(async (arquivo) => {
        const localArquivo = `${caminhoAbsoluto}/${arquivo}`;
        const texto = await fs.promises.readFile(localArquivo, encoding);
        return extraiLinks(texto);
      }));
      return result;
    } catch (erro) {
      return trataErro(erro);
    }
   }

   export {pegarArquivo};