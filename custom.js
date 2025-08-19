document.addEventListener("DOMContentLoaded", () => {
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
        cursor.classList.remove(
          "bg-white",
          "scale-150",
          "mix-blend-difference"
        );
      });
    });
  }

  // --- Hero Section Animation Logic ---
  gsap.registerPlugin(ScrollTrigger);

  const bottleHero = document.querySelector("#bottleHero");
  const bottleTarget = document.querySelector(
    "#bottleTarget .bottle-target-inner"
  );

  // function to calculate target coords
  const dx = () =>
    bottleTarget.getBoundingClientRect().left -
    bottleHero.getBoundingClientRect().left;
  const dy = () =>
    bottleTarget.getBoundingClientRect().top -
    bottleHero.getBoundingClientRect().top;

  window.addEventListener("load", () => {
    // animate bottle hero → center target
    gsap.to(bottleHero, {
      x: dx,
      y: dy,
      scale: 0.9,
      rotate: 360,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".three-col-section",
        start: "top bottom",
        end: "top top+=200",
        scrub: 2,
        markers: false,
        onRefresh: (self) => {
          self.animation.invalidate(); // recalc dx/dy on resize
        },
      },
    });

    // fade in side content
    gsap.to(".side-left, .side-right", {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".three-col-section",
        start: "top center",
        toggleActions: "play none none reverse",
      },
    });
  });
});
