// ==================================================
// THEME TOGGLE
// ==================================================

const themeToggle =
    document.getElementById("themeToggle");

// Get saved theme
const savedTheme =
    localStorage.getItem("theme");

// Apply saved theme
if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeToggle.textContent = "☀️";

} else {

    themeToggle.textContent = "🌙";

}


// Toggle theme
themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeToggle.textContent = "☀️";

        localStorage.setItem(
            "theme",
            "dark"
        );

    } else {

        themeToggle.textContent = "🌙";

        localStorage.setItem(
            "theme",
            "light"
        );

    }

});


// ==================================================
// FOOTER YEAR
// ==================================================

const footerText =
    document.getElementById("footerText");

if (footerText) {

    footerText.textContent =
        `© ${new Date().getFullYear()} Ambikesh Singh | Codomax Internship`;

}


// ==================================================
// SCROLL TO TOP
// ==================================================

const scrollBtn =
    document.getElementById("scrollTopBtn");

if (scrollBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            scrollBtn.style.display =
                "block";

        } else {

            scrollBtn.style.display =
                "none";

        }

    });


    scrollBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


// ==================================================
// CONTACT FORM
// ==================================================

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const name =
                document.getElementById("name").value;

            alert(
                `Thanks ${name}! Your message has been received.`
            );

            contactForm.reset();

        }
    );

}


// ==================================================
// INTERSECTION OBSERVER
// ==================================================

const animatedElements =
    document.querySelectorAll(
        ".section-title, .about-content, .skill-card, .education-card, .project-card, .experience-card, .contact-container, .resume-container"
    );


// Add animation class
animatedElements.forEach((element) => {

    element.classList.add("animate");

});


// Create observer
const observer =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    // Stop observing after animation
                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


// Start observing
animatedElements.forEach((element) => {

    observer.observe(element);

});