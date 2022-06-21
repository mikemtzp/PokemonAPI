import './style.css';
import '@fortawesome/fontawesome-free/js/all.js'


const row = document.querySelector('.row');
const url = "https://pokeapi.co/api/v2/pokemon/";

let pokedex = 150;

function getPokemon(){
    for(let i = 1; i<pokedex; i++){
        let id = [i];
        pokemonCard(id)
    }
}

async function pokemonCard (id){
    const response = await fetch(url + id, {
        method: 'GET',
        header: {
            'content-type': 'application/json; charset: UTF-8'}
    })

    const pokemon = await response.json();

    console.log(pokemon);
    display(pokemon)
    // console.log(id + ' ' + pokemon.name);
    
}


function display(pokemon){
    const divCol = document.createElement("div");
    
    divCol.innerHTML = `
    <img src=${pokemon.sprites.front_default}>
    <div> ${pokemon.id}</div>
    
    `
    row.appendChild(divCol);

    
}

getPokemon();