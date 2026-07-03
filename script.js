/* ==========================
   LASERNICS WEBSITE
========================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       NAVBAR SCROLL EFFECT
    ========================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(7,11,20,0.92)";

            navbar.style.backdropFilter =
                "blur(18px)";

            navbar.style.borderBottom =
                "1px solid rgba(255,255,255,.08)";

        } else {

            navbar.style.background =
                "transparent";

            navbar.style.borderBottom =
                "1px solid rgba(255,255,255,.04)";
        }

    });

    /* ==========================
       SCROLL REVEAL
    ========================== */

    const revealElements = document.querySelectorAll(
        ".product-card, .industry-card, .stat, .trusted-grid span"
    );

    revealElements.forEach(el => {
        el.classList.add("reveal");
    });

    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach(el => {
        observer.observe(el);
    });

    /* ==========================
       PRODUCT CARD GLOW
    ========================== */

    document.querySelectorAll(".product-card")
        .forEach(card => {

            card.addEventListener("mousemove", e => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    e.clientX - rect.left;

                const y =
                    e.clientY - rect.top;

                card.style.background =
                    `radial-gradient(
                    circle at ${x}px ${y}px,
                    rgba(47,107,255,.20),
                    rgba(255,255,255,.03) 55%
                    )`;

            });

            card.addEventListener("mouseleave", () => {

                card.style.background =
                    "rgba(255,255,255,.03)";

            });

        });

    /* ==========================
       HERO PARALLAX
    ========================== */

    const heroVisual =
        document.querySelector(".hero-visual");

    if (heroVisual) {

        document.addEventListener(
            "mousemove",
            e => {

                const x =
                    (e.clientX / window.innerWidth - 0.5) * 20;

                const y =
                    (e.clientY / window.innerHeight - 0.5) * 20;

                heroVisual.style.transform =
                    `translate(${x}px,${y}px)`;

            }
        );

    }

    /* ==========================
       SMOOTH SCROLL
    ========================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(anchor => {

        anchor.addEventListener(
            "click",
            function (e) {

                e.preventDefault();

                const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );

                if (target) {

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    });

    /* ==========================
       HERO RINGS ANIMATION
    ========================== */

    const ring1 =
        document.querySelector(".ring1");

    const ring2 =
        document.querySelector(".ring2");

    const ring3 =
        document.querySelector(".ring3");

    let angle = 0;

    function animateRings() {

        angle += 0.15;

        if (ring1)
            ring1.style.transform =
                `translate(-50%,-50%) rotate(${angle}deg)`;

        if (ring2)
            ring2.style.transform =
                `translate(-50%,-50%) rotate(${-angle * 0.7}deg)`;

        if (ring3)
            ring3.style.transform =
                `translate(-50%,-50%) rotate(${angle * 0.4}deg)`;

        requestAnimationFrame(
            animateRings
        );
    }

    animateRings();

});

/* ==========================
   DYNAMIC CSS
========================== */

const style =
document.createElement("style");

style.innerHTML = `

.reveal{

opacity:0;

transform:
translateY(40px);

transition:
all .9s ease;

}

.reveal.active{

opacity:1;

transform:
translateY(0);

}

`;

document.head.appendChild(style);
