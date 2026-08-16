const texto = `
Lista Telefonica:

    - (11) 98756-1212
    -      98765-4321
    - (85) 99988-7766
    - (21)  3261-8899
`

console.log(texto.match(/\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/g)) // Detalhadamente (? pode conter ou nao tal elemento que antecede ele ai na ER) e os dígitos telefonicos.

console.log(texto.match(/.+\d{2}\d{1,5}-\d{0,4}/g)) // Sem margem de erro! . aceitando qualquer caractere.