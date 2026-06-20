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

    // ===== TOMBOL KIRIM PESAN =====
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        const btn = document.createElement('button');
        btn.textContent = '🎬 Video(Thank You)';
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

        // FUNGSI SAAT TOMBOL DIKLIK
        btn.addEventListener('click', () => {
            const modal = document.getElementById('videoModal');
            const video = document.getElementById('thankYouVideo');
            if (modal && video) {
                modal.style.display = 'block';
                video.play().catch(error => console.log('Video gagal diputar:', error));
            } else {
                alert('Maaf, video belum siap!');
            }
        });

        contactSection.appendChild(btn);
    } else {
        console.log('Element #contact tidak ditemukan!');
    }

    // ===== FUNGSI TUTUP MODAL =====
    const closeBtn = document.querySelector('.close-video');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            const modal = document.getElementById('videoModal');
            const video = document.getElementById('thankYouVideo');
            if (modal) modal.style.display = 'none';
            if (video) {
                video.pause();
                video.currentTime = 0;
            }
        });
    } else {
        console.log('Tombol close tidak ditemukan!');
    }

    // Klik di luar modal → tutup
    window.addEventListener('click', (event) => {
        const modal = document.getElementById('videoModal');
        const video = document.getElementById('thankYouVideo');
        if (event.target === modal) {
            modal.style.display = 'none';
            if (video) {
                video.pause();
                video.currentTime = 0;
            }
        }
    });

    // Tombol ESC → tutup
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            const modal = document.getElementById('videoModal');
            const video = document.getElementById('thankYouVideo');
            if (modal && modal.style.display === 'block') {
                modal.style.display = 'none';
                if (video) {
                    video.pause();
                    video.currentTime = 0;
                }
            }
        }
    });

});