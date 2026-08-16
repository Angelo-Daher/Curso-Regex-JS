const texto = 'O João recebeu 120 milhões apostando 6 9 21 23 45 46'

// Para definir um quantificador usa {}

console.log(texto.match(/\d{1,2}/g))  // \d {1,2} -> Procura dígitos que tenha até 2 caracteres
console.log(texto.match(/[0-9]{2}/g))
console.log(texto.match(/\d{1,}/g))

// \w -> shorthand para trazer palavras (words/letras)
console.log(texto.match(/\w{7}/g)) // Aqui ele procura palavras (\w) de até {7} letras
console.log(texto.match(/[\wõ]{7,}/g)) // Aqui está complementando quando o padrão estiver fora da ASCII, com caracteres usando acentuação padrão Unicode.

// no futuro \b -> bordas
console.log(texto.match(/\b\d{1,2}\b/g))
console.log(texto.match(/\b[\wõ]{7}\b/g))