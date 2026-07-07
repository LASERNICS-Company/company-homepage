// ======================
// HEADER EFFECT
// ======================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(5,7,13,.95)";
        header.style.boxShadow = "0 10px 40px rgba(0,0,0,.4)";

    } else {

        header.style.background = "rgba(5,7,13,.65)";
        header.style.boxShadow = "none";

    }

});


// ======================
// SCROLL ANIMATION
// ======================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".about-box,.card,.tech-card,.app-card,.contact-box,.stat"
).forEach(el => {

    el.classList.add("hidden");
    observer.observe(el);

});


// ======================
// SMOOTH SCROLL
// ======================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({
            behavior: "smooth"
        });

    });

});


// ======================
// HERO IMAGE PARALLAX
// ======================

const heroImage = document.querySelector(".hero-image img");

document.addEventListener("mousemove", (e) => {

    const x =
        (window.innerWidth / 2 - e.clientX) / 35;

    const y =
        (window.innerHeight / 2 - e.clientY) / 35;

    heroImage.style.transform =
        `translate(${x}px, ${y}px)`;

});


// ======================
// NUMBER COUNTER
// ======================

const counters = document.querySelectorAll(".stat h3");

let counterStarted = false;

function runCounters() {

    if (counterStarted) return;

    counterStarted = true;

    counters.forEach(counter => {

        const targetText = counter.innerText;

        let target = parseInt(
            targetText.replace(/[^0-9]/g, '')
        );

        if (!target) return;

        let count = 0;

        const speed = target / 60;

        const updateCounter = () => {

            count += speed;

            if (count < target) {

                counter.innerText =
                    Math.floor(count) + "+";

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = targetText;

            }

        };

        updateCounter();

    });

}

const statSection = document.querySelector(".stats");

const statObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            runCounters();

        }

    });

}, {
    threshold: 0.5
});

statObserver.observe(statSection);


// ======================
// HERO GLOW EFFECT
// ======================

const glow = document.querySelector(".hero-glow");

document.addEventListener("mousemove", (e) => {

    const x = e.clientX;
    const y = e.clientY;

    glow.style.left = `${x}px`;
    glow.style.top = `${y}px`;

});


// ======================
// PRODUCT CARD TILT
// ======================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY =
            ((x / rect.width) - 0.5) * 12;

        const rotateX =
            ((y / rect.height) - 0.5) * -12;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0)";

    });

});


// ======================
// SECTION FADE-UP
// ======================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});
