const texto = `
Os e-mails dos convidados são:
    - fulãno@cod3r.com.br
    - xicó@gmail.com
    - joÂo@empresa.info.br
    - mariá_silva@régistro.br
    - rafa.sampaio@yahoo.com
    - fulano+de+tal@escola.ninja.br
`

console.log(texto.match(/\S+@\w+\.\w{2,6}(\.\w{2})?/gm))