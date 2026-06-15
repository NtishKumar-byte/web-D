

const textArray = [
  "Frontend Developer",
  "C++ Programmer",
  "Node.js Backend Developer",
  "Problem Solver"
];

const typingElement = document.querySelector(".typing");

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

  const currentText = textArray[textIndex];

  if (!isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex++);
  } else {
    typingElement.textContent = currentText.substring(0, charIndex--);
  }

  if (!isDeleting && charIndex === currentText.length + 1) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % textArray.length;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();




const faders = document.querySelectorAll(".fade");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  faders.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);



window.addEventListener("load", () => {
  revealOnScroll();
});