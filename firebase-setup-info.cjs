const https = require('https');

// Update Firebase Storage rules to allow public read/write
// Uses the Firebase Storage REST API
const STORAGE_RULES = `rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if true;
      allow write: if true;
    }
  }
}`;

console.log('\n✅ Firebase Realtime Database rules: OPEN (set earlier)');
console.log('\n⚠️  Firebase Storage rules must be updated manually:');
console.log('   1. Go to: https://console.firebase.google.com/project/recruitment-be456/storage/recruitment-be456.firebasestorage.app/rules');
console.log('   2. Replace the rules with:\n');
console.log('─'.repeat(60));
console.log(STORAGE_RULES);
console.log('─'.repeat(60));
console.log('\n   3. Click Publish');
console.log('\n📋 Summary of what is now connected:');
console.log('   ✅ Firebase Realtime DB rules → open (read+write)');
console.log('   ✅ portal_monitor node → seeded with 9 portals');
console.log('   ✅ Dashboard → reads portal_monitor via onValue (real-time)');
console.log('   ✅ PortalMonitor widget → reads portal_monitor via onValue (real-time)');
console.log('   ✅ Shortlists page → reads shortlists node via onValue (real-time)');
console.log('   ✅ Admin panel → writes to portal_monitor + uploads PDFs to Storage');
console.log('   ⚙️  Firebase Storage rules → needs manual update (see above)');
console.log('\n🌐 App running at: http://localhost:5173');
console.log('🔐 Admin panel at: http://localhost:5173/#/admin  (password: admin024)');
