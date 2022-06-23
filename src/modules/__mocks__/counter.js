/* eslint-disable no-unused-expressions */
class Counter {
  constructor(data) {
    this.data = data;
  }

  commentsCounter = (data) => {
    const counter = data.length;
    if (!counter) counter === 0;
    return counter;
  };
}

export default Counter;
