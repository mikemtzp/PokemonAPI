const row = document.querySelector('.row');
function display(pokemon) {
  const divCol = document.createElement('div');
  divCol.classList.add('col');

  divCol.innerHTML = `
    <img src=${pokemon.sprites.front_default}>
    
    <div class="top"><h3>${pokemon.name}</h3><span id=${pokemon.id} class="heart"> <i  class="like fa-solid fa-heart"></i><span class="likecount" id="span-${pokemon.id}">0</span </span> </div>
    <button> Comment</button>
    

    
    `;
  row.appendChild(divCol);
}
export default display;