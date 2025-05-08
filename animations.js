document.addEventListener("DOMContentLoaded", () => {
  // --- Intersection Observer for Scroll Animations ---
  const animatedElements = document.querySelectorAll(".animate-on-scroll");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observerInstance.unobserve(entry.target); // Stop observing once animated
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    animatedElements.forEach((el) => {
      observer.observe(el);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    animatedElements.forEach((el) => {
      el.classList.add("is-visible");
    });
    console.warn(
      "IntersectionObserver not supported, scroll animations will not be as smooth."
    );
  }
});
