import  gsap from "gsap"

const animation = (selector , delay=0)=>{
    gsap.to(selector,{
        delay: delay,
        opacity:1,
        y:-100,
        ease:"power4.inOut",
        scale:1.2,
    });
    gsap.to(selector,{
        delay: delay+2,
        opacity:0,
        x:100,
        ease:"power4.inOut",
        scale:1.2,
    });

}

animation(".toast.one",0)
animation(".toast.two",3)