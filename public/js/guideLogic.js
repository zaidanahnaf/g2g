import { guideProgress } from './mockData.js'; // Menggunakan guideProgress dari mockData

const LOCAL_STORAGE_GUIDE_KEY = 'g2g_guide_progress';

// Fungsi untuk memuat progres dari localStorage saat aplikasi dimulai
function loadProgress() {
    const savedProgress = localStorage.getItem(LOCAL_STORAGE_GUIDE_KEY);
    if (savedProgress) {
        Object.assign(guideProgress, JSON.parse(savedProgress));
    }
    console.log('Guide progress loaded:', guideProgress); // Untuk debugging
}

// Fungsi untuk menyimpan progres ke localStorage
function saveProgress() {
    localStorage.setItem(LOCAL_STORAGE_GUIDE_KEY, JSON.stringify(guideProgress));
    console.log('Guide progress saved:', guideProgress); // Untuk debugging
}

// Fungsi untuk mengupdate status langkah
export function updateStepCompletion(stepName, isCompleted) {
    if (guideProgress.hasOwnProperty(stepName)) {
        guideProgress[stepName] = isCompleted;
        saveProgress();
    } else {
        console.warn(`Step "${stepName}" not found in guideProgress.`);
    }
}

export function getGuideProgress() {
    loadProgress();
    return { ...guideProgress };
}

loadProgress();