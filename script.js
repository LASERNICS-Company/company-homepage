// HEADER EFFECT

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }

});


// COUNTER

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);

        let current = 0;

        const increment = target / 100;

        const updateCounter = () => {

            current += increment;

            if(current < target){

                counter.innerText = Math.ceil(current);

                requestAnimationFrame(updateCounter);

            }else{

                counter.innerText = target;

            }

        };

        updateCounter();

    });

};


// OBSERVER

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});


// ANIMATION TARGETS

document.querySelectorAll(
".product-card,.stat-box,.about-content,.about-image,.cta"
).forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});


// START COUNTER ONCE

let counterStarted = false;

const statsSection = document.querySelector(".stats");

const statsObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting && !counterStarted){

            startCounter();

            counterStarted = true;

        }

    });

},{
    threshold:0.4
});

statsObserver.observe(statsSection);


// HERO FADE

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});
