// 헤더 효과

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background = "rgba(5,7,13,.92)";
        header.style.boxShadow = "0 10px 40px rgba(0,0,0,.35)";

    }else{

        header.style.background = "rgba(5,7,13,.65)";
        header.style.boxShadow = "none";

    }

});


// 스크롤 애니메이션

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
".card,.tech-card,.app-card,.contact-box"
).forEach(el=>{

    el.classList.add("hidden");
    observer.observe(el);

});


// Hero 이미지 패럴랙스

const heroImage = document.querySelector(".hero-image img");

document.addEventListener("mousemove",(e)=>{

    const x = (window.innerWidth / 2 - e.clientX) / 40;
    const y = (window.innerHeight / 2 - e.clientY) / 40;

    heroImage.style.transform =
    `translate(${x}px, ${y}px)`;

});


// 부드러운 앵커 이동

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
