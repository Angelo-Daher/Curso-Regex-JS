const texto = '1,2,3,4,5,6,a.b c!d?e[f'

// Para definir uma classe (ou conjunto) de caracteres usa-se []

const RegexPares = /[02468]/g
console.log(texto.match(RegexPares))

const texto2 = 'João não vai passear na moto.'
const regexComESemAcento = /n[aã]./g
console.log(texto2.match(regexComESemAcento))
