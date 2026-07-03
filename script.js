const cards = document.querySelectorAll('.card');
const sections = document.querySelectorAll('.section');

/* 스크롤 등장 애니메이션 */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.15 });

cards.forEach(card => {
  card.classList.add('hidden');
  observer.observe(card);
});

sections.forEach(sec => {
  sec.classList.add('hidden');
  observer.observe(sec);
});

/* 부드러운 스크롤 보정 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if(target){
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
