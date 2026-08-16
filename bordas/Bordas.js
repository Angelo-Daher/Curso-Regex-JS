const texto = 'Romário era um excelente jogador\n mas hoje é um político questionador'

console.log(texto.match(/r/gi))
console.log(texto.match(/^r/gi)) // ^ -> Início da linha/string! | O ^ se estiver na primeira posição dentro de um conjunto, significa um conjunto NEGADO!
console.log(texto.match(/r$/gi)) // $ -> Fim de linha/string
console.log(texto.match(/^r.*r$/gi)) // Problema do dotall (. não resolve pra \n (quebra de linha))!