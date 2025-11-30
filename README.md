# Dana Ink Weihnachts-Gewinnspiel 2025

Landing page for Dana Ink's Christmas giveaway campaign.

## 🎄 Overview

Two giveaways running from December 1-24, 2025:
- **350€ Tattoo Voucher** - Instagram engagement giveaway
- **1000€ Tattoo Voucher** - Booking-based giveaway

## 🚀 Quick Start

### Install Dependencies
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
/
├── index.html                    # Main landing page
├── teilnahmebedingungen.html     # Terms & conditions page
├── public/
│   ├── hero-placeholder.jpg      # REPLACE: Hero image with Dana + vouchers
│   └── teilnahmebedingungen.pdf  # REPLACE: Final T&Cs PDF
├── src/
│   ├── main.ts                   # TypeScript logic (countdown, modal, counter, share)
│   └── style.css                 # Styling with color system
└── package.json
```

## ⚠️ PLACEHOLDERS TO REPLACE

Before going live, replace these:

### 1. Hero Image
- **File:** `public/hero-placeholder.svg` (currently placeholder SVG)
- **Replace with:** Photo of Dana holding both vouchers (use .jpg or .png)
- **Recommended size:** 1200x800px (or similar 3:2 ratio)
- **Update references:** Change image path in `index.html` if using different format

### 2. Instagram Post Link
- **File:** `index.html`
- **Find:** `#instagram-post-placeholder`
- **Replace with:** Actual Instagram post URL (e.g., `https://www.instagram.com/p/XXXXX/`)

### 3. Losungswort (Code Word)
- **File:** `index.html`
- **Find:** `[LOSUNGSWORT]`
- **Replace with:** Actual code word for participation

### 4. Teilnahmebedingungen PDF
- **File:** `public/teilnahmebedingungen.pdf`
- **Replace with:** Legal T&Cs document (including Instagram disclaimer)

### 5. Teilnahmebedingungen Text
- **File:** `teilnahmebedingungen.html`
- **Replace:** Placeholder text with final legal content

### 6. Winner Name (After Raffle)
- **Option A (Simple):** Edit `index.html` line with `[NAME HIER EINTRAGEN]`
- **Option B (Recommended):** Edit `src/main.ts` line with `const WINNER_NAME = '[NAME]'`

## 🎨 Design Features

- **Color Scheme:** Dana Ink brand colors (purple, dark grays)
- **Christmas Theme:** Subtle gradient glow + festive headline font (Crimson Text)
- **Responsive:** Mobile-first design
- **Accessibility:** Respects `prefers-reduced-motion`

## 🔧 Technical Details

### Countdown Timer
- **Target:** December 24, 2025, 13:00 CET
- **Behavior:** Shows winner announcement when expired
- **Edit target date:** `src/main.ts` line with `targetDate`

### Mock Participant Counter
- **Current:** Displays fake increments (starting at 487)
- **Backend Integration:** See comment in `src/main.ts` for API spec
- **To disable:** Comment out `startMockCounter()` call

### Share Functionality
- WhatsApp: Pre-filled message with URL
- Instagram Stories: Opens @dana.ink profile + native share API
- Copy Link: Clipboard API with fallback

## 🌐 Deployment

### Subdomain Setup
Deploy to: `gewinnspiel.dana-ink.com`

**Recommended Hosts:**
- Netlify (Easy setup, free tier)
- Vercel (Fast, auto SSL)
- Cloudflare Pages (CDN included)

### Build Output
After `npm run build`, upload the `dist/` folder to your host.

### DNS Configuration
You'll need to:
1. Create CNAME record: `gewinnspiel` → `[your-host]`
2. Or A record pointing to host's IP

## 📱 Testing Checklist

- [ ] Replace all placeholders
- [ ] Test countdown timer (check timezone)
- [ ] Test 350€ modal opens correctly
- [ ] Test 1000€ CTA links to dana-ink.com/anfrage
- [ ] Test Instagram link works
- [ ] Test teilnahmebedingungen page loads
- [ ] Test PDF download works
- [ ] Test share buttons (WhatsApp, Instagram, Copy)
- [ ] Test mobile responsiveness
- [ ] Test on different browsers (Chrome, Safari, Firefox)

## 🔄 After Launch Updates

### Update Participant Counter with Real Data
1. Set up backend endpoint: `GET /api/participant-count`
2. Response format: `{ count: number }`
3. Replace mock logic in `src/main.ts` with:
```typescript
async function fetchParticipantCount() {
  const response = await fetch('/api/participant-count');
  const data = await response.json();
  participantCount = data.count;
  updateParticipantCounter();
}
```

### Announce Winner
After raffle on Dec 24:
1. Edit `src/main.ts` line: `const WINNER_NAME = 'Max Mustermann';`
2. Rebuild: `npm run build`
3. Redeploy

## 📊 Performance

- Vite build optimized for speed
- No heavy libraries (vanilla JS/TS)
- Minimal CSS (no Tailwind bloat)
- Images should be optimized before upload

## 📝 License

© 2024 Dana Ink - All rights reserved

---

**Need help?** Check Vite docs: https://vitejs.dev/

