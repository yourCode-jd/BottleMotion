// --- GSAP & ScrollTrigger Setup ---
gsap.registerPlugin(ScrollTrigger);

// --- Menu & Body Overflow Logic ---
const nav = document.getElementById("Hamburger");
const slideNavigation = document.getElementById("slideNavigation");
if (nav) {
  nav.addEventListener("click", () => {
    document.body.classList.toggle("overflow-hidden");
    if (slideNavigation) {
      slideNavigation.classList.toggle("slideMenu");
    }
  });
}

// --- Custom Cursor Logic ---
const cursor = document.getElementById("customCursor");
if (cursor) {
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
}

// ========================================================================== \\

// --- Hero Section Animation Logic ---
gsap.registerPlugin(ScrollTrigger);

// HERO BOTTLE & TARGETS
const bottleHero = document.querySelector("#bottleHero");
const bottleTarget = document.querySelector(
  ".three-col-section #bottleTarget .bottle-target-inner"
);
const bottleTarget2 = document.querySelector(
  ".multiple-products #bottleTarget2 .bottle-target-inner"
);

// Center-to-center calculations
function getDx(target) {
  return (
    target.getBoundingClientRect().left +
    target.offsetWidth / 2 -
    (bottleHero.getBoundingClientRect().left + bottleHero.offsetWidth / 2)
  );
}
function getDy(target) {
  return (
    target.getBoundingClientRect().top +
    target.offsetHeight / 2 -
    (bottleHero.getBoundingClientRect().top + bottleHero.offsetHeight / 2)
  );
}

window.addEventListener("load", () => {
  // Hero entry animation
  gsap.from(bottleHero, {
    opacity: 0,
    x: -1000,
    rotate: -360,
    scale: 1,
    duration: 1.2,
    ease: "power3.out",
  });
  gsap.from(".hero-left", {
    opacity: 0,
    y: -300,
    duration: 1,
    delay: 0.3,
    ease: "power2.out",
  });
  gsap.from(".hero-right", {
    opacity: 0,
    y: 300,
    duration: 1,
    delay: 0.3,
    ease: "power2.out",
  });

  // Side content animations
  gsap.fromTo(
    ".three-col-section .side-left",
    { x: -350, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".three-col-section",
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    }
  );
  gsap.fromTo(
    ".three-col-section .side-right",
    { x: 350, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".three-col-section",
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // === Hero bottle timeline (single timeline for both sections) ===
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".three-col-section",
      start: "top bottom",
      end: () => "+=" + window.innerHeight * 2, // covers both sections
      scrub: true,
      invalidateOnRefresh: true,
    },
  });

  // Hero → three-col target
  tl.to(bottleHero, {
    x: () => getDx(bottleTarget),
    y: () => getDy(bottleTarget),
    scale: 1,
    rotate: 360,
    ease: "none",
  });

  // Pause at three-col section (user must scroll further)
  tl.to(bottleHero, {}, "+=0.01");

  // Three-col → multiple-products target
  tl.to(bottleHero, {
    x: () => getDx(bottleTarget2),
    y: () => getDy(bottleTarget2),
    scale: 1,
    rotate: 720,
    ease: "none",
  });

  ScrollTrigger.refresh();
});

// === Lenis smooth scroll ===
const lenis = new Lenis({
  lerp: 0.08,
  duration: 1,
  wheelMultiplier: 1.1,
  touchMultiplier: 1.2,
});
function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
