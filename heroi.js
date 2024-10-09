const TipoHeroi = {
    GUERREIRO: 'Guerreiro',
    MAGO: 'Mago',
    MONGE: 'Monge',
    NINJA: 'Ninja'
}

class Heroi{

    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;   

        if(tipo == TipoHeroi.GUERREIRO){
            this.ataque = 'espada';
        } else if(tipo == TipoHeroi.MAGO){
            this.ataque = 'magia';
        } else if(tipo == TipoHeroi.MONGE){
            this.ataque = 'artes marciais';
        } else if(tipo == TipoHeroi.NINJA){
            this.ataque = 'shuriken';
        }
    }

    atacar(){
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
    }

    toString() {
        console.log(`Herói chamado ${this.nome} de ${this.idade} anos e tipo ${this.tipo}`)
    }
}

const ninja = new Heroi('Gustavo', 25, TipoHeroi.MONGE);

ninja.atacar()
ninja.toString()