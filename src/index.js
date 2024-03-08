import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"
import { Guerreiro } from "./modules/guerreiro.js"

const magoMaicaco = new Mago('Maicaco',4,'Fogo', 4, 3)
const arqueiroValtinho = new Arqueiro('Valtinho',8,5)
const arqueiroMagoFraga = new ArqueiroMago('Fraga',10,8,'Ar',5,3)
const guerreiroLeozin = new Guerreiro('Leozin', 8, 10)
const personagens = [magoMaicaco, arqueiroValtinho,arqueiroMagoFraga, guerreiroLeozin]

new PersonagemView(personagens).render()
//console.log(Personagem.verificarVencedor(arqueiroValtinho,guerreiroLeozin))
