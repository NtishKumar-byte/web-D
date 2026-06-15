

const skills = document.querySelectorAll(".skill-card");

skills.forEach(skill => {
  skill.addEventListener("click", () => {
    skill.classList.toggle("active");
  });
});


function revealOnScroll(){
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(item => {
    const windowHeight = window.innerHeight;
    const elementTop = item.getBoundingClientRect().top;

    if(elementTop < windowHeight - 100){
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

document.addEventListener("click", function(e){
  const circle = document.createElement("div");
  circle.style.position = "fixed";
  circle.style.width = "8px";
  circle.style.height = "8px";
  circle.style.background = "#00ff88";
  circle.style.borderRadius = "50%";
  circle.style.left = e.clientX + "px";
  circle.style.top = e.clientY + "px";
  circle.style.pointerEvents = "none";
  circle.style.animation = "explode 0.6s ease-out forwards";

  document.body.appendChild(circle);

  setTimeout(() => circle.remove(), 600);
});