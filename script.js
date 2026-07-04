
// NAV: scroll state, active link highlighting, mobile menu

const nav = document.getElementById('nav');
const burger = document.getElementById('burger');
const navMobile = document.getElementById('nav-mobile');

window.addEventListener('scroll', () => {
  nav.classList.toggle('is-scrolled', window.scrollY > 20);
}, { passive: true });

burger.addEventListener('click', () => {
  const isOpen = navMobile.classList.toggle('is-open');
  burger.classList.toggle('is-open', isOpen);
  burger.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('[data-nav-mobile]').forEach(link => {
  link.addEventListener('click', () => {
    navMobile.classList.remove('is-open');
    burger.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
  });
});

// Active section highlighting
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('[data-nav]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

sections.forEach(section => sectionObserver.observe(section));


// SCROLL REVEAL

const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('is-visible'), i * 40 % 200);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));

// ANIMATED COUNTERS (about stats)

const counters = document.querySelectorAll('.stat-card__num');

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      let current = 0;
      const duration = 900;
      const stepTime = Math.max(Math.floor(duration / target), 40);
      const timer = setInterval(() => {
        current += 1;
        el.textContent = current;
        if (current >= target) clearInterval(timer);
      }, stepTime);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

counters.forEach(el => counterObserver.observe(el));


// ANIMATED SKILL BARS

const skillBars = document.querySelectorAll('.skill-bar');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const level = bar.dataset.level;
      const fill = bar.querySelector('.skill-bar__fill');
      requestAnimationFrame(() => { fill.style.width = `${level}%`; });
      skillObserver.unobserve(bar);
    }
  });
}, { threshold: 0.4 });

skillBars.forEach(bar => skillObserver.observe(bar));


// HERO TERMINAL TYPING ANIMATION

const terminalBody = document.getElementById('terminal-body');

const terminalScript = [
  { type: 'cmd', text: 'whoami' },
  { type: 'out', text: 'Karishma Rajput — Software Developer / Data Science Engineer' },
  { type: 'cmd', text: 'cat focus.txt' },
  { type: 'out', text: 'Full-stack apps · ML pipelines · BI dashboards' },
  { type: 'cmd', text: 'ls skills/' },
  { type: 'out', text: 'react  node  python  cpp  power-bi  ml  dsa' },
  { type: 'cmd', text: 'status --availability' },
  { type: 'out', text: 'Open to SDE & Data Science roles ✓', highlight: true },
];

function typeLine(lineEl, text, speed, onDone) {
  let i = 0;
  const interval = setInterval(() => {
    lineEl.textContent += text.charAt(i);
    i++;
    if (i >= text.length) {
      clearInterval(interval);
      if (onDone) onDone();
    }
  }, speed);
}

function runTerminal(script, index = 0) {
  if (!terminalBody) return;
  if (index >= script.length) {
    // loop with a pause
    setTimeout(() => {
      terminalBody.innerHTML = '';
      runTerminal(script, 0);
    }, 3200);
    return;
  }

  const item = script[index];

  if (item.type === 'cmd') {
    const line = document.createElement('div');
    const prompt = document.createElement('span');
    prompt.className = 't-prompt';
    prompt.textContent = '$ ';
    const cmdSpan = document.createElement('span');
    cmdSpan.className = 't-cmd';
    const cursor = document.createElement('span');
    cursor.className = 'terminal__cursor';

    line.appendChild(prompt);
    line.appendChild(cmdSpan);
    line.appendChild(cursor);
    terminalBody.appendChild(line);

    typeLine(cmdSpan, item.text, 55, () => {
      cursor.remove();
      setTimeout(() => runTerminal(script, index + 1), 350);
    });
  } else {
    const out = document.createElement('span');
    out.className = 't-out';
    if (item.highlight) out.style.color = 'var(--teal)';
    terminalBody.appendChild(out);
    typeLine(out, item.text, 14, () => {
      setTimeout(() => runTerminal(script, index + 1), 500);
    });
  }
}

// Start terminal once hero is visible
const heroVisual = document.getElementById('terminal');
if (heroVisual) {
  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        runTerminal(terminalScript);
        heroObserver.disconnect();
      }
    });
  }, { threshold: 0.3 });
  heroObserver.observe(heroVisual);
}


// SMOOTH SCROLL for in-page anchors (fallback for older browsers)

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId.length > 1) {
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});