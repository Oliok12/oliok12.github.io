document.addEventListener('DOMContentLoaded', () => {

    // ===== SMOOTH SCROLL =====
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ===== ANIMASI MUNCUL (FADE IN) =====
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.15 });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });

    // ===== TOMBOL KONTAK (CONTOH) =====
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        const btn = document.createElement('button');
        btn.textContent = '📧 Kirim Pesan';
        btn.style.cssText = `
            display: block;
            margin: 20px auto 0;
            padding: 12px 30px;
            background: #3498db;
            color: white;
            border: none;
            border-radius: 30px;
            font-size: 1rem;
            cursor: pointer;
            transition: background 0.3s;
        `;
        btn.addEventListener('mouseenter', () => btn.style.background = '#2c81ba');
        btn.addEventListener('mouseleave', () => btn.style.background = '#3498db');
        btn.addEventListener('click', () => {
            alert('Terima kasih! Silakan kirim email ke oliok221@gmail.com');
        });
        contactSection.appendChild(btn);
    }

});