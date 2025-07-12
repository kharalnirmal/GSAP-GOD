import gsap from "gsap"
const button = document.querySelector(".scroll-to-top")

const isFloating = false;
window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        button.classList.add('show');

        if (!isFloating) {
            gsap.to(button, {
                y: -15,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.in"
            })
              isFloating = true
        }
    }
    else
    {
        button.classList.remove('show')
    }
})

button.addEventListener('mouseenter',() =>{
    gsap.to(button ,{scale:1.1, duration:0.2})
})
button.addEventListener('mouseleave',() =>{
    gsap.to(button ,{scale:1, duration:0.2})
})
button.addEventListener('click',() =>{
    window.scrollTo(0,0)
})

// Add the 'show' class to the button element to apply specific CSS styles (e.g., make it visible or styled differently) euta show vanerw class banko raixa tyo add hudo raixa css ma .show vanerw raixa 
