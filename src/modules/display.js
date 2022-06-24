const row = document.querySelector('.row');

function display(pokemon) {
  const divCol = document.createElement('div');
  divCol.classList.add('col');
  divCol.innerHTML = `
    <img src=${pokemon.sprites.front_default}>
    <div class="top"><h3>${pokemon.name}</h3><span><i class="like fa-solid fa-heart"></i></span></div>
    <button id=comm${pokemon.id} class="comments-btn" type="button">Comment</button>    
    `;
  row.appendChild(divCol);
}

export default display;
