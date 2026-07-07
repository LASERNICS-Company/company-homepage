// =====================
// HEADER EFFECT
// =====================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background =
        "rgba(5,5,5,.95)";

        header.style.borderBottom =
        "1px solid rgba(255,255,255,.08)";

    } else {

        header.style.background =
        "rgba(5,5,5,.85)";

    }

});


// =====================
// FADE IN ANIMATION
// =====================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(
".about-content,.product-card,.app-box,.contact"
).forEach(el=>{

    el.classList.add("fade");

    observer.observe(el);

});


// =====================
// SMOOTH SCROLL
// =====================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({

            behavior:"smooth"

        });

    });

});
