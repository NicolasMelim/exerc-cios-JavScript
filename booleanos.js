let isAtivo = false
console.log(isAtivo)
isAtivo = true 

console.log('Os verdadeiros')
console.log(!!-1)
console.log(!! ' ')
console.log(!!3)
console.log(!! 'Texto')
console.log(!! {})
console.log(!! [])
console.log(!!(isAtivo = true))

console.log('Os falsos')
console.log(!! null)
console.log(!! NaN)
console.log(!!'')
console.log(!!0)
console.log(!!undefined)
console.log(!!(isAtivo = false))

let nome = 'Melim'
console.log(!!'')
console.log(  nome || 'Nicolas Melim')