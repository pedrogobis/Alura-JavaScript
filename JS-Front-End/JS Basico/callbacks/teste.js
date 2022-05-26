const listaDeNomes = ["jose Ferreira", "Luan silva", "BIA Costa"];

// 1) transformar as strings dos elementos do array em minusculo com map() e toLowerCase()
const nomesMinusculos = listaDeNomes.map((nome) => nome.toLowerCase());

// 2) transformar a primeira letra do primeiro nome em maiuscula com map() e toUpperCase()
const primeiroNomePadronizado = nomesMinusculos.map((nome) => {
      const primeiraLetra = nome[0].toUpperCase();
      return nome.replace(nome[0], primeiraLetra);
});
String.prototype.replaceAt = function (index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + 1);
};
const nomesPadronizados = primeiroNomePadronizado.map((nome) => {
    const indexNome = nome.indexOf(" ") + 1;
    const letraMaiuscula = nome.substring(indexNome, indexNome + 1);
    return nome.replaceAt(indexNome, letraMaiuscula.toUpperCase());
});

console.log(nomesPadronizados)