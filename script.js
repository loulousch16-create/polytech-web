const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", ()=>{
  nav.classList.toggle("active");
});

/* SCROLL ANIMATION */
const cards = document.querySelectorAll(".card");
function reveal(){
  cards.forEach(card=>{
    const top = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if(top < windowHeight - 60){
      card.classList.add("visible");
    }
  });
}
window.addEventListener("scroll",reveal);
reveal();

/* VIDEO HOVER */
document.querySelectorAll(".video-card").forEach(card=>{
  const video = card.querySelector("video");
  card.addEventListener("mouseenter",()=>{video.play()});
  card.addEventListener("mouseleave",()=>{
    video.pause();
    video.currentTime=0;
  });
});

/* COUNTERS */
const counters = document.querySelectorAll(".stat");
counters.forEach(counter=>{
  let count = 0;
  const target = counter.dataset.target;
  const update = ()=>{
    count += Math.ceil(target/80);
    if(count<target){
      counter.innerText = count;
      requestAnimationFrame(update);
    } else {
      counter.innerText = target;
    }
  }
  update();
});