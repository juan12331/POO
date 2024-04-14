//built in são objetos criados pelo próprio javascript (ou coisa parecida)

//math

let x = 5.5
let y=  5

console.log(Math.abs(x)) // retorna a distancia do numero para 0
console.log(Math.floor(x)) //arredonda para baixo
console.log(Math.pow(x, y)) //faz potenciação do primeiro numero para o segundo
console.log(Math.min(x, y)) // retorna o menor valor
console.log(Math.max(x, y)) // retorna o maior valor
console.log(Math.round(x)) // arredonda


//DATE

console.log(Date()) // pega a data atual

setTimeout(function() {

    console.log("teste")

}, 1000 /* <-- tempo em milisegundos */)

//vale ressaltar que o setTimeout é assincrono ou seja, o javascript vai passar reto pelo código só esperando o tempo de 1000 milisegundos
console.log('console.log') // esse console.log aparece antes do setTimeOut mesmo sendo escrito depois

