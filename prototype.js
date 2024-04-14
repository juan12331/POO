// Prototype é a base do javascript em termos de objetos

const animal = {
    som: 'um som de animal',
    tipo: 'animal',
    emitirSom() { return console.log(this.som) },
    verificarTipo() {return console.log(this.tipo)}
}

const gato = {
    som: 'miau',
    tipo: 'gato',
}

Object.setPrototypeOf(gato, animal) // o que esse Object.setPrototypeOf faz? ele basicamente faz uma emulação de herança de classe, ou seja, ta dizendo que o objeto animal é o "pai" do objeto gato

gato.emitirSom() // como essa função não existe no objeto gato ele vai procurar ela no objeto pai (animal), e como nessa função procuramos this.som, ele vai checar se no prototipo filho (gato) existe alguma classe som, como não existe ele vai procurar no pai

gato.verificarTipo() // como no "gato" existe como verificar tipo ele vai pegar o tipo do gato (sempre da prioridade para o filho)

// se tivessemos uma função no "gato" chamada emitirSom, que faz uma coisa totalmente diferente da função emitirSom do "animal", ele daria preferencia para o emitirSom do animal

// resumindo ele sempre vai procurar primeiro no objeto em si para depois chamar no protótipo

const gatoRaivoso = {
    tipo: "gatoRaivoso",
    miarForte() {
        console.log(this.som.toUpperCase())
    }
}

Object.setPrototypeOf(gatoRaivoso, gato)

gatoRaivoso.miarForte() 
gatoRaivoso.emitirSom()

// o pai do gato raivoso é gato q é filho de animal, ou seja, vai sempre começar procurando algo no gatoRaivoso, para depois ir de pai em pai até achar oq procura, caso contrario da erro

// para descobrir qual é o prototype de algum objeto usamos

console.log(Object.getPrototypeOf(gatoRaivoso)) // vai retornar gato
console.log(Object.getPrototypeOf(Object.getPrototypeOf(gatoRaivoso))) // vai retornar animal (mesma coisa de fazer object.getprototypeof(gato))
console.log(Object.getPrototypeOf(animal))


// motivos para usar o prototype: fazer herança, assim quando criar diferentes objetos apenas precisamos colocar os metodos e valores que divergem dos seus pais