const texto = `
Os e-mails dos convidados são:
    - fulãno@cod3r.com.br
    - xicó@gmail.com
    - joÂo@empresa.info.br
    - mariá_silva@registro.br
    - rafa.sampaio@yahoo.com
`

console.log(texto.match(/[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[a-zA-Z0-9_]{2,4}/g)) // de forma sem usar as shorthands
console.log(texto.match(/.+@\w+\.\w{2,4}\.*\w{0,2}/gi)) // Contando com caracteres especiais (acentuação)
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/g)) // sem contar com caracteres especiais (acentuação)

// no futuro...

console.log(texto.match(/[\w+]+@\w+\.\w{2,4}(\.\w{2})?/g)) // Forma de grupo para deixar mais organizado!