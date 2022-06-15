const fetch = require('node-fetch');

function manejaErros(erro){
    throw new Error(erro.message);
}

async function checaStatus(arrayUrls){
    try{
        const arraryStatus = await Promise.
        all(arrayUrls
            .map(async url => {
                const res = await fetch(url);
                return res.status
        }))

        return arraryStatus;
    }catch(erro){
        manejaErros(erro)
    }
}

function geraArrayDeURLs(arraydelinks){
    // loop para cada valores
    // object.values -- retorna um array com valores
    return arraydelinks.
        map( objetolink => Object.
            values(objetolink).join())// vai extrair tudo e colocar tudo apenas em um array
}

function validaURLs(arraydelinks){
    const links = geraArrayDeURLs(arraydelinks) // todas as funcoes só devem retornar, apenas a principal que mostra no console.
    const statusLinks = await checaStatus(links);
    
    // spread operator, abre o objeto e adiciona
    const resultados = arraydelinks.map((objeto, indice) => ({
        ...objeto, status: statusLinks[indice]
    }))
    return resultados
}

module.exports = validaURLs;