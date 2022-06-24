
const APPID = 'LiWb7W0aj2Yzrg1uCnEA';
const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/'
async function addLikeCount (itemID){
    const response = await fetch(`${url}${APPID}/likes`, {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ item_id: itemID }),
      
    });
   const addedLike = await response.text();

   console.log(itemID)

   console.log(addedLike)

   return addedLike

}


async function getLikeCount(){
    const response = await fetch (`${url}${APPID}/likes`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        },
        
    })
   const  getLikes = await response.json()
   return getLikes
}


export {addLikeCount, getLikeCount}