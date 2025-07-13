// import gsap from "gsap"
// let flipped = false;
// const card = document.querySelector("#card")



// let animation= ()=>{
//     flipped= !flipped;
    
//     flipped ?
//     gsap.to(".card-front",{
// rotateY: 180,
// ease:"power1.inOut",
// duration:1

//     }):
//     gsap.from(".card-back",{
// rotateY:0 ,
// ease:"power1.inOut",
// duration:1,
// opacity:1

//     })

// }

// card.addEventListener("click",()=>{
//     animation();
// })

import gsap from "gsap";

let flipped = false;
const card = document.querySelector("#card");

const animation = () => {
  flipped = !flipped;

  gsap.to(card, {
    rotateY: flipped ? 180 : 0,
    duration: 1,
    ease: "power1.inOut",
  });
};

card.addEventListener("mouseenter", () => {
  gsap.to(card, { rotateY: 180, duration: 1 });
});
card.addEventListener("mouseleave", () => {
  gsap.to(card, { rotateY: 0, duration: 1 });
});