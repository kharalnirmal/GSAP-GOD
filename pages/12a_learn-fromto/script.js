import gsap from "gsap"

const bar = document.querySelectorAll (".bar")

bar.forEach((val,index)=>{
gsap.fromTo(val,
{
scaleY:0.4,
}, 
{
    y:index*2,
scaleY:1.1,
repeat:-1,
yoyo:true,
// stagger:index*0.1,
ease:"sine.inOut",
duration:0.5,
delay:index*0.1
})
})

