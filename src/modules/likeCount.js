// import { slice } from "lodash";
// import display from "./display";
import { addLikeCount, getLikeCount } from "./involvementApi";
export const pokedex = 110;



export function  addlikes(){
  const likebtn = document.querySelectorAll(".heart");
likebtn.forEach(btn =>{
  btn.addEventListener("click", async function(){
    await addLikeCount(btn.getAttribute('id'));

    // update like display
    const response = await getLikeCount();
    const item = response.find(
      (element) => element.item_id === btn.getAttribute('id'),
    );
    const likeDisplay = document.querySelector(`#span-${btn.getAttribute('id')}`);
    likeDisplay.innerHTML = item.likes
    
    console.log(response);
    
    
    
  })


})
}

export async function updateLikes(){
//   const response = await getLikeCount();
// const btnLike = document.querySelectorAll('.likecount');
// btnLike.forEach(async btn => {
//   const item = await response.find(
//     (poke) => {poke.item_id === parseInt(btn.getAttribute('id').slice(5))});
//     if(item === undefined){
//       item = {
//         likes: 0
//       } 
//     }
// console.log(btn.getAttribute('id').slice(5))
//     btn.innerHTML = item.likes

    // const likeDisplay = document.querySelector(`#span-${btn.getAttribute('id')}`)


// })

  
  
// const item = await response.find(
//   (element) => element.item_id === btn.id );
// if (item === undefined) {
//   item.likes = 0
//   };



// return item







}


























// const item = await response.find(
//   (element) => element.item_id === pokemon.id);
// if (item === undefined) {
//   item.likes = 0
//   };

 

// const likebtn = document.querySelectorAll(".likecount");
// likebtn.forEach(async (btn) =>{
  
//     const response = await getLikeCount();
  
//     const likeDisplay = document.querySelector(`#span-${btn.getAttribute('id')}`);
//     likeDisplay.innerHTML = item.likes
    
//     console.log(response);
    
    
  
// }

// )


  // update likes
  // export async function updateLikes(){

    
  //   const response = await getLikeCount();


  //   console.log(response);

  //   const counter = document.querySelectorAll('.likecount');
  //   counter.forEach(count=>{
  //     for(let i = 0; i <pokedex; i++){
  //       let id = i+1;
        
  //       if(count.id === `span-${id}`){
  //         if(response[i].likes === undefined){
  //           counter[i].textContent = 0;
  //         }
  //         counter[i].textContent = response[i].likes;
  //         console.log('updated')
  //            }
  //           }
  //   })

  // }
  





 


//   export {addlikes, pokedex}