const texto1 = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>'
console.log(texto1.match(/<(\w+)>.*<\/\1>/g)) // <abre a tag (\w+ pega as letras que estao dentro, uma ou mais quantas tiver)> . pega qualquer caractere que venha depois dessa tag estabelecida * diz que pode ter nada ou mil coisas depois e pega tudo. <fecha a tag usando o mesmo grupo de abertura>.

//const texto2 = 'Lentamente é mente muito lenta'
//console.log(texto2.match(/(lenta)(mente).*/gi)) // (pega o que tiver aqui dentro) . pega qualquer caractere e * pode ser nada ou um milhão de coisas depois.

const texto2 = 'Lentamente é mente muito lenta.'
//console.log(texto2.match(/(lenta)(mente).*\2.*\1\./gi)) // Simplesmente usando o que está armazenado nos grupos para completar a frase.

console.log(texto2.match(/(?:lenta)(mente).*\1/gi)) // ?: Não guarda nada no grupo
console.log(texto2.match(/(?:lenta)(mente)?/gi))
console.log(texto2.replace(/(lenta)(mente)/gi, 'Substitui e reocoloca')) // Substitui a palavra usando o retrovisor referente ao grupo.


