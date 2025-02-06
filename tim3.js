// JavaScript untuk interaksi tambahan (jika diperlukan)
document.addEventListener('DOMContentLoaded', function() {
    const jobCards = document.querySelectorAll('.job-card');

    jobCards.forEach(card => {
        card.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });

        card.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
});