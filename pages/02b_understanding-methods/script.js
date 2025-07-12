import gsap from "gsap"

const play =  document.querySelector(".play")
const pause =  document.querySelector(".pause")
const resume =  document.querySelector(".resume")
const restart =  document.querySelector(".restart")
const reverse =  document.querySelector(".reverse")
const kill =  document.querySelector(".kill")
const yoyo =  document.querySelector(".yoyo")
const repeat =  document.querySelector(".repeat")

const animation = gsap.to(".box",{
    rotate:720,
    scale:1,
    duration:6,

    ease:"power1.inOut",
    // yoyo:true
})

play.addEventListener("click",()=>{
   animation.play()
})
pause.addEventListener("click",()=>{
   animation.pause()
})
resume.addEventListener("click",()=>{
   animation.resume()
})
restart.addEventListener("click",()=>{
   animation.restart()
})
reverse.addEventListener("click",()=>{
   animation.reverse()
})
kill.addEventListener("click",()=>{
   animation.kill()
})
yoyo.addEventListener("click",()=>{
   animation.yoyo(true)
})
repeat.addEventListener("click",()=>{
   animation.repeat(2)
})