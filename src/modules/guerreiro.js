import { Personagem } from "./personagem.js";

export class Guerreiro extends Personagem{
    static tipo= 'Guerreiro'
    static descricao= 'Solitário e astuto, com coragem e hombridade'
    forca

    constructor(nome, forca){
        super(nome)
        this.forca = forca
    }
    obterInsignia(){
        if(this.forca >= 5){
            return `${this.constructor.tipo} Furioso`
        }
        return super.obterInsignia()
    }
}