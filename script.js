/* ==========================================================
   SITO MALIBU — Malibù Estate 2026 @ Mapo Club
   ========================================================== */

// -------- EVENT DATA --------
// Edit this array to update events. Dates use YYYY-MM-DD format.
// The script auto-detects the nearest upcoming event.
const EVENTS = [
  {
    date: '2026-06-01',
    time: 'dalle 22:00',
    title: 'Re-Opening',
    desc: 'Si riparte. La prima notte dell\'estate 2026 al Mapo Club. Malibù riapre le porte con un opening da ricordare — DJ set, drink speciali e l\'energia che ti è mancata tutto l\'inverno.',
    tags: ['Opening', 'DJ Set', 'Estate 2026'],
    emoji: '🌅',
    ticketUrl: 'https://www.ticketnation.it/rimini/malibu-opening-party-mapo.8844',
    mapsUrl: 'https://maps.google.com/?q=Mapo+Club+Bellaria-Igea+Marina',
    posterUrl: 'assets/poster-reopening.jpg'
  },
  {
    date: '2026-06-20',
    time: 'dalle 22:00',
    title: 'Notte Rosa',
    desc: 'La notte si tinge di rosa. Dress code pink, cocktail a tema e un\'atmosfera che non trovi da nessun\'altra parte. La serata più instagrammabile dell\'estate.',
    tags: ['Notte Rosa', 'Dress Code', 'Cocktails'],
    emoji: '🩷',
    ticketUrl: 'https://www.ticketnation.it/rimini/malibu-notte-rosa-mapo.8889',
    mapsUrl: 'https://maps.google.com/?q=Mapo+Club+Bellaria-Igea+Marina',
    posterUrl: 'assets/poster-notte-rosa.jpg'
  },
  {
    date: '2026-07-04',
    time: 'dalle 22:00',
    title: 'Maracana',
    desc: 'Ritmi brasiliani, percussioni dal vivo e l\'energia del Maracana al Mapo Club. Una notte tropicale che ti farà ballare fino all\'alba.',
    tags: ['Tropical', 'Live Percussion', 'Brasile'],
    emoji: '🇧🇷',
    ticketUrl: 'https://www.ticketnation.it/rimini/maracana-mapo.9150',
    mapsUrl: 'https://maps.google.com/?q=Mapo+Club+Bellaria-Igea+Marina',
    posterUrl: 'assets/poster-maracana-1.jpg'
  },
  {
    date: '2026-07-18',
    time: 'dalle 22:00',
    title: 'Glow Pool Party',
    desc: 'Dalla piscina al dancefloor. Body paint fluorescente, luci UV, e un pool party che si trasforma nella notte più luminosa dell\'estate.',
    tags: ['Pool Party', 'UV Glow', 'Day-to-Night'],
    emoji: '🏊',
    ticketUrl: 'https://www.ticketnation.it/rimini/glow-experience-pool-schiuma-party-mapo.9352',
    mapsUrl: 'https://maps.google.com/?q=Mapo+Club+Bellaria-Igea+Marina',
    posterUrl: 'assets/poster-glow-pool.jpg'
  },
  {
    date: '2026-08-01',
    time: 'dalle 22:00',
    title: 'White Party',
    desc: 'Eleganza in bianco sotto le stelle. La serata più esclusiva dell\'estate, dress code rigoroso, champagne a fiumi e atmosfera da sogno.',
    tags: ['White Party', 'Exclusive', 'Champagne'],
    emoji: '🤍',
    ticketUrl: 'https://www.ticketnation.it/rimini/malibu-white-party-mapo.9470',
    mapsUrl: 'https://maps.google.com/?q=Mapo+Club+Bellaria-Igea+Marina',
    posterUrl: 'assets/poster-white-party.jpg'
  },
  {
    date: '2026-08-14',
    time: 'dalle 22:00',
    title: 'Ferragosto',
    desc: 'La notte di Ferragosto al Mapo Club. La serata più attesa dell\'anno — fire show, guest DJ, open bar fino a mezzanotte e un after party che dura fino all\'alba.',
    tags: ['Ferragosto', 'Fire Show', 'Open Bar'],
    emoji: '🎆',
    ticketUrl: 'https://www.ticketnation.it/rimini/malibu-w-ferragosto-slamball-edition-mapo.9644',
    mapsUrl: 'https://maps.google.com/?q=Mapo+Club+Bellaria-Igea+Marina',
    posterUrl: 'assets/poster-ferragosto.jpg'
  },
  {
    date: '2026-08-29',
    time: 'dalle 22:00',
    title: 'Maracana',
    desc: 'Il Maracana torna per chiudere l\'estate in grande stile. Seconda edizione — ancora più grande, ancora più calda. L\'ultimo ballo tropicale della stagione.',
    tags: ['Tropical', 'Closing', 'Brasile'],
    emoji: '🇧🇷',
    ticketUrl: '#ticket-maracana-2',
    mapsUrl: 'https://maps.google.com/?q=Mapo+Club+Bellaria-Igea+Marina',
    posterUrl: 'assets/poster-maracana-2.jpg'
  }
];

