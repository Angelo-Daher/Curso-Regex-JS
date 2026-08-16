const texto = 'dia diatonico diafragma media wikipedia bom_dia melodia radial'

console.log(texto.match(/\bdia\w+/gi)) // Quero palavras que comecem com a palavra 'dia'
console.log(texto.match(/\w*dia\b/gi)) // Quero palavras que terminem com a palavra 'dia'
console.log(texto.match(/\w+dia\w+/gi))
console.log(texto.match(/\bdia\b/gi))


// borda é não \w, que é [^A-Za-z0-9]... temos problemas com acentos!

const texto2 = 'dia diatônico diafragma, média wikipédia bom-dia melodia radial'
console.log(texto2.match(/\bdia\b/gi))
console.log(texto2.match(/(\S*)?dia(\S*)?/gi))
console.log(texto2.match(/([\wÁ-ú]*)?dia([\wÁ-ú]*)?/gi))