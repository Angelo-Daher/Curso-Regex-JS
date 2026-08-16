texto = 'supermercado superação hiperMERCADO'

puts texto.scan(/(?:super)[Á-ú]+/i).join(' ')

# Positive Lookbehind
puts texto.scan(/(?<!super) [\wÁ-ú]+/i).join(' ') #Só aceite o que eu quero encontrar se super estiver imediatamente ANTES.

# Negative Lookbehind
puts texto.scan(/(?<!super)mercado/i) #Encontre mercado SOMENTE se super NÃO estiver imediatamente antes.