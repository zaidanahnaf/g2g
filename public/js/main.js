// public/js/main.js

// ==========================================
// GROUNDS2GOURMET - Essential Interactive Landing Page Features
// Refactored for MVP focus and optimal performance within strict deadline
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('G2G MVP App Loaded! Initializing core landing page interactions...');

    // --- 1. Navbar Scroll Transformation (Mengubah Warna & Ukuran) ---
    // Navbar akan berubah (warna, ukuran, shadow) saat pengguna menggulir halaman ke bawah
    const mainHeader = document.getElementById('main-header'); // Pastikan <header> punya ID "main-header"
    // Pastikan navbar center dan right sesuai HTML terbaru Anda
    const navLinksCenter = document.querySelectorAll('.navbar-center li a'); // Link di navbar-center
    const navLinksRight = document.querySelectorAll('.navigation-links li a'); // Link di navbar-right
    const logo = document.querySelector('.main-header .logo'); // Logo di navbar
    const btnLogin = document.querySelector('.main-header .btn-login'); // Tombol Tawarkan Ampas

    const scrollThreshold = 80; // Jarak scroll (dalam piksel) sebelum navbar berubah
    const scrolledClass = 'scrolled'; // Kelas CSS untuk state navbar saat di-scroll

    const applyNavbarStyle = () => {
        if (!mainHeader) return; // Pastikan header ada

        if (window.scrollY > scrollThreshold) {
            mainHeader.classList.add(scrolledClass);
            // Tambahkan kelas 'scrolled' ke link dan tombol login jika perlu styling terpisah
            navLinksCenter.forEach(link => link.classList.add(scrolledClass));
            navLinksRight.forEach(link => link.classList.add(scrolledClass));
            if (logo) logo.classList.add(scrolledClass);
            if (btnLogin) btnLogin.classList.add(scrolledClass);
        } else {
            mainHeader.classList.remove(scrolledClass);
            // Hapus kelas 'scrolled'
            navLinksCenter.forEach(link => link.classList.remove(scrolledClass));
            navLinksRight.forEach(link => link.classList.remove(scrolledClass));
            if (logo) logo.classList.remove(scrolledClass);
            if (btnLogin) btnLogin.classList.remove(scrolledClass);
        }
    };

    // Panggil saat scroll dan saat halaman pertama dimuat (untuk kasus refresh di tengah scroll)
    window.addEventListener('scroll', applyNavbarStyle);
    applyNavbarStyle(); // Panggil sekali saat load


    // --- 2. Smooth Scroll untuk Anchor Links ---
    // Membuat scroll menjadi mulus ketika mengklik link yang menuju section di halaman yang sama
    // Ini mencakup link di navbar dan tombol seperti "Mulai Gunakan G2G Sekarang"
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Mencegah perilaku default (loncat langsung)

            const targetId = this.getAttribute('href').substring(1); // Ambil ID target dari href
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Gunakan scrollIntoView bawaan browser untuk smooth scroll
                targetElement.scrollIntoView({
                    behavior: 'smooth', // Efek scroll mulus
                    block: 'start' // Posisikan target di awal viewport
                });
            }
        });
    });


    // --- 3. Animasi Muncul Saat Load Halaman (Hero Section Content) ---
    // Konten di hero section (h1, p, button) akan muncul secara smooth saat pertama kali halaman dimuat
    const heroContent = document.querySelector('.hero-content');
    // Ambil elemen yang ingin dianimasikan dalam hero-content
    const heroElementsToAnimate = heroContent ? heroContent.querySelectorAll('h1, p, .btn-primary') : [];

    if (heroContent) {
        // Atur opasitas dan posisi awal (CSS sudah diatur untuk transisi)
        heroElementsToAnimate.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
        });

        // Pemicu animasi setelah sedikit delay untuk efek "muncul"
        let delay = 0; // Delay awal
        heroElementsToAnimate.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, delay + (index * 150)); // Stagger animation (muncul satu per satu)
        });
    }


    // --- 4. Animasi Muncul Saat Scroll (Sections Lainnya) ---
    // Setiap section akan muncul secara smooth (fade-in, slide-up) ketika masuk ke viewport
    // Pastikan section-section ini memiliki class 'animate-on-scroll' di HTML
    const sectionsToAnimateOnScroll = document.querySelectorAll(
        '#why-g2g, .ampas-cuans, #aktor-dibalik-g2g, #fitur-utama, #cara-kerja-g2g, .main-footer'
    );

    const observerOptions = {
        root: null, // Mengamati dari viewport
        rootMargin: '0px',
        threshold: 0.1 // Ketika 10% dari section terlihat, animasikan
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Tambahkan kelas 'is-visible' untuk memicu animasi CSS
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Berhenti mengamati setelah animasi dipicu sekali
            }
        });
    }, observerOptions);

    sectionsToAnimateOnScroll.forEach(section => {
        section.classList.add('animate-on-scroll'); // Tambahkan kelas dasar untuk animasi
        sectionObserver.observe(section); // Mulai mengamati section
    });

    console.log('G2G MVP Landing Page interactions initialized.');
});
