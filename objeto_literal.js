// a programação orientada a objeto é formada por 4 estruturas mestres: classes, objetos, atributos e métodos

//classe é um conjunto de objetos  que se definem pelo fato desses objetos terem uma mou mais caracteristicas em comum
//objeto é qualquer coisa instanciada a partir de uma classe (é um elemento pertencente a classe)
//Atributos são conjuntos de caracteristicas especificas de um determinado objeto
//O método é a caracteristica que permite alterar a funcionalidade de cada atributo é por meio deles que se é possível modificar os atributos de algum objeto



// a variavel personagem é um objeto literal
let personagem = {
    sexo: "homem",
    nome: "juan",
    grana: 5,
    trabalhar: function() {
        personagem.grana += 2
        return console.log(`agora você tem ${personagem.grana} reais`)
    }
}

//a variavel taxi é um objeto literal
const taxi = { //usando chaves para declarar objeto
    viajar: function(lugar) { 
        if (personagem.grana >= 5){
        personagem.grana -= taxi.preco
        return console.log(`você fez uma viagem para ${lugar}, você tem ${personagem.grana} reais`) 
        } else{
            return ('você não tem dinheiro para o taxi')
        }
    }, //método pois é uma função
    preco: 5.00 //propriedade, pois é uma propriedade :I
}

console.log(taxi) // acessa  o objeto por completo
console.log(taxi.preco) // acessa uma propriedade especifica do objeto
console.log(taxi.viajar("paraguai")) // acessa um método do objeto
console.log(personagem)

//objeto literal tem algumas desvantagens, como por exemplo se eu quisesse fazer um taxi literalmente igual
// ao outro só que mais caro eu teria que criar mais um taxi (ruim)


//existem outras maneiras de criar um objeto que são melhores que um objeto literal como mostrado acima e 
//resolve os problemas do mesmo
//exemplo esta no factory.js

//caso queira aprender mais: https://www.youtube.com/watch?v=X6klpqubyBw&ab_channel=Rocketseat

