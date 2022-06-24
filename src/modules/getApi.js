const APPID = 'Bmi44uZpO8wqWlkUIukm'
const getKey = async () => {
    const response = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    );
    const key = await response.text();
    console.log(key);
  };

  getKey();

  export default getKey;