const themeToggleBtn = document.getElementById("themeToggleBtn");
const bodyElement = document.body;

themeToggleBtn.addEventListener("click", function() {
    bodyElement.classList.toggle("dark-theme");
    
    if (bodyElement.classList.contains("dark-theme")) {
        themeToggleBtn.textContent = "Light Mode";
    } else {
        themeToggleBtn.textContent = "Switch Theme";
    }
});

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for your message! This is a static simulation.");
    contactForm.reset();
});