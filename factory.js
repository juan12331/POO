



//factory:
//criar uma factory para poder criar varios personagens

function createPerson(sexo = "homem") //se não passar nada da variavel sexo ela vai valer o valor "homem"
{ //criando uma função que retorna um objeto
    let grana = 5 // quando eu chamo grana aqui não é preciso usar "personagem.grana" para se referir a grana do usuario
    return {
        sexo: sexo, // ao inves de usar (sexo: sexo,) poderiamos usar apenas (sexo,)
        nome: "juan",
        grana, //quando a propriedade é do mesmo valor que a variavel você pode deixar a estrutura assim ao inves de grana: grana
        trabalhar: function () {
            grana += 2
            return console.log(`agora você tem ${grana} reais`)
        }
    }
}

const homem = createPerson("homem") // criando personagem homem
const mulher = createPerson("mulher") //criando personagem mulher
console.log(homem.sexo) // vai retornar homem pois la encima colocamos que o sexo = homem
console.log(mulher.sexo) // vai retornar homem pois la encima colocamos que o sexo = mulher

//caso queiramos que alguma propriedade do objeto exista (como o sexo) mas que ela não seja mostrada
//podemos usar o factory (retirando apenas o sexo do return) e declarando como uma variavel fora do return
//o que é impossivel de fazer no objectLiteral

//o unico problema da factory é que ela sempre recria o objeto varias e varias vezes (o que é ruim)
//no caso podemos usar também o prototype (arquivo prototype.js)