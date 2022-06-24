import { addLikeCount, getLikeCount } from './involvementApi';

export const pokedex = 110;

export function addlikes() {
  const likebtn = document.querySelectorAll('.heart');
  likebtn.forEach((btn) => {
    btn.addEventListener('click', async () => {
      await addLikeCount(parseInt(btn.getAttribute('id')));

      // update like display
      const response = await getLikeCount();
      const item = response.find(
        (element) => element.item_id === parseInt(btn.getAttribute('id')),
      );
      const likeDisplay = document.querySelector(`#span-${btn.getAttribute('id')}`);
      likeDisplay.innerHTML = item.likes;
      console.log(response);
    });
  });
}

export const updateLikes = async () => {
  const response = await getLikeCount();
  document.querySelectorAll('.likecount').forEach((button) => {
    for (let i = 0; i < response.length; i += 1) {
      if (response[i].item_id === Number(button.id.slice(5))) {
        button.lastChild.textContent = response[i].likes;
      }
    }
  });
};
