import gsap from "gsap"

const tabs = document.querySelectorAll(".tab")
const tabRow = document.querySelector(".tab-row")
const indicator = document.querySelector(".indicator")

const  updateIndicator =(target)=>{
    const tabBound = target.getBoundingClientRect()
    const rowBound = tabRow.getBoundingClientRect()
    const width = tabBound.width;
    const offset = tabBound.left - rowBound.left;

    gsap.to(indicator,{
        x:offset,
        width:width,
        duration:0.4,
        ease:"back.out(1.7)" })
}
tabs.forEach((tab)=>{
    tab.addEventListener("click",()=>{
        tabs.forEach((t)=>t.classList.remove('active'))
        tab.classList.add('active');
        updateIndicator(tab);
    })
})
updateIndicator(document.querySelector('.tab.active'))