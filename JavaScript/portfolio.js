document.addEventListener("DOMContentLoaded", function () {
  function initSlides(containerId) {
      let slideIndex = 1;

      const slideshowContainer = document.getElementById(containerId);
      const slides = slideshowContainer.querySelectorAll(".mySlides");
      const prev = slideshowContainer.querySelector(".prev");
      const next = slideshowContainer.querySelector(".next");

      function showSlides(n) {
          if (n > slides.length) slideIndex = 1;
          if (n < 1) slideIndex = slides.length;

          slides.forEach((slide, index) => {
              slide.style.display = index === slideIndex - 1 ? "block" : "none";
          });
      }

      function plusSlides(n) {
          showSlides((slideIndex += n));
      }

      showSlides(slideIndex);

      if (prev) prev.addEventListener("click", () => plusSlides(-1));
      if (next) next.addEventListener("click", () => plusSlides(1));
  }

  initSlides("slideshow1");
  initSlides("slideshow2");
  initSlides("slideshow3");
  initSlides("slideshow4");
});
