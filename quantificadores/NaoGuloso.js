const texto = '<div>Conteúdo 01 </div><div>Conteudo 02</div>'

// quantificadores são gulosos por padrão (greedy)...

console.log(texto.match(/<div>.+<\/div>/g))
console.log(texto.match(/<div>.*<\/div>/g))
console.log(texto.match(/<div>.{0,100}<\/div>/g))

// quantificadores não gulosos (lazy)

console.log(texto.match(/<div>.+?<\/div>/g))
console.log(texto.match(/<div>.*?<\/div>/g))
console.log(texto.match(/<div>.{0,100}?<\/div>/g))