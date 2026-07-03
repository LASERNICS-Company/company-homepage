document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('문의가 성공적으로 전송되었습니다. 검토 후 연락드리겠습니다.');
    this.reset();
});
