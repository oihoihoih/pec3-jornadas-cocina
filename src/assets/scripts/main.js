/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// GSAP Animation Library
import { gsap } from "gsap";

/**
 * Write any other JavaScript below
 */

// Carousel functionality
const buttonPrev = document.getElementById("slide-arrow-prev");
const buttonNext = document.getElementById("slide-arrow-next");
const carouselWrapper = document.getElementById("carousel-wrapper");

if (carouselWrapper && buttonPrev && buttonNext) {
  const images = Array.from(carouselWrapper.querySelectorAll("img"));

  buttonNext.addEventListener("click", () => {
    const visibleIndex = images.findIndex(
      (img) => !img.classList.contains("hidden")
    );
    const newIndex = (visibleIndex + 1) % images.length;

    // Current image goes out (to the left)
    images[visibleIndex].classList.add(
      "-translate-x-full",
      "transition",
      "duration-500",
      "ease-in-out"
    );

    // Next image goes out of the screen
    images[newIndex].classList.add("translate-x-full");
    images[newIndex].classList.remove("hidden");

    void images[newIndex].offsetWidth;

    images[newIndex].classList.remove("translate-x-full");
    images[newIndex].classList.add(
      "translate-x-0",
      "transition",
      "duration-500",
      "ease-in-out"
    );

    // Clean up classes after animation
    setTimeout(() => {
      images[visibleIndex].classList.add("hidden");
      images[visibleIndex].classList.remove(
        "-translate-x-full",
        "transition",
        "duration-500",
        "ease-in-out"
      );
      images[newIndex].classList.remove(
        "translate-x-0",
        "transition",
        "duration-500",
        "ease-in-out"
      );
    }, 500);
  });

  buttonPrev.addEventListener("click", () => {
    const visibleIndex = images.findIndex(
      (img) => !img.classList.contains("hidden")
    );
    const newIndex = (visibleIndex + 1) % images.length;

    // Current image goes out (to the left)
    images[visibleIndex].classList.add(
      "translate-x-full",
      "transition",
      "duration-500",
      "ease-in-out"
    );

    // Next image goes out of the screen
    images[newIndex].classList.add("-translate-x-full");
    images[newIndex].classList.remove("hidden");

    void images[newIndex].offsetWidth;

    images[newIndex].classList.remove("-translate-x-full");
    images[newIndex].classList.add(
      "translate-x-0",
      "transition",
      "duration-500",
      "ease-in-out"
    );

    // Clean up classes after animation
    setTimeout(() => {
      images[visibleIndex].classList.add("hidden");
      images[visibleIndex].classList.remove(
        "translate-x-full",
        "transition",
        "duration-500",
        "ease-in-out"
      );
      images[newIndex].classList.remove(
        "translate-x-0",
        "transition",
        "duration-500",
        "ease-in-out"
      );
    }, 500);
  });
}

// Modal functionality
if (window.location.pathname.includes("speakers")) {
  const closeButton = document.getElementById("closeModalButton");
  const openButton = document.getElementById("openModalButton");
  const modalContainer = document.getElementById("nlModalContainer");
  const modal = document.getElementById("nlModal");
  const cancelModalButton = document.getElementById("cancelModalButton");
  const acceptModalButton = document.getElementById("acceptModalButton");

  closeButton.addEventListener("click", () => {
    modalContainer.classList.add("hidden");
  });

  cancelModalButton.addEventListener("click", () => {
    modalContainer.classList.add("hidden");
  });

  acceptModalButton.addEventListener("click", () => {
    modalContainer.classList.add("hidden");
  });

  openButton.addEventListener("click", () => {
    modalContainer.classList.remove("hidden");
  });

// GSAP Cards Animation
gsap.from(".card", {
  y: 100,
  autoAlpha: 0,
  stagger: 0.1,
});
}

// Animations for blog page
gsap.from(".blog-post, speakers", {
  autoAlpha: 0,
  duration: 1,
});


