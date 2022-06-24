const api = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/C3asvnkAr3QrWzXOJfVd/likes';

const getLikes = async () => {
  const response = await fetch(`${api}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  if (response.status !== 400) {
    const results = await response.json();
    results.map((like) => {
      if (like.item_id) {
        document.getElementById(`like${like.item_id}`).innerHTML = `${like.likes}`;
      }
      return true;
    });
  }
};

const addLike = async (item) => {
  const like = {
    item_id: item,
  };
  await fetch(api, {
    method: 'POST',
    body: JSON.stringify(like),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  setTimeout(getLikes(), 500);
};

export { addLike, getLikes };
