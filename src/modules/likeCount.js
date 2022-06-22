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
      let id= [i];
  
      if(e.target.id === `lk${id}`){
  
        ++likes;
       
        console.log("hey")
        console.log(likes)
          }
    }
    
    return likes
  }

//   export {addlikes, pokedex}