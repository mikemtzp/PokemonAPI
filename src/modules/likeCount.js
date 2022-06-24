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
    

    
    // for(let i=1; i<pokedex; i++){
    //   let id= i;
    //   // addLikeCount(id)
  
    //   if(e.target.id === id){
    //     await addLikeCount(id);
    //     updateLikes(btn);
    //     // console.log(id)
       
    //      }
    // }
    
  })

  async function updateLikes(btn){

    console.log(response);
  
    const response = await getLikeCount();
    response.find((element)=>{element.item_id === btn.id })
    btn.textContent = response.likes;
  
  }

  


})

}



















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