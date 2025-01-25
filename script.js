const toggles = document.querySelectorAll('.accordion-toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
        const answer = this.parentElement.querySelector('.answer');
        
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            this.classList.remove('active');
        } else {
            answer.style.display = 'block';
            this.classList.add('active');
        }
    });
});