const MONTHS_IT = ['GEN','FEB','MAR','APR','MAG','GIU','LUG','AGO','SET','OTT','NOV','DIC'];
const MONTHS_LONG = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];
const DAYS_IT = ['Domenica','Lunedì','Martedì','Mercoledì','Giovedì','Venerdì','Sabato'];

// -------- FIND NEAREST EVENT --------
function findNearestEvent() {
  const now = new Date();
  let nearest = null;
  let minDiff = Infinity;

  EVENTS.forEach((ev, i) => {
    const evDate = new Date(ev.date + 'T00:00:00');
    const diff = evDate - now;
    if (diff > -86400000 && diff < minDiff) { // include events from today
      minDiff = diff;
      nearest = i;
    }
  });

  // If all events are past, pick the last one
  if (nearest === null) nearest = EVENTS.length - 1;
  return nearest;
}

// -------- POPULATE SPOTLIGHT --------
function populateSpotlight(index) {
  const ev = EVENTS[index];
  const d = new Date(ev.date + 'T00:00:00');

  document.getElementById('spotlightDate').innerHTML =
    `<span class="spotlight__date-day">${d.getDate()}</span>
     <span class="spotlight__date-month">${MONTHS_IT[d.getMonth()]}</span>`;

  document.getElementById('spotlightTitle').textContent = ev.title;
  document.getElementById('spotlightDesc').textContent = ev.desc;
  document.getElementById('spotlightTime').textContent = ev.time;
  document.getElementById('spotlightMaps').href = ev.mapsUrl;

  // Ticket CTAs across the site — all fire InitiateCheckout with the same rich params
  const isExternal = /^https?:\/\//i.test(ev.ticketUrl);
  const safeTitle = ev.title.replace(/'/g, "\\'");
  const TICKET_BUTTONS = {
    topbarTicket:    'topbar',
    heroTicket:      'hero',
    spotlightTicket: 'spotlight'
  };

  Object.entries(TICKET_BUTTONS).forEach(([id, label]) => {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.href = ev.ticketUrl;
    if (isExternal) {
      btn.target = '_blank';
      btn.rel = 'noopener noreferrer';
    } else {
      btn.removeAttribute('target');
      btn.removeAttribute('rel');
    }
    btn.setAttribute('onclick',
      `fbq('track', 'InitiateCheckout', {content_name: '${safeTitle}', content_category: 'event-ticket'}); ` +
      `gtag('event', 'begin_checkout', {event_category: 'ticket', event_label: '${label}-${safeTitle}'});`
    );
  });

  const topbarTicketName = document.getElementById('topbarTicketName');
  if (topbarTicketName) {
    const dayMonth = `${d.getDate()} ${MONTHS_IT[d.getMonth()]}`;
    topbarTicketName.textContent = `${ev.title} · ${dayMonth}`;
  }

  // If a poster image exists, replace the placeholder
  const posterEl = document.getElementById('spotlightPoster');
  if (ev.posterUrl) {
    posterEl.innerHTML = `<img src="${ev.posterUrl}" alt="${ev.title} poster" loading="lazy">`;
  } else {
    posterEl.querySelector('.spotlight__poster-placeholder-icon').textContent = ev.emoji;
  }
}

// -------- RENDER CALENDAR --------
function renderCalendar(nearestIndex) {
  const grid = document.getElementById('calendarGrid');
  const now = new Date();

  EVENTS.forEach((ev, i) => {
    const d = new Date(ev.date + 'T00:00:00');
    const isPast = d < now && (now - d) > 86400000;
    const isNearest = i === nearestIndex;

    const card = document.createElement('div');
    card.className = `event-card${isNearest ? ' event-card--next' : ''}${isPast ? ' event-card--past' : ''}`;
    card.style.transitionDelay = `${i * 0.08}s`;

    const dayName = DAYS_IT[d.getDay()];
    const dateStr = `${dayName} ${d.getDate()} ${MONTHS_LONG[d.getMonth()]}`;

    card.innerHTML = `
      <div class="event-card__number">${String(i + 1).padStart(2, '0')}</div>
      <div class="event-card__body">
        <div class="event-card__date">${dateStr} · ${ev.time}</div>
        <h3 class="event-card__title">${ev.title}</h3>
        <div class="event-card__tags">
          ${ev.tags.map(t => `<span class="event-card__tag">${t}</span>`).join('')}
        </div>
        ${isPast
          ? `<span class="event-card__past-badge">Evento passato</span>`
          : isNearest
            ? `<a href="#prossimo-evento" class="event-card__link">Scopri di più <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>`
            : `<a href="${ev.ticketUrl}"${/^https?:\/\//i.test(ev.ticketUrl) ? ' target="_blank" rel="noopener noreferrer"' : ''} class="event-card__link" onclick="fbq('track', 'InitiateCheckout', {content_name: '${ev.title.replace(/'/g, "\\'")}', content_category: 'event-ticket'}); gtag('event', 'begin_checkout', {event_category: 'ticket', event_label: 'card-${ev.title.replace(/'/g, "\\'")}'});">Biglietti <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>`
        }
      </div>
    `;

    grid.appendChild(card);
  });
}


// -------- SCROLL REVEAL (Intersection Observer) --------
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  // Observe event cards
  document.querySelectorAll('.event-card').forEach(card => observer.observe(card));

  // Observe other reveal elements
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}


// -------- SMOOTH SCROLL for anchor links --------
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}


// -------- VIDEO FALLBACK --------
function initVideoFallback() {
  const video = document.querySelector('.hero__video');
  if (!video) return;

  video.addEventListener('error', () => {
    video.style.display = 'none';
  });

  // Also handle source errors
  const sources = video.querySelectorAll('source');
  sources.forEach(source => {
    source.addEventListener('error', () => {
      video.style.display = 'none';
    });
  });
}


// -------- TOPBAR SCROLL + HERO PARALLAX --------
function initTopbar() {
  const topbar = document.getElementById('topbar');
  const heroLogo = document.querySelector('.hero__logo-hero');
  const heroGlow = document.querySelector('.hero__logo-glow');
  const heroContent = document.querySelector('.hero__content');

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (topbar) topbar.classList.toggle('is-scrolled', y > 80);

        // Parallax: logo moves up slower than scroll, fades and scales down
        if (heroLogo && heroContent) {
          const heroH = heroContent.offsetHeight || 600;
          const progress = Math.min(y / heroH, 1);
          heroLogo.style.transform = `translateY(${y * 0.15}px) scale(${1 - progress * 0.1})`;
          heroLogo.style.opacity = 1 - progress * 0.6;
          if (heroGlow) {
            heroGlow.style.transform = `translateY(${y * 0.1}px)`;
            heroGlow.style.opacity = 0.3 - progress * 0.3;
          }
        }

        ticking = false;
      });
      ticking = true;
    }
  });
}


// -------- META PIXEL: ViewContent on spotlight visibility --------
function initPixelViewContent(nearestIndex) {
  const spotlight = document.getElementById('prossimo-evento');
  if (!spotlight || typeof fbq !== 'function') return;
  const ev = EVENTS[nearestIndex];

  let fired = false;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !fired) {
        fired = true;
        fbq('track', 'ViewContent', {
          content_name: ev.title,
          content_category: 'event-spotlight',
          content_ids: [ev.date],
          content_type: 'product'
        });
        if (typeof gtag === 'function') {
          gtag('event', 'view_item', {
            event_category: 'event',
            event_label: ev.title
          });
        }
        obs.disconnect();
      }
    });
  }, { threshold: 0.4 });

  obs.observe(spotlight);
}


// -------- GALLERY DRAG SCROLL --------
function initGalleryDrag() {
  const track = document.querySelector('.gallery__track');
  if (!track) return;

  let isDown = false;
  let startX;
  let scrollLeft;

  track.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });
  track.addEventListener('mouseleave', () => { isDown = false; });
  track.addEventListener('mouseup', () => { isDown = false; });
  track.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5;
    track.scrollLeft = scrollLeft - walk;
  });
}


// -------- INIT --------
document.addEventListener('DOMContentLoaded', () => {
  const nearestIndex = findNearestEvent();

  populateSpotlight(nearestIndex);
  renderCalendar(nearestIndex);
  initReveal();
  initSmoothScroll();
  initVideoFallback();
  initTopbar();
  initGalleryDrag();
  initPixelViewContent(nearestIndex);
});
