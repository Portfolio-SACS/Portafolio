document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.project-header');
    headers.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('.status-icon');
            content.classList.toggle('active');
            icon.textContent = content.classList.contains('active') ? '-' : '+';
        });
    });
});