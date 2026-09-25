const modal = document.getElementById('survey-modal');
const openBtns = document.querySelectorAll('.open-modal-btn');
const closeBtn = document.querySelector('.close-btn');

// فتح النافذة المنبثقة
openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'flex';
    });
});

// إغلاق النافذة عند الضغط على (X)
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// إغلاق النافذة عند الضغط خارجها
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
