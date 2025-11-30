# 🚀 Quick Setup Guide

## Prerequisites
- Node.js 18+ installed
- npm or yarn

## Installation Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### 3. Test Everything
- ✅ Countdown timer is running
- ✅ 350€ button opens modal with instructions
- ✅ 1000€ button links correctly
- ✅ Share buttons work (test on mobile for best results)
- ✅ Participant counter increments
- ✅ Navigate to `/teilnahmebedingungen.html`

## Before Going Live

### Critical Replacements

1. **Hero Image** (`public/hero-placeholder.svg`)
   - Replace with actual photo of Dana + vouchers
   - Rename to `.jpg` or `.png`
   - Update path in `index.html` (lines with `hero-placeholder.svg`)

2. **Instagram Link** (`index.html`)
   - Find: `#instagram-post-placeholder`
   - Replace with actual post URL

3. **Losungswort** (`index.html`)
   - Find: `[LOSUNGSWORT]`
   - Replace with actual code word

4. **Terms PDF** (`public/teilnahmebedingungen.pdf`)
   - Replace placeholder file with real PDF

5. **Terms Content** (`teilnahmebedingungen.html`)
   - Replace placeholder legal text with final version

### Optional: Disable Mock Counter

If you don't want the fake participant counter visible:

**Option A:** Hide it completely
```css
/* Add to src/style.css */
.participant-counter {
  display: none;
}
```

**Option B:** Replace with static text
Edit `index.html`, line with `participant-counter`, change to:
```html
<p class="counter-text">
  <span class="counter-icon">👥</span>
  Über 500 Teilnehmer
</p>
```

And remove counter logic from `src/main.ts` (comment out lines 35-56).

## Build for Production

```bash
npm run build
```

Output will be in `dist/` folder. Upload this to your hosting provider.

## Deployment Options

### Option 1: Netlify (Recommended - Easiest)
1. Create free account at netlify.com
2. Drag & drop `dist/` folder
3. Configure custom domain: `gewinnspiel.dana-ink.com`
4. Done! SSL included automatically

### Option 2: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel --prod`
3. Configure domain in dashboard

### Option 3: Cloudflare Pages
1. Push code to GitHub
2. Connect repo to Cloudflare Pages
3. Build command: `npm run build`
4. Output directory: `dist`

## DNS Setup (After Deployment)

Add CNAME record to your DNS:
```
Type: CNAME
Name: gewinnspiel
Target: [your-netlify-subdomain].netlify.app
(or equivalent from your hosting provider)
```

## Troubleshooting

### Countdown shows wrong time
- Check timezone in `src/main.ts` - target date is in CET (Europe/Berlin)

### Modal not opening
- Check browser console for errors
- Ensure JavaScript is enabled

### Share buttons not working
- WhatsApp/Instagram work best on mobile devices
- Copy link requires HTTPS to work properly

### Participant counter going crazy
- This is normal - it's mock data incrementing randomly
- Replace with real API when backend is ready (see README.md)

## Post-Launch

### Announce Winner (After Dec 24)
1. Edit `src/main.ts` line 10:
   ```typescript
   const WINNER_NAME = 'Max Mustermann';
   ```
2. Rebuild: `npm run build`
3. Redeploy

### Update Instagram Link (When Post Goes Live)
1. Edit `index.html` - replace `#instagram-post-placeholder`
2. Rebuild & redeploy

## Support

For technical issues with the code, check:
- Vite docs: https://vitejs.dev
- TypeScript docs: https://www.typescriptlang.org

---

**Ready to go live?** Make sure all placeholders are replaced!

