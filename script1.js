// ✅ COUNTDOWN TIMER
const timer = document.getElementById("countdown");
let deadline = new Date().getTime() + (3 * 24 * 60 * 60 * 1000);

setInterval(() => {
  let now = new Date().getTime();
  let t = deadline - now;

  let d = Math.floor(t / (1000 * 60 * 60 * 24));
  let h = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let m = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  let s = Math.floor((t % (1000 * 60)) / 1000);

  if (timer) {
    timer.innerHTML = `${d}d ${h}h ${m}m ${s}s`;
  }
}, 1000);

// ✅ TESTIMONIAL SLIDER (OPTIONAL)
let testimonials = document.querySelectorAll(".testimonial-card");
let current = 0;
if (testimonials.length > 0) {
  setInterval(() => {
    testimonials[current].style.display = "none";
    current = (current + 1) % testimonials.length;
    testimonials[current].style.display = "block";
  }, 5000);
}

// ✅ SPIN THE WHEEL
const options = ["Free Bonus!", "50% Off Coupon", "No Luck 😢", "Try Again", "Free Entry 🎉"];
const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin-btn");

if (spinBtn) {
  spinBtn.onclick = function () {
    let randomIndex = Math.floor(Math.random() * options.length);
    if (wheel) {
      wheel.innerHTML = options[randomIndex];
    }
    alert(`🎉 Result: ${options[randomIndex]}`);
  };
}

// ✅ SOLD COUNTER SIMULATION
const countEl = document.getElementById("count");
let sold = 63;

setInterval(() => {
  if (countEl && sold < 100) {
    sold++;
    countEl.textContent = 100 - sold;
  }
}, 6000);

// ✅ DARK MODE TOGGLE
const toggle = document.getElementById("darkToggle");
if (toggle) {
  toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
  });
}

// ✅ REVEAL ON SCROLL
function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);

// ✅ FAQ ACCORDION
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("open");
  });
});

// ✅ SCROLL PROGRESS BAR
window.onscroll = function () {
  let winScroll = document.documentElement.scrollTop || document.body.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("scrollBar").style.width = scrolled + "%";
};
