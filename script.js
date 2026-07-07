// HEADER SCROLL EFFECT

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background =
        "rgba(5,7,13,.95)";

    }else{

        header.style.background =
        "rgba(5,7,13,.85)";

    }

});


// SCROLL ANIMATION

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
".about-inner,.product-showcase,.app-card,.contact-inner"
).forEach(el=>{

    el.classList.add("fade");

    observer.observe(el);

});


// SMOOTH SCROLL

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
