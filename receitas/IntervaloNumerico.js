const texto = '0 1 10 192 199 201 249 255 256 312 1010 1512'

// Pegue somente números entre 0-255
console.log(texto.match(/\b(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])\b/g))

// \b para delimitar onde começa e termina os valores;
// (\d{1,2} - Chama os digitos de 1 até 2 números;
// 1\d{2} - Chama os números que começam com 1 e tem mais 2 dígitos juntos (de 100 a 199);
// 2[0-4]\d - Chama os números que começam com 2 e na casa decimal vão de 10 a 40 e mais um dígito de 0 a 9 no final;
// 25[0-5] - Números que começam com 25 e tem mais um dígito de 0 a 5;
