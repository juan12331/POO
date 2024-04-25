class humano {
    constructor(nome, idade, sexo) {
    this.nome= nome
    this.idade = idade
    this.sexo = sexo
  }
  
  apresentacao() {
    if (this.sexo == "homem") { return `Olá eu sou o ${this.nome} e tenho ${this.idade} anos`}
    else if (this.sexo == "mulher") { return `Olá eu sou a ${this.nome} e tenho ${this.idade} anos` }
    else { return `Olá eu sou ${this.nome} e tenho ${this.idade} anos` }
  }
}
  
  let homem = new humano("juan", 15, "homem")
  let sla = new humano("sla", 16, undefined)
  let mulher = new humano("clara", 13, "mulher")
  
  console.log(homem.apresentacao())
  console.log(sla.apresentacao())
  console.log(mulher.apresentacao())
