const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(e){
  e.preventDefault();

  const btn = this.querySelector(".send-btn");
  btn.textContent = "Sending...";

  setTimeout(() => {
    btn.textContent = "Message Sent ✓";
    btn.style.background = "#00ff88";
  }, 1500);
});