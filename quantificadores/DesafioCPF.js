const texto = `
CPF dos Aprovados:
    - 600.263.344-21
    - 223.343.567-43
    - 343.567.767-45
    - 565.899.756-67
    - 567.899.543-31
`

console.log(texto.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/g)) //Padrão CPF (exemplo)
console.log(texto.match(/\d{3}.+\d{2}/g)) // Trás qualquer coisa que esteja entre a ER (por isso pode dar erro).
