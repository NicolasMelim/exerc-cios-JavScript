 /* const mult = function(A,B) {
  console.log(A*B)
} 
mult(3,2) */
 
const mult = function(A,B){
    
    let total = (A*B)
    return total
}
 const division = function(C,D){
    let total = (C/D)
    return total 
 }



var A = 60
var B = 10
console.log(`O valor da multiplicação A é  ${A}`)
console.log(`O valor da multiplicação B é ${B}`)
console.log(`Esse é o total da multiplicação de A e B ${mult(A,B)}`)


var C = 55
var D = 66
console.log(`O valor de C é ${C}`)
console.log(`O valor de D é ${D}`)
console.log(`A divisão entre eles é ${division(C,D)}`)

const FaleMeuNome =() => {
    console.log('Melim')
}
FaleMeuNome()