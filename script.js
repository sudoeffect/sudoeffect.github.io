// Simple typing animation for hero subtitle
const text = "Jr. Red Team Analyst | Web Pentester | Security Enthusiast";
let i = 0;
const speed = 100;

function typeEffect() {
  if (i < text.length) {
    document.querySelector(".hero-text p").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, speed);
  }
}

// Clear text and start animation
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".hero-text p").innerHTML = "";
  typeEffect();
});
