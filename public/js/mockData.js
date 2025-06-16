// public/js/mockData.js

// --- Data untuk Penawaran Ampas Kopi ---
const LOCAL_STORAGE_OFFERS_KEY = 'g2g_coffee_offers';

// Array untuk menyimpan data penawaran ampas kopi
// Ini akan mensimulasikan data dari database dan dimuat dari localStorage saat startup
export let coffeeGroundOffers = loadOffers();

// Opsional: Tambahkan beberapa data dummy awal untuk pengujian HANYA JIKA localStorage KOSONG
// Data dummy ini akan disimpan ke localStorage jika belum ada penawaran sebelumnya.
if (coffeeGroundOffers.length === 0) {
    console.log('No offers found in localStorage, adding dummy data...');
    coffeeGroundOffers.push({
        id: 'o001',
        name: 'Kopi Kenangan Kampus UNSIA',
        type: 'Kafe/Resto',
        area: 'Karawang Barat',
        amount: '1-2 kg/hari',
        contact: '081234567890',
        dateAdded: new Date().toISOString().split('T')[0]
    });

    coffeeGroundOffers.push({
        id: 'o002',
        name: 'Ibu Ani (Warga)',
        type: 'Rumah Tangga',
        area: 'Teluk Jambe Timur',
        amount: '0.5 kg/minggu',
        contact: '087654321098',
        dateAdded: new Date().toISOString().split('T')[0]
    });
    saveOffers(); // Simpan dummy data ini ke localStorage
}

// Fungsi untuk memuat penawaran dari localStorage
function loadOffers() {
    const savedOffers = localStorage.getItem(LOCAL_STORAGE_OFFERS_KEY);
    try {
        // Coba parse JSON, jika gagal (misal data rusak), kembalikan array kosong
        return savedOffers ? JSON.parse(savedOffers) : [];
    } catch (e) {
        console.error("Error parsing offers from localStorage:", e);
        return []; // Kembalikan array kosong jika ada error parsing
    }
}

// Fungsi untuk menyimpan penawaran ke localStorage
export function saveOffers() {
    localStorage.setItem(LOCAL_STORAGE_OFFERS_KEY, JSON.stringify(coffeeGroundOffers));
    console.log('Coffee offers saved to localStorage.'); // Untuk debugging
}


// --- Data untuk Progres Panduan ---
const LOCAL_STORAGE_GUIDE_KEY = 'g2g_guide_progress';

// Array/Object untuk menyimpan status progres panduan
// Ini akan dimuat dari localStorage saat startup
export let guideProgress = loadGuideProgress();

// Fungsi untuk memuat progres dari localStorage saat aplikasi dimulai
function loadGuideProgress() {
    const savedProgress = localStorage.getItem(LOCAL_STORAGE_GUIDE_KEY);
    // Definisi progres default jika belum ada di localStorage
    const defaultProgress = {
        step1Completed: false,
        step2Completed: false,
        step3Completed: false // Pastikan ini konsisten dengan jumlah langkah di guide.html
    };
    try {
        // Coba parse JSON, jika gagal (misal data rusak), kembalikan default
        return savedProgress ? Object.assign(defaultProgress, JSON.parse(savedProgress)) : defaultProgress;
    } catch (e) {
        console.error("Error parsing guide progress from localStorage:", e);
        return defaultProgress; // Kembalikan default jika ada error parsing
    }
}

// Fungsi untuk menyimpan progres panduan ke localStorage
export function saveGuideProgress() {
    localStorage.setItem(LOCAL_STORAGE_GUIDE_KEY, JSON.stringify(guideProgress));
    console.log('Guide progress saved to localStorage.'); // Untuk debugging
}
