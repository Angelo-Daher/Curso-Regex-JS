// . ? * + - ^ $ | [] {} () \ :

const texto = '1,2,3,4,5,6,a.b c!d?e'

const RegexPonto = /\./g 
console.log(texto.split(RegexPonto))

const regexSimbolos = /,|\.|\?|!| /g
console.log(texto.split(regexSimbolos))
