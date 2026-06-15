

const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if(toggle){
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}



const canvas = document.getElementById("matrix");

if(canvas){
  const ctx = canvas.getContext("2d");

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  const letters = "0101{}[]<>/";
  const fontSize = 14;
  const columns = canvas.width / fontSize;
  const drops = Array(Math.floor(columns)).fill(1);

  function draw(){
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "#00ff88";
    ctx.font = fontSize +"px monospace";

    for(let i = 0; i < drops.length; i++){
      const text = letters[Math.floor(Math.random()*letters.length)];
      ctx.fillText(text, i*fontSize, drops[i]*fontSize);

      if(drops[i]*fontSize > canvas.height && Math.random() > 0.975)
        drops[i] = 0;

      drops[i]++;
    }
  }

  setInterval(draw, 33);
}



document.querySelectorAll(".project-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.textContent = "Opening...";
    setTimeout(() => {
      btn.textContent = "View More";
    }, 800);
  });
});



const contactForm = document.querySelector(".contact-form");

if(contactForm){
  contactForm.addEventListener("submit", function(e){
    e.preventDefault();
    const btn = this.querySelector(".contact-btn");
    btn.textContent = "Message Sent ✓";
  });
}