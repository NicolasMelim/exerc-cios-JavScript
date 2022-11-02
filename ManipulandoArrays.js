var techs = ["html5", "css3", "js"]
//adicionar um item ao fim
techs.push("node.js")
//adicionar um item ao começo
techs.unshift("sql")
//remover do começo
techs.shift()
//remover do fim
techs.pop()
//pegar somente alguns elementos do array
console.log(techs.slice(2, 3))
//remover 1 ou mais itens em qualquer posição do array 
techs.splice(1,3)
//encontrar a posição de um Array
var index = techs.indexOf('js') 
techs.splice(index, 1)
//indexOf significa "de", qual é o indexDE.. 

console.log(techs)