// public/js/main.js

// ==========================================
// GROUNDS2GOURMET - Essential Interactive Landing Page Features
// Refactored for MVP focus and optimal performance within strict deadline
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 G2G MVP App Loaded!');

    // Find elements
    const navbar = document.querySelector(".navbar");
    const header = document.querySelector(".main-header");
    const logo = document.querySelector(".logo"); // Logo img element
    
    console.log('Elements found:', {
        navbar: !!navbar,
        header: !!header,
        logo: !!logo
    });

    if (!navbar || !logo) {
        return;
    }

    // Logo configuration
    const logoConfig = {
        default: {
            src: 'assets/images/LogoG2G2.svg',
            alt: 'G2G Logo'
        },
        scrolled: {
            src: 'assets/images/Logo.png', 
            alt: 'G2G Logo'
        }
    };


    let currentState = 'default';
    const threshold = 50;

    function updateLogo(state) {
        if (currentState === state) return; // Avoid unnecessary changes
        
        const config = logoConfig[state];
        if (!config) {
            return;
        }

        // Add fade out effect
        logo.style.opacity = '0';
        logo.style.transform = 'scale(0.95)';

        setTimeout(() => {
            // Change logo source
            logo.src = config.src;
            logo.alt = config.alt;
            
            // Fade back in
            logo.style.opacity = '1';
            logo.style.transform = 'scale(1)';
            
            currentState = state;
        }, 150); // Half of the transition duration
    }

    // Preload images for smooth transition
    function preloadLogos() {
        Object.values(logoConfig).forEach(config => {
            const img = new Image();
            img.src = config.src;
        });
    }

    // Scroll handler
    function handleScroll() {
        const scrollY = window.scrollY || window.pageYOffset;
        
        if (scrollY > threshold) {
            // Scrolled state
            navbar.classList.add('scrolled');
            if (header) header.classList.add('scrolled');
            updateLogo('scrolled');
            
        } else {
            // Default state
            navbar.classList.remove('scrolled');
            if (header) header.classList.remove('scrolled');
            updateLogo('default');
        }
    }

    // Optimized scroll listener
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    // Initialize
    preloadLogos();
    
    // Set initial logo
    if (logo.src === '' || logo.src.includes('placeholder')) {
        logo.src = logoConfig.default.src;
        logo.alt = logoConfig.default.alt;
    }
    
    // Initial scroll check
    handleScroll();

    // Debug helper
    window.testLogoSwap = function(state = 'scrolled') {
        updateLogo(state);
    };
});


document.addEventListener('DOMContentLoaded', () => {
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

  const burger = document.getElementById('burger');
  const navMenu = document.getElementById('navMenu');

  burger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    burger.classList.toggle('open');
});