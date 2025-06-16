// public/js/offerLogic.js
import { coffeeGroundOffers, saveOffers } from './mockData.js'; // Import saveOffers juga

// Fungsi untuk menambahkan penawaran ampas kopi baru
export function addCoffeeOffer(offerData) {
    // Basic validation, pastikan data lengkap sebelum menambahkan
    if (!offerData.name || !offerData.type || !offerData.area || !offerData.amount || !offerData.contact) {
        console.error("Validation failed: All offer fields must be filled.");
        return null; // Mengembalikan null jika validasi gagal
    }

    // let cleanedContact = offerData.contact.replace(/\D/g, '');
    // if (cleanedContact.startsWith('0')) {
    //     cleanedContact = '62' + cleanedContact.substring(1);
    // } else if (!cleanedContact.startsWith('62') && cleanedContact.length > 5) { // Asumsi jika tidak dimulai 0/62 dan cukup panjang, anggap internasional
    //     // Bisa tambahkan logika untuk kode negara default jika diperlukan
    // }

    const newOffer = {
        id: 'o' + (coffeeGroundOffers.length + 1).toString().padStart(3, '0'), // ID sederhana
        name: offerData.name,
        type: offerData.type,
        area: offerData.area,
        amount: offerData.amount,
        contact: offerData.contact, // Asumsi sudah dalam format yang benar
        dateAdded: new Date().toISOString().split('T')[0] // Tanggal penambahan otomatis
    };
    coffeeGroundOffers.push(newOffer);
    saveOffers(); // PENTING: Simpan ke localStorage setelah menambahkan
    console.log('New offer added and saved:', newOffer); // Untuk debugging di konsol browser
    return newOffer;
}

// Fungsi untuk mendapatkan semua penawaran ampas kopi
export function getAllCoffeeOffers() {
    // Data sudah dimuat dari localStorage saat mockData.js diinisialisasi
    return [...coffeeGroundOffers];
}