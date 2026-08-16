const texto = '.$+*?-'

console.log(texto.match(/[+.?*$]./g)) // Não precisa de escape dentro do conjunto!
console.log(texto.match(/[$-?]/g)) // Isso é um intervalo (range)

// Não é um intervalo (range)...
console.log(texto.match(/[$\-?]/g))
console.log(texto.match(/[-?]/g))

// Pode preciasar de escape dentro do conjunto: - [ ] ^