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
