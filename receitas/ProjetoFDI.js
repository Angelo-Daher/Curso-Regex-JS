const texto = `
Título: Em Madri, Virginia mostra filho caçula seguindo passos de Vini Jr e craque brinca: 'Passadinha de jogador'
Autor(a), Alícia Carracena
20/08/2026
A influenciadora Virginia Fonseca, de 27 anos, está aproveitando alguns dias em Madri, na Espanha, ao lado do namorado, o jogador Vini Jr, de 26. Nesta quinta-feira (20), Virgínia mostrou um momento divertido com José Leonardo filho caçula, e o craque do Real Madrid, enquanto jogavam futebol.

Nos Stories, a empresária mostrou que a convivência do menino com o craque da seleção tem surtido efeito. José Leonardo, de quase dois anos, apareceu jogando futebol no gramado da casa do jogador. Virginia compartilhou vídeos em que incentiva o filho a chutar a bola em direção a uma trave pequena, instalada no local especialmente para ele...

Editora Globo
20 de Agosto 2026
públicidade@edglobo.com
Atendimento: 4003-9393 ou (21) 2534-5000
`

console.log(texto.match(/^T[ií]tulo:.+$/gim))
console.log(texto.match(/(Autor\(a\)).+/gi)) 
console.log(texto.match(/\d{2}\/\d{2}\/\d{4}|\d{2}\sde\s[A-Za-zÁ-ú]*(\s(de))?\s\d{4}/gi)) 
console.log(texto.match(/influenciador(\(a\))*[^,]+|jogador[^,.'']+/gi))
console.log(texto.match(/\S+@\w+[0-9]*\.\w{2,3}(\.\w{2})?/gi))
console.log(texto.match(/(\(\d{1,3}\)\s)?\d{4,5}-\d{4}/g))
console.log(texto.match(/jos[eé]\sleonardo(?=\sfilho)/gi))
console.log(texto.match(/futebol(?!\.)[^.]+\./gi))
