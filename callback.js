function DigaMeuNome(name){
    console.log('antes de executar callback')
    name()
    console.log('depois de executar callback')
}

DigaMeuNome(
    () => {
        console.log('estou em uma callback')
    }
)
