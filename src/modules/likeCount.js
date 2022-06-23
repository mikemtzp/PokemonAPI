import { slice } from "lodash";
import { addLikeCount, getLikeCount } from "./involvementApi";
export const pokedex = 157;



export function  addlikes(){
  const likebtn = document.querySelectorAll(".fa-heart");
likebtn.forEach(btn =>{
  btn.addEventListener("click", addlike)
})

}

export function addlike(e){
  
    var likes = 0;
    for(let i=1; i<=pokedex; i++){
      let id= i;
  
      if(e.target.id === `lk${id}`){
        addLikeCount(id);
        updateLikes();


        
  
        ++likes;
       
         }
    }
    
    return likes
  }

  export async function updateLikes(){

    
    const response = await getLikeCount();


    console.log(response);

    const counter = document.querySelectorAll('.likecount');
    counter.forEach(count=>{
      for(let i = 0; i <pokedex; i++){
        let id = i;
        
        if(count.id === `span-${id+1}`){
          counter[id].textContent = response[id].likes;
  
        }
      }
     
    })

  }
  





 


//   export {addlikes, pokedex}