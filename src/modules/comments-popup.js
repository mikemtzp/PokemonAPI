const createPopup = (pokemon) => {
  const body = document.querySelector('body');
  const popup = document.createElement('div');
  popup.innerHTML = `
  <section class="pokemon-info">
  <img src=${pokemon.sprites.front_default}>
  <i class="fa-solid fa-xmark"></i>
  <h2 class="pokemon-name">${pokemon.name}</h2>
  <div class="pokemon-data">
  <p>Types: ${pokemon.types[0].type.name}, ${pokemon.types[1].type.name}</p>
  <p>Moves: ${pokemon.moves[0].move.name}, ${pokemon.moves[1].move.name}, ${pokemon.moves[2].move.name}, ${pokemon.moves[3].move.name}</p>
  <p>Base experience: ${pokemon.abilities.base_experience}</p>
  <p>Height: ${pokemon.game_indices.height}</p>
  <p>Weight: ${pokemon.weight}</p>
  </div>
  </section>
  <section class="pokemon-comments">
  <h3>Comments<span id="comments-counter">(1)</span></h3>
  <div class="comments"></div>
  </section>
  <form class="form">
  <h3>Add a comment</h3>
  <input class="input" type="text" name="name" id="name" placeholder="Add your name">
  <input class="input" type="text" name="comment" id="comment" placeholder="Add your comment">
  <button id=${pokemon.id} class="add-comment-btn" type="button">Comment</button>
  </form>
  `;
  body.appendChild(popup);

  const close =document.querySelector('fa-xmark');
  close.addEventListener('click', () => {
    body.removeChild(popup);
  })
}
export default createPopup;