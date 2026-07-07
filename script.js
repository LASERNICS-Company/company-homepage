// =====================
// HEADER SCROLL EFFECT
// =====================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background =
        "rgba(5,7,13,0.96)";

    }else{

        header.style.background =
        "rgba(5,7,13,0.88)";

    }

});


// =====================
// SCROLL FADE ANIMATION
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
".about-inner, .product-showcase, .app-card, .contact-inner"
)
.forEach((element)=>{

    element.classList.add("fade");

    observer.observe(element);

});


// =====================
// SMOOTH SCROLL
// =====================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target =
        document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});
