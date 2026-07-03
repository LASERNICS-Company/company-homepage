/* ==================================
   LASERNICS WEBSITE
================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       NAVBAR BLUR
    =============================== */

    const navbar =
    document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if(window.scrollY > 50){

            navbar.style.background =
            "rgba(5,8,17,.82)";

            navbar.style.backdropFilter =
            "blur(20px)";

            navbar.style.borderBottom =
            "1px solid rgba(255,255,255,.08)";

        }else{

            navbar.style.background =
            "transparent";

            navbar.style.borderBottom =
            "1px solid rgba(255,255,255,.04)";

        }

    });

    /* ===============================
       HERO 3D EFFECT
    =============================== */

    const laserSystem =
    document.querySelector(".laser-system");

    document.addEventListener(
        "mousemove",
        (e)=>{

        if(!laserSystem) return;

        const x =
        (window.innerWidth/2 - e.clientX) / 60;

        const y =
        (window.innerHeight/2 - e.clientY) / 60;

        laserSystem.style.transform =

        `rotateY(${x}deg)
         rotateX(${-y}deg)`;

    });

    /* ===============================
       REVEAL ON SCROLL
    =============================== */

    const revealItems =
    document.querySelectorAll(

        ".product-card," +
        ".tech-box," +
        ".application-card," +
        ".research-card"

    );

    revealItems.forEach(item=>{

        item.classList.add("reveal");

    });

    const observer =
    new IntersectionObserver(

        entries=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    entry.target.classList.add(
                        "active"
                    );

                }

            });

        },

        {
            threshold:0.15
        }

    );

    revealItems.forEach(item=>{

        observer.observe(item);

    });

    /* ===============================
       CARD GLOW
    =============================== */

    const cards =
    document.querySelectorAll(

        ".product-card," +
        ".tech-box," +
        ".application-card," +
        ".research-card"

    );

    cards.forEach(card=>{

        card.addEventListener(
            "mousemove",
            (e)=>{

                const rect =
                card.getBoundingClientRect();

                const x =
                e.clientX - rect.left;

                const y =
                e.clientY - rect.top;

                card.style.background =

                `radial-gradient(
                circle at ${x}px ${y}px,
                rgba(0,212,255,.12),
                rgba(255,255,255,.03) 55%
                )`;

            }
        );

        card.addEventListener(
            "mouseleave",
            ()=>{

                card.style.background =
                "rgba(255,255,255,.03)";

            }
        );

    });

    /* ===============================
       SMOOTH SCROLL
    =============================== */

    document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(anchor=>{

        anchor.addEventListener(
            "click",
            function(e){

                e.preventDefault();

                const target =
                document.querySelector(

                    this.getAttribute(
                        "href"
                    )

                );

                if(target){

                    target.scrollIntoView({

                        behavior:"smooth"

                    });

                }

            }

        );

    });

});

/* ==================================
   DYNAMIC CSS
================================== */

const style =
document.createElement("style");

style.innerHTML = `

.reveal{

opacity:0;

transform:
translateY(50px);

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
