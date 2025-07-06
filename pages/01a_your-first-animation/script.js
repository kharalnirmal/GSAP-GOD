const card = document.querySelector('.card');  
gsap.to(card,{
    y:30,
    yoyo:true,
    repeat:-1,
    ease:"power1.inOut",
//     onComplete:()=>{
// gsap.to(card,{
//     y:-80,
//     ease:"power1.inOut",
//     scale : .6,
//     duration:4,
//     easeOut:"",
//     repeat:-1,
//     yoyo:true

// })

    }
)