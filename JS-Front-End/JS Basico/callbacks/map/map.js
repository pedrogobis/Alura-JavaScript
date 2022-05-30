const notas = [10, 9, 8, 7, 6]

// usando o map para atualizar as notas, map não atualiza o array principal
// usamos um if ternario, se nota for maior que 10 retornamos nota se nao adiciona um a nota
// como vai retornar mais um ponto só na nota usamos o mais na frente do nota
const notasAtualizadas = notas.map(nota => nota==10? nota: ++nota)

console.log(notasAtualizadas)