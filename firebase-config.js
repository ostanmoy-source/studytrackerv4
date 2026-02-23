// ══════════════════════════════════════════════════
//  FIREBASE CONFIG — Fill this in!
//  Steps:
//  1. Go to https://console.firebase.google.com
//  2. Create a new project (name it anything)
//  3. Click "Add app" → Web (</>)
//  4. Register app → copy the firebaseConfig object below
//  5. In Firebase console → Build → Realtime Database → Create database
//     → Start in TEST MODE (you can secure it later)
//  6. Copy your database URL into databaseURL below
//  7. Deploy all files to Netlify (including this file)
// ══════════════════════════════════════════════════

const FIREBASE_CONFIG = {
  apiKey:            "PASTE_YOUR_apiKey_HERE",
  authDomain:        "PASTE_YOUR_authDomain_HERE",
  databaseURL:       "PASTE_YOUR_databaseURL_HERE",   // e.g. https://your-app-default-rtdb.firebaseio.com
  projectId:         "PASTE_YOUR_projectId_HERE",
  storageBucket:     "PASTE_YOUR_storageBucket_HERE",
  messagingSenderId: "PASTE_YOUR_messagingSenderId_HERE",
  appId:             "PASTE_YOUR_appId_HERE"
};

// ── ADMIN CONFIG ──────────────────────────────────
// Add your email here to get admin powers (ban users, delete messages)
const ADMIN_EMAILS = [
  "your@email.com"   // replace with your actual email
];
