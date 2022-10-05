const peso1 = 2.0
const peso2 = Number ('3.0')
console.log(peso1)
console.log(Number.isInteger(peso2))

const avaliacao1 = 7.142
const avaliacao2 = 9.998
const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)
console.log(media)
console.log(media.toFixed (2)) // toFixed serve para tirar as casas decimais.// 
console.log(media.toString(2))
