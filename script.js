// Add a soft animation to the hero button
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".btn-light");
  if (button) {
    button.addEventListener("mouseover", () => {
      button.textContent = "Let's Learn Together!";
    });
    button.addEventListener("mouseout", () => {
      button.textContent = "Enroll Now";
    });
  }
});
