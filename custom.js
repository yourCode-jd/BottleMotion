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

// Hero section

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  document.fonts.ready.then(() => {
    // Intro animation
    gsap.from(".bottle", {
      y: 120,
      opacity: 0,
      rotation: -5,
      duration: 1.3,
      ease: "power4.out",
    });
    gsap.from(".badge", {
      opacity: 0,
      rotation: 180,
      scale: 0.8,
      duration: 0.8,
      ease: "back.out(1.7)",
      delay: 0.5,
    });
    gsap.from(".text1", {
      opacity: 0,
      y: 40,
      filter: "blur(8px)",
      duration: 0.8,
      delay: 0.6,
    });
    gsap.from(".text2", {
      opacity: 0,
      y: -40,
      filter: "blur(8px)",
      duration: 0.8,
      delay: 0.8,
    });

    gsap.registerPlugin(ScrollTrigger);

    const heroBottle = document.querySelector(".bottle");
    const xMove = () =>
      aboutImg.getBoundingClientRect().left -
      heroImg.getBoundingClientRect().left;
    const yMove = () =>
      aboutImg.getBoundingClientRect().top -
      heroImg.getBoundingClientRect().top;
    const scaleFactor = () =>
      aboutImg.getBoundingClientRect().width /
      heroImg.getBoundingClientRect().width;
    const dx = () =>
      aboutImg.getBoundingClientRect().left -
      heroImg.getBoundingClientRect().left;
    const dy = () =>
      aboutImg.getBoundingClientRect().top -
      heroImg.getBoundingClientRect().top;

    window.addEventListener("load", () => {
      const x = dx();
      const y = dy();

      gsap.to(heroBottle, {
        x: xMove,
        y: yMove,
        scale: scaleFactor,
        ease: "none",
        scrollTrigger: {
          id: "bottleMove",
          trigger: ".hero-section",
          start: "top top",
          endTrigger: ".three-col-section",
          end: "top center",
          scrub: true,
          pin: true,
        },
      });
    });
  });
});
