document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-us-form form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            const name = contactForm.querySelector('input[placeholder="Your Name"]').value;
            const email = contactForm.querySelector('input[placeholder="Your Email"]').value;
            const subject = contactForm.querySelector('input[placeholder="Subject"]').value;
            const message = contactForm.querySelector('textarea[placeholder="Message"]').value;

            // WhatsApp number
            const whatsappNumber = '6285889264208'; // Use 62 for Indonesia's country code

            // Construct the WhatsApp message URL
            const whatsappMessage = `Halo, saya ingin menghubungi Anda. Berikut detailnya:%0A%0ANama: ${name}%0AEmail: ${email}%0ASubjek: ${subject}%0APesan: ${message}`;
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

            // Open WhatsApp in a new tab
            window.open(whatsappURL, '_blank');

            // Optionally, clear the form after submission
            contactForm.reset();
        });
    }
});

        import { addCoffeeOffer } from './js/offerLogic.js';

        const offerForm = document.getElementById('offerForm');
        const formMessage = document.getElementById('formMessage');

        if (offerForm) {
            offerForm.addEventListener('submit', function(event) {
                event.preventDefault(); // Mencegah reload halaman

                const offerData = {
                    name: document.getElementById('offerName').value,
                    type: document.getElementById('offerType').value,
                    area: document.getElementById('offerArea').value,
                    amount: document.getElementById('offerAmount').value,
                    contact: document.getElementById('offerContact').value
                };

                // Panggil fungsi dari offerLogic.js untuk menambahkan data
                const addedOffer = addCoffeeOffer(offerData);

                if (addedOffer) { // Jika penawaran berhasil ditambahkan
                    formMessage.textContent = 'Penawaran Anda berhasil dikirim! Silakan lihat di halaman "Daftar Ampas Kopi".';
                    formMessage.style.display = 'block';
                    formMessage.style.backgroundColor = 'var(--color-tertiary-soft-beige)'; // Warna sesuai palette
                    formMessage.style.color = 'var(--color-primary-dark-teal)'; // Warna teks sesuai palette
                    offerForm.reset(); // Kosongkan form

                    console.log('Offer submitted and added:', addedOffer);

                    // Opsional: Redirect setelah beberapa detik
                    // setTimeout(() => {
                    //     window.location.href = 'list-offers.html';
                    // }, 3000);
                } else {
                    formMessage.textContent = 'Gagal mengirim penawaran. Mohon lengkapi semua data.';
                    formMessage.style.display = 'block';
                    formMessage.style.backgroundColor = 'rgba(255, 0, 0, 0.1)'; // Merah muda untuk error
                    formMessage.style.color = 'red';
                    console.error('Failed to submit offer.');
                }
            });
        }