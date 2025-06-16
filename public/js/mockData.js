export let coffeeGroundOffers = [];

coffeeGroundOffers.push({
    id: 'o001',
    name: 'Kopi Kenangan Kampus UNSIA',
    type: 'Kafe',
    area: 'Karawang Barat',
    amount: '1-2 kg/hari',
    contact: '081234567890',
    dateAdded: new Date().toISOString().split('T')[0] // Format YYYY-MM-DD
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

// Inisialisasi status progres panduan
export let guideProgress = {
    step1Completed: false,
    step2Completed: false,
    step3Completed: false
};