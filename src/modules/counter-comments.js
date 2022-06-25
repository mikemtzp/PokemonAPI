const commentsCounter = (data) => {
  let counter = data.length;
  if (!counter) counter = 0;
  return counter;
};

export default commentsCounter;
