



//factory:
//criar uma factory para poder criar varios personagens

function createPerson(sexo = "homem", grana = 50) //se não passar nada da variavel sexo ela vai valer o valor "homem"
{ //criando uma função que retorna um objeto
    return {
        sexo: sexo, // ao inves de usar (sexo: sexo,) poderiamos usar apenas (sexo,)
        nome: "juan",
        grana, //quando a propriedade é do mesmo valor que a variavel você pode deixar a estrutura assim ao inves de grana: grana
        trabalhar: function () {
            if (sexo == "mulher") {
                grana +=1
                return console.log(`você lavou a louça, agora tem ${grana} reais`)
            } else{
            grana += 2
            return console.log(`você trabalhou agora você tem ${grana} reais`)
            }
        },
        trocarSexo: function() {
            if (this.sexo == "mulher" && grana >= 20){
                this.sexo = "homem"
                grana -= 20
            } else if (this.sexo == "homem" && grana >= 20){
                this.sexo = "mulher"
                grana -=20
            } else {
                return console.log('você não tem dinheiro suficiente para trocar seu sexo')
            } return console.log(`parábens agora você é ${this.sexo}`)
        }
    }
}

const homem = createPerson("homem") // criando personagem homem
const mulher = createPerson("mulher") //criando personagem mulher
const pobre = createPerson("homem", 0)
console.log(homem.sexo) // vai retornar homem pois la encima colocamos que o sexo = homem
console.log(mulher.sexo) // vai retornar homem pois la encima colocamos que o sexo = mulher
homem.trabalhar();
mulher.trabalhar();

homem.trocarSexo();
mulher.trocarSexo();
pobre.trocarSexo();

//caso queiramos que alguma propriedade do objeto exista (como o sexo) mas que ela não seja mostrada
//podemos usar o factory (retirando apenas o sexo do return) e declarando como uma variavel fora do return
//o que é impossivel de fazer no objectLiteral

//o unico problema da factory é que ela sempre recria o objeto varias e varias vezes (o que é ruim)
//no caso podemos usar também o prototype (arquivo prototype.js)
