//Inheritance e Prototype Inheritance

//Inheritance é basicamente usada pra você não precisar ficar repetindo o mesmo código varias e varias vezes/ reduzir duplicação de código
//Inheritance em outras linguagens estão bem ligadas a classes, porem em javascript podemos faze-las com ou sem classes
//nesse exemplo usaremos classes

//supondo que temos 2 objetos aqui



// const eu = {
//     falar() { return 'blablabla'; }
// }

// const voce = {
//     falar() { return 'blablabla'; }
// }



//aqui podemos ver 2 problamas gravissimos, que seriam a duplicação de código, e apossibilidade da função der um bug (teriamos que arrumar e em todos)
//por isso em javascript (e na maioria das linguagens) existe uma regra que diz que se você escreve o exato mesmo código duas vezes existe um jeito melhor de fazer ele
//ou seja aquele código la encima, é mal feito
//Poderiamos resolver esse problema por exemplo nesse caso usando factory, mas dessa vez usaremos inherancite

class Pessoa {
    falar() {
        return 'blablabla';
    }
}

const eu = new Pessoa();
const voce = new Pessoa();

//nesse caso nem o objeto "eu" nem "pessoa" tem a função falar em si, é como se fosse um prototype onde a função falar esta em uma raiz
//e esse código resolve o problema de fazer um update nas funções o que fica muito mais simples pois para atualizar a função em caso de bugs podemos fazer

Pessoa.prototype.falar = function() {
    return "blablabla Falando"
}
console.log(eu.falar())
console.log(voce.falar())

//nesse caso alterariamos a função para todos os objetos e isso resolveria o bug de forma muito mais simples


class Humano {
    falar() {
         return "blablabla"
        }
}

//agora aprenderemos outra coisa sobre classes q é o extends

class SuperHumano extends Humano {
    voar() {
        return "voando";
    }
}

const Tu = new SuperHumano();

console.log(Tu.voar());
console.log(Tu.falar()); // graças ao extends o objetoo "Tu" é capaz de falar mesmo sem a função falar inserida nele

//essa foi apenas uma maneira de usar inheritance podemos fazer usando prototype ou funções também