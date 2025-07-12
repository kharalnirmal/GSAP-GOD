import gsap from "gsap"


const ToastLoop =()=>{
gsap.to(".toast",{
    y:-160,
    opacity:1,
    scale:1.2,
    ease:"power4.inOut",
    duration:1,
    
     onComplete :()=>{
        gsap.to(".toast",{
            y:0,
            opacity:0,
            delay:1,
            scale:0.8,
                 onComplete :()=>{
            setTimeout(ToastLoop,1000)
        }   
        }) }
    
    })

}

ToastLoop()

