



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