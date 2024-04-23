//Inheritance e Prototype Inheritance

//Inheritance é basicamente usada pra você não precisar ficar repetindo o mesmo código varias e varias vezes/ reduzir duplicação de código
//Inheritance em outras linguagens estão bem ligadas a classes, porem em javascript podemos faze-las com ou sem classes
//nesse exemplo usaremos classes

//supondo que temos 2 objetos aqui

const eu = {
    falar() { return 'blablabla'; }
}

const voce = {
    falar() { return 'blablabla'; }
}

//aqui podemos ver um problama gravissimos, que seriam a duplicação de código
//por isso em javascript (e na maioria das linguagens) existe uma regra que diz que se você escreve o exato mesmo código duas vezes existe um jeito melhor de fazer ele