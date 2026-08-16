const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOOOOO!'
const texto2 = 'There is a big fog in NYC'

// + -> um ou mais 
const regex = /fogo+/gi
console.log(texto1.match(regex))
console.log(texto2.match(regex))

const texto3 = '0123456789'

console.log(texto3.match(/[0-9]/g)) // Trás de dentro do texto os números que estão no conjunto que vc escolheu!
console.log(texto3.match(/[0-9]+/g)) // Trás de dentro do texto de forma agrupada (gulosa) os elementos que vc estabeleceu no conjunto!