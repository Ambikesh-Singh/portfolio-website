// ==================================================
// THEME TOGGLE
// ==================================================

const themeToggle =
    document.getElementById("themeToggle");

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeToggle.textContent = "☀️";

} else {

    themeToggle.textContent = "🌙";

}


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
// MOBILE MENU
// ==================================================

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.querySelector(".nav-links");


if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");


        if (navLinks.classList.contains("active")) {

            menuToggle.textContent = "✕";

            menuToggle.setAttribute(
                "aria-label",
                "Close menu"
            );

        } else {

            menuToggle.textContent = "☰";

            menuToggle.setAttribute(
                "aria-label",
                "Open menu"
            );

        }

    });


    // Close menu when navigation link is clicked

    navLinks
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");

                menuToggle.textContent = "☰";

                menuToggle.setAttribute(
                    "aria-label",
                    "Open menu"
                );

            });

        });

}


// ==================================================
// FOOTER YEAR
// ==================================================

const footerText =
    document.getElementById("footerText");


if (footerText) {

    footerText.textContent =
        `© ${new Date().getFullYear()} Ambikesh Singh. All rights reserved.`;

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

            top:
                0,

            behavior:
                "smooth"

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
        ".section-title, " +
        ".about-content, " +
        ".skill-card, " +
        ".education-card, " +
        ".project-card, " +
        ".experience-card, " +
        ".contact-container, " +
        ".resume-container"
    );


animatedElements.forEach((element) => {

    element.classList.add("animate");

});


const observer =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold:
                0.15
        }

    );


animatedElements.forEach((element) => {

    observer.observe(element);

});