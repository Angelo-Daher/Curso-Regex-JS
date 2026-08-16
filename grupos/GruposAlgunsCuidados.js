const texto = 'Pedrinho (filho de Pedro Silva) é doutor do ABC'

console.log(texto.match(/[(abc)]/gi)) // Isso aqui não é um grupo! (Dentro de um conjunto o grupo não tem vez)!
console.log(texto.match(/([abc])/gi)) // Dentro de um grupo, o conjunto ainda sobrevive!
console.log(texto.match(/(abc)/gi)) // Evitar a criação de grupos que não são necessários dentro da sua regex! Use ela mais simples e mais específica possível!