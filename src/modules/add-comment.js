import commentsCounter from './counter-comments.js';

const api = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/C3asvnkAr3QrWzXOJfVd/comments';
const commentsList = document.getElementById('comments-list');

const showComments = (data) => {
  let content = '';
  commentsList.innerHTML = '';
  document.getElementById('title-comment').innerHTML = `Comments(${commentsCounter(data)})`;

  if (data.length) {
    data.map((item) => {
      content += `<li><strong>${item.creation_date}</strong> - ${item.username}: ${item.comment}</li>`;
      return true;
    });
  } else {
    content += '<li>No comments available</li>';
  }

  commentsList.innerHTML = content;
};

const getComments = async (item) => {
  const response = await fetch(`${api}?item_id=${item}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  if (response.status !== 400) {
    const comments = await response.json();
    showComments(comments);
    // setTimeout(showComments(comments), 500);
  } else {
    document.getElementById('title-comment').innerHTML = 'Comments(0)';
    commentsList.innerHTML = '<li class="no-comments">No comments available</li>';
  }
};

const addComment = async (item, username, comment) => {
  const completeComment = {
    item_id: item,
    username,
    comment,
  };
  await fetch(api, {
    method: 'POST',
    body: JSON.stringify(completeComment),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  getComments(item);
  // setTimeout(getComments(item), 500);
};

export { addComment, getComments };
