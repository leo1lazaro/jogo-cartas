export class Personagem {
    nome
    vida
    mana 
    _level
    desc

    constructor(nome){
       this.nome = nome
       this._level = 1
       this.vida = 100
       this.mana = 100
    }

    aumentarLevel(){
        this.level += 1
    }
    diminuirLevel(){
        this.level -= 1
    }

    get level(){
        return this._level
    }

    set level(novoLevel){
        if (novoLevel >=1 && novoLevel <=10){
            this._level = novoLevel
        }
    }

    obterInsignia(){
        if (this._level >=5){
            return `${this.constructor.tipo} Implacável`
        }
        return `${this.constructor.tipo} iniciante`
    }

    static verificarVencedor(personagem1, personagem2){
        if(personagem1.level == personagem2.level){
            return 'Empate'
        }
        if(personagem1.level > personagem2.level){
            return `${personagem1.constructor.tipo} ${personagem1.nome} é o vencedor`
        }
        return `${personagem2.constructor.tipo} ${personagem2.nome} é o vencedor`
    }
}