(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });

})();

document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling for Navbar Links
    document.querySelectorAll("nav ul li a").forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
  
        // Close mobile menu after clicking a link
        document.querySelector(".navbar").classList.remove("active");
      });
    });
  
    // Universal Typing Effect Function
    function typeEffect(elementId, texts, speed = 100, deleteSpeed = 50, pause = 1000) {
      const element = document.getElementById(elementId);
      let textIndex = 0, charIndex = 0, isDeleting = false;
  
      function type() {
        let currentText = texts[textIndex];
  
        if (isDeleting) {
          element.textContent = currentText.substring(0, charIndex - 1);
          charIndex--;
        } else {
          element.textContent = currentText.substring(0, charIndex + 1);
          charIndex++;
        }
  
        if (!isDeleting && charIndex === currentText.length) {
          isDeleting = true;
          setTimeout(type, pause);
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
          setTimeout(type, 500);
        } else {
          setTimeout(type, isDeleting ? deleteSpeed : speed);
        }
      }
  
      type();
    }
  
    // Apply Typing Effect
    typeEffect("typing-text", ["Python Developer", "Web Developer"], 120, 60);
    typeEffect("dynamic-name", ["Sajid Inamdar"], 150, 70);
}
) 




