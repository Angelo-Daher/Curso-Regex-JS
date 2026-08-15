const texto = 'Bom\nDia'
console.log(texto.match(/.../gi))
console.log(texto.match(/.../gi)) // O ponto (para tudo) não engloba o \n (quebra de linha)!

// dotall - algumas linguagens tem um flag /exp/s, mas o JS não tem!
