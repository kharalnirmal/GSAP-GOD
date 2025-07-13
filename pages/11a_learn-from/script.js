import gsap  from "gsap";


let  animate = ()=>{
    gsap.from(".card",{
        y:20,
        opacity:0,
        stagger:.4,
        delay:0.2,
        duration:0.6,
        ease:"power1.inOut"
    })
}


let repeat = document.querySelector(".repeat")
repeat.addEventListener("click",()=>{
    animate().restart;
})
