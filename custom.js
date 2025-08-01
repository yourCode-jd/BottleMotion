// body overflow hidden
document.addEventListener("DOMContentLoaded", function () {
  const nav = document.getElementById("Hamburger");

  nav.addEventListener("click", function () {
    document.body.classList.toggle("overflow-hidden");
  });
});

// toggle menu
function toggleHighlight() {
  const element = document.getElementById("slideNavigation");
  element.classList.toggle("slideMenu");
}

// cursor

const cursor = document.getElementById("customCursor");

document.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.clientX - 12,
    y: e.clientY - 12,
    duration: 0.2,
    ease: "power2.out",
  });
});

document.querySelectorAll("a, button, .hover-target").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add("bg-white", "scale-150", "mix-blend-difference");
  });
  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("bg-white", "scale-150", "mix-blend-difference");
  });
});

// ====== Hero section ======

window.addEventListener("load", () => {
  window.history.scrollRestoration = "manual";
  window.scrollTo(0, 0);
  document.body.style.overflowY = "hidden";
  const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 1 } });

  // Outer container fade in quickly
  tl.from(".max-w-screen-2xl", {
    opacity: 0,
    scale: 0.2,
    duration: 1.2,
  });

  // Header animation
  tl.from(".logo", { y: -30, opacity: 0, duration: 0.8 }, "-=0.8");
  tl.from("#Hamburger", { x: 20, opacity: 0, duration: 0.8 }, "-=0.6");

  // Left section
  tl.from(
    ".hero-heading",
    {
      x: -60,
      opacity: 0,
      duration: 0.8,
    },
    "+=0.1"
  );

  tl.from(
    ".hero-paragraph",
    {
      x: -60,
      opacity: 0,
      duration: 0.8,
    },
    "-=0.6"
  );

  tl.from(
    ".banner-circle-outer",
    {
      scale: 0.8,
      rotate: -45,
      opacity: 0,
      duration: 1,
    },
    "-=0.5"
  );

  // Right section (feature list)
  tl.from(
    ".feature-item",
    {
      x: 80,
      opacity: 0,
      duration: 0.9,
      stagger: 0.25,
    },
    "-=0.2"
  );

  // Center image appears at the end, snappy and clean
  tl.from(
    ".center-section",
    {
      scale: 0.94,
      opacity: 0,
      y: 40,
      duration: 1.1,
      ease: "power3.out",
    },
    "-=0.3"
  );
  setTimeout(() => {
    document.body.style.overflowY = "auto";
  }, 3500); // match your total animation duration
});

// ===== Why choose ======
gsap.utils.toArray(".choose-card").forEach((card, i) => {
  gsap.from(card, {
    opacity: 0,
    y: 40,
    duration: 0.8,
    delay: i * 0.2,
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
    },
  });
});

// ===== How it works ======
gsap.registerPlugin(ScrollTrigger);

// Heading animation
gsap.from(".how-section-header > *", {
  opacity: 0,
  y: 30,
  duration: 1,
  stagger: 0.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".how-section-header",
    start: "top 85%",
  },
});

// Card animation
gsap.registerPlugin(ScrollTrigger);

// Animate section heading
gsap.from(".timeline-header > *", {
  opacity: 0,
  y: 30,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".timeline-header",
    start: "top 80%",
  },
});

gsap.utils.toArray(".timeline-step").forEach((step, i) => {
  gsap.from(step, {
    opacity: 0,
    x: i % 2 === 0 ? -50 : 50,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: step,
      start: "top 85%",
    },
  });
});

// ===== use cases ======
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".capability-row").forEach((row, i) => {
  const text = row.querySelector("h3");
  const paragraph = row.querySelector("p");
  const image = row.querySelector(".capability-image");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: row,
      start: "top 85%",
    },
  });

  tl.from(text, {
    opacity: 0,
    x: -40,
    duration: 0.8,
  })
    .from(
      paragraph,
      {
        opacity: 0,
        x: -20,
        duration: 0.8,
      },
      "-=0.6"
    )
    .from(
      image,
      {
        opacity: 0,
        scale: 0.9,
        duration: 1.1,
        ease: "power2.out",
      },
      "-=0.8"
    );
});
