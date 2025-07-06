const card = document.querySelector('.card');
gsap.to(card, {
  boxShadow: "0 0 30px 10px rgba(0, 255, 255, 1)",
  opacity: 1,
  duration: 0.8,
  repeat: -1,
  yoyo: true,
//   ease: ""
});