const APPID = 'uOy7DSaMDz6TxcZM79iV';

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
async function addLikeCount(itemID) {
  const response = await fetch(`${url}${APPID}/likes`, {

    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: itemID }),

  });
  const addedLike = await response.text();

  console.log(itemID);

  console.log(addedLike);

  return addedLike;
}

const  getLikeCount = async() => {
  const response = await fetch(`${url}${APPID}/likes`);
  const getLikes = await response.json();
  return getLikes;
}

export { addLikeCount, getLikeCount };