// Hero button click event
document.querySelector("#hero button").addEventListener("click", function() {
  alert("Thanks for checking out my work!");
});
// Update footer year
const footer = document.querySelector("footer p");
const year = new Date().getFullYear();
footer.textContent = `© ${year} Ambikesh | Codomax Internship`;



const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

// Scroll to top when clicked
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
