const texto = `
Lista Telefonica:
    - (21) 12345-6789
    - (11) 62300-2234
    - 5678-7890
    - (85) 3333-7890
    - (1)  4321-1234
`

console.log(texto.match(/.+[\(]?\d{0,3}[\)]?\d+-\d{4}/g))
console.log(texto.match(/(\(\d{0,3}\)\s?)?\d{4,5}-\d{4}/g))