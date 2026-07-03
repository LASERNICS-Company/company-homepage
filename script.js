// 스크롤 시 헤더 살짝 변화
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.style.background = "rgba(0,0,0,0.8)";
  } else {
    header.style.background = "rgba(0,0,0,0.4)";
  }
});

// 폼 제출 막기 (데모용)
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("문의가 전송되었습니다 (데모)");
});
