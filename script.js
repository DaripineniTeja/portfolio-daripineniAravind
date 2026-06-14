// ===== TYPING EFFECT =====
const text = "Hi, I'm Daripineni Aravind | Data Analyst";
let i = 0;

function typing() {
  const el = document.getElementById("typing");
  if (!el) return;

  el.innerHTML = "";

  function typeChar() {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeChar, 60);
    }
  }

  typeChar();
}

typing();


// ===== SCROLL REVEAL (SAFE VERSION) =====
const sections = document.querySelectorAll("section");

function revealSections() {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealSections);


// ===== ACTIVE NAV LINK =====
const navLinks = document.querySelectorAll(".nav-right a");

function updateActiveLink() {
  let current = "";
  const scrollY = window.scrollY;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    const href = link.getAttribute("href");

    if (href.startsWith("#") && href === "#" + current) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveLink);


// ===== SMOOTH SCROLL =====
navLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    const targetId = this.getAttribute("href");

    if (!targetId.startsWith("#")) return;

    e.preventDefault();

    const target = document.querySelector(targetId);
    if (!target) return;

    window.scrollTo({
      top: target.offsetTop - 60,
      behavior: "smooth"
    });
  });
});


// ===== INITIAL LOAD =====
window.addEventListener("load", () => {
  revealSections();
  updateActiveLink();
});