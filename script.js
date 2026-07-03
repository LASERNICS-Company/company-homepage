/* ================================
   LASERNICS MOTION ENGINE
================================ */

document.addEventListener("DOMContentLoaded", () => {

    /* ============================
       NAVBAR SCROLL EFFECT
    ============================ */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            navbar.style.background = "rgba(5,7,13,0.85)";
            navbar.style.backdropFilter = "blur(18px)";
            navbar.style.borderBottom = "1px solid rgba(255,255,255,0.08)";

        } else {

            navbar.style.background = "transparent";
            navbar.style.borderBottom = "1px solid rgba(255,255,255,0.04)";

        }

    });

    /* ============================
       HERO PARALLAX (REAL 느낌)
    ============================ */

    const scene = document.querySelector(".laser-scene");

    document.addEventListener("mousemove", (e) => {

        if (!scene) return;

        const x = (window.innerWidth / 2 - e.clientX) * 0.02;
        const y = (window.innerHeight / 2 - e.clientY) * 0.02;

        scene.style.transform = `translate(${x}px, ${y}px)`;

    });

    /* ============================
       CARD GLOW FOLLOW MOUSE
    ============================ */

    const cards = document.querySelectorAll(
        ".product-card, .tech-card, .application-card, .research-card"
    );

    cards.forEach(card => {

        card.addEventListener("mousemove", (e) => {

            const rect = card.getBoundingClientRect();

            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;

            card.style.setProperty("--x", `${x}%`);
            card.style.setProperty("--y", `${y}%`);

        });

    });

    /* ============================
       SCROLL REVEAL
    ============================ */

    const items = document.querySelectorAll(
        ".product-card, .tech-card, .application-card, .research-card, .stat-card"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    }, { threshold: 0.15 });

    items.forEach(item => {

        item.style.opacity = "0";
        item.style.transform = "translateY(40px)";
        item.style.transition = "0.8s ease";

        observer.observe(item);

    });

});
