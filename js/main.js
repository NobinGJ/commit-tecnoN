document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('section, footer').forEach(el => {
        el.classList.add('hidden');
        observer.observe(el);
    });

    // Form validation
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            let valid = true;

            if (name.value.trim() === '') {
                alert('Por favor, introduce tu nombre.');
                valid = false;
            }

            if (email.value.trim() === '' || !/^\S+@\S+\.\S+$/.test(email.value)) {
                alert('Por favor, introduce un correo electrónico válido.');
                valid = false;
            }

            if (!valid) {
                e.preventDefault();
            } else {
                alert('¡Formulario enviado con éxito!');
            }
        });
    }
});
