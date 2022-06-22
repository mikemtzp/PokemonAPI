import './style.css';
import '@fortawesome/fontawesome-free/js/all.js';
import pokemonCard from './modules/pokemonCard'

let pokedex = 157;

async function getPokemon(){
    for(let i = 1; i<pokedex; i++){
        let id = [i];
       await pokemonCard(id)
    }
}






getPokemon();