// ===== Wedding Countdown =====
const weddingDate = new Date("March 29, 2026 19:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance < 0) {
    document.getElementById("countdown").style.display = "none";
    document.getElementById("countdown-complete").style.display = "block";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ===== Floating Petals Animation =====
function createPetal() {
  var container = document.getElementById("petals");
  if (!container) return;

  var petal = document.createElement("div");
  petal.className = "petal";
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = (Math.random() * 6 + 6) + "s";
  petal.style.animationDelay = (Math.random() * 2) + "s";
  petal.style.width = (Math.random() * 10 + 8) + "px";
  petal.style.height = (Math.random() * 10 + 8) + "px";
  petal.style.opacity = (Math.random() * 0.4 + 0.2).toString();

  container.appendChild(petal);

  setTimeout(function() {
    if (petal.parentNode) {
      petal.parentNode.removeChild(petal);
    }
  }, 14000);
}

// Create petals at intervals
setInterval(createPetal, 800);

// ===== Scroll Fade-In Animation =====
function addFadeInClasses() {
  var sections = document.querySelectorAll("section");
  sections.forEach(function(section) {
    if (!section.classList.contains("hero")) {
      section.classList.add("fade-in");
    }
  });
}

function handleScrollAnimations() {
  var fadeElements = document.querySelectorAll(".fade-in");
  fadeElements.forEach(function(el) {
    var rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.classList.add("visible");
    }
  });
}

addFadeInClasses();
handleScrollAnimations();
window.addEventListener("scroll", handleScrollAnimations);
