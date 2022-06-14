const fetch = require('node-fetch');

async function checaStatus(arrayUrls){
    const arraryStatus = await Promise.
    all(arrayUrls
        .map(async url => {
            const res = await fetch(url);
            return res.status
    }))
    return arraryStatus;
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
    return statusLinks
}

module.exports = validaURLs;