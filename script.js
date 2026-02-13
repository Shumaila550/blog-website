// Scroll animation for cards
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{
  const trigger = window.innerHeight * 0.85;

  cards.forEach(card=>{
    const top = card.getBoundingClientRect().top;
    if(top < trigger){
      card.classList.add("show");
    }
  });
});
