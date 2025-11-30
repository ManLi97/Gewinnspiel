// ===================================
// COUNTDOWN TIMER LOGIC
// ===================================

// Target: December 24, 2025, 13:00 CET
const targetDate = new Date('2025-12-24T13:00:00+01:00').getTime();

// TODO: Replace with actual winner name after raffle
const WINNER_NAME = '[NAME HIER EINTRAGEN]';

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  // Check if countdown has expired
  if (distance < 0) {
    showWinnerAnnouncement();
    return;
  }

  // Calculate time units
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update DOM
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
  if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
  if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
  if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
}

function showWinnerAnnouncement() {
  const countdownEl = document.getElementById('countdown');
  const winnerEl = document.getElementById('winner-announcement');
  
  if (countdownEl) countdownEl.style.display = 'none';
  if (winnerEl) {
    winnerEl.style.display = 'block';
    // Update winner name if needed
    const winnerTitle = winnerEl.querySelector('.winner-title');
    if (winnerTitle) {
      winnerTitle.textContent = `🎉 Gewinner: ${WINNER_NAME}`;
    }
  }
}

// Start countdown and update every second
updateCountdown();
setInterval(updateCountdown, 1000);

// ===================================
// MODAL HANDLING (350€ CTA)
// ===================================

const modal = document.getElementById('modal-350');
const cta350Button = document.getElementById('cta-350');
const modalClose = document.getElementById('modal-close');
const modalOverlay = modal?.querySelector('.modal-overlay');

// Open modal
cta350Button?.addEventListener('click', () => {
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  }
});

// Close modal function
function closeModal() {
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = ''; // Restore scroll
  }
}

// Close on X button
modalClose?.addEventListener('click', closeModal);

// Close on overlay click
modalOverlay?.addEventListener('click', closeModal);

// Close on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// ===================================
// SHARE FUNCTIONALITY
// ===================================

const shareText = '🎄 Dana Ink Weihnachts-Gewinnspiel!\nGewinne 1000€ oder 350€ Tattoo-Gutschein bis 24.12.2025 🎁\ngewinnspiel.dana-ink.com';
const shareUrl = 'https://gewinnspiel.dana-ink.com';

// WhatsApp Share
const whatsappBtn = document.getElementById('share-whatsapp');
whatsappBtn?.addEventListener('click', () => {
  const url = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
  window.open(url, '_blank');
});

// Instagram Stories Share
const instagramBtn = document.getElementById('share-instagram');
instagramBtn?.addEventListener('click', () => {
  // Instagram Stories doesn't have direct web share API
  // Best approach: Open Instagram and let user share manually
  // On mobile, this will open the Instagram app
  const instagramUrl = 'https://www.instagram.com/dana.ink/';
  window.open(instagramUrl, '_blank');
  
  // Also try native share API if available
  if (navigator.share) {
    navigator.share({
      title: 'Dana Ink Weihnachts-Gewinnspiel',
      text: shareText,
      url: shareUrl
    }).catch(() => {
      // Silently fail - user cancelled or not supported
    });
  }
});

// Copy Link
const copyBtn = document.getElementById('share-copy');
const copySuccess = document.getElementById('copy-success');

copyBtn?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(shareUrl);
    
    // Show success message
    if (copySuccess) {
      copySuccess.style.display = 'block';
      setTimeout(() => {
        copySuccess.style.display = 'none';
      }, 3000);
    }
  } catch (err) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = shareUrl;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      if (copySuccess) {
        copySuccess.style.display = 'block';
        setTimeout(() => {
          copySuccess.style.display = 'none';
        }, 3000);
      }
    } catch (e) {
      console.error('Copy failed:', e);
    }
    document.body.removeChild(textArea);
  }
});

// ===================================
// CONSOLE LOG FOR DEVELOPMENT
// ===================================

console.log('🎄 Dana Ink Weihnachts-Gewinnspiel initialized');
console.log('Target Date:', new Date(targetDate).toLocaleString('de-DE', { timeZone: 'Europe/Berlin' }));

