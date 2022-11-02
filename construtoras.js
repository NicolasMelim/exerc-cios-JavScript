function Car (name){
    this.name = name
    this.run = function(){
        return this.name + " está correndo"
    }
}
const Ferrari = new Car("Ferrari")
console.log(Ferrari.run())