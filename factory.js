



//factory:
//criar uma factory para poder criar varios personagens

function createCar() { //criando uma função que retorna um objeto
    let grana = 5 // quando eu chamo grana aqui não é preciso usar "personagem.grana" para se referir a grana do usuario
    return {
        sexo: "homem",
        nome: "juan",
        grana: 5,
        trabalhar: function () {
            grana += 2
            return console.log(`agora você tem ${grana} reais`)
        }
    }
}