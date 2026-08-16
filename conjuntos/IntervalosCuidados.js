const texto = 'ABC [abc] a-c 1234'

console.log(texto.match(/[a-c]/g))
console.log(texto.match(/a-c/g)) // Não define um range

console.log(texto.match(/[A-z]/g)) //O intervalos usam a ordem da tabela ASCII (UNICODE)

// INTERVALOS tem que respeitar a ordem da tabela UNICODE 
// console.log(texto.match(/[a-Z]/g)) error
// console.log(texto.match(/[4-1]/g)) error