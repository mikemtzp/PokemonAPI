const row = document.querySelector('.row');
async function display(pokemon, like) {
  if (like === undefined) {
    like = {
      likes: 0,
    };
  }

  const divCol = document.createElement('div');
  divCol.classList.add('col');

  divCol.innerHTML = `
    <img src=${pokemon.sprites.front_default}>
    
    <div class="top"><h3>${pokemon.name}</h3><span id=${pokemon.id} class="heart"> <i  class="like fa-solid fa-heart"></i><span class="likecount ${pokemon.id}" id="span-${pokemon.id}">${like.likes}</span </span> </div>
    <button> Comment</button>
    

    
    `;
  row.appendChild(divCol);
}
export default display;

// const response = await getLikeCount();
// const item = await response.find(
//   (element) => element.item_id === pokemon.id);
// if (item === undefined) {
//   item.likes = 0
//   };
