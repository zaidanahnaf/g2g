// test.js
import { addCoffeeOffer, getAllCoffeeOffers } from './public/js/offerLogic.js';
import { updateStepCompletion, getGuideProgress } from './public/js/guideLogic.js';

// Test add offer
console.log('--- Testing Offer Logic ---');
addCoffeeOffer({ name: 'New Cafe', type: 'Kafe', area: 'Central', amount: '5kg/hari', contact: '111' });
addCoffeeOffer({ name: 'Another Home', type: 'Rumah Tangga', area: 'South', amount: '0.2kg/hari', contact: '222' });
console.log('All offers:', getAllCoffeeOffers());

// Test guide progress (Note: localStorage tidak tersedia di Node.js, jadi ini akan gagal jika fungsi save/load dipanggil)
console.log('\n--- Testing Guide Logic ---');
console.log('Initial Guide Progress:', getGuideProgress());
updateStepCompletion('step1Completed', true);
console.log('After Step 1 Completed:', getGuideProgress());
updateStepCompletion('step2Completed', true);
console.log('After Step 2 Completed:', getGuideProgress());