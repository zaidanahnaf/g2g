import { coffeeGroundOffers } from './mockData.js';

// Fungsi untuk menambahkan penawaran ampas kopi baru
export function addCoffeeOffer(offerData) {
    const newOffer = {
        id: 'o' + (coffeeGroundOffers.length + 1).toString().padStart(3, '0'), // ID sederhana
        name: offerData.name,
        type: offerData.type,
        area: offerData.area,
        amount: offerData.amount,
        contact: offerData.contact,
        dateAdded: new Date().toISOString().split('T')[0] // Tanggal penambahan otomatis
    };
    coffeeGroundOffers.push(newOffer);
    console.log('New offer added:', newOffer); // Untuk debugging di konsol browser
    return newOffer;
}

// Fungsi untuk mendapatkan semua penawaran ampas kopi
export function getAllCoffeeOffers() {
    // Mengembalikan salinan array agar data asli tidak termodifikasi langsung dari luar
    return [...coffeeGroundOffers];
}