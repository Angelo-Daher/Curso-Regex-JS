const texto = 'João é calmo, mas no transito fica nervoso.'

console.log(texto.match(/[\w+Á-ú]+/gi))

// Positive looakahead

console.log(texto.match(/[\w+Á-ú]+(?=,)/gi))
console.log(texto.match(/[\w+Á-ú]+(?=\.)/gi))
console.log(texto.match(/[\w+Á-ú]+(?=, mas)/gi))

// Negative lookahead

console.log(texto.match(/[\w+Á-ú]+\b(?!,)/gi))// [\wÀ-ú]+ → pega uma palavra, \b → verifica o final da palavra, (?!,) → verifica que logo depois NÃO existe uma vírgula.

console.log(texto.match(/[\w+Á-ú]+[\s\.](?!,)/gi)) 