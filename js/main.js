/* Apply saved theme before paint to avoid flash */
(function() {
  const saved = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
})();

document.addEventListener('DOMContentLoaded', function() {
  const root = document.documentElement;

  /* --- Theme toggle --- */
  const toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) {
    function updateToggleLabel() {
      const isDark = root.getAttribute('data-theme') === 'dark';
      toggleBtn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
      toggleBtn.setAttribute('title', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    }

    updateToggleLabel();

    toggleBtn.addEventListener('click', function() {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      updateToggleLabel();
    });
  }

  /* --- Active nav link --- */
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function(link) {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  /* --- Typing animation (home page only) --- */
  const typedEl = document.getElementById('typed-tagline');
  if (!typedEl) return;

  const phrases = [
    'software engineer',
    'problem solver',
    'builder of things',
  ];

  let phraseIdx = 0;
  let charIdx = 0;
  let deleting = false;
  let hold = false;

  function tick() {
    if (hold) return;

    const current = phrases[phraseIdx];

    if (!deleting) {
      typedEl.textContent = current.slice(0, charIdx + 1);
      charIdx++;
      if (charIdx >= current.length) {
        hold = true;
        setTimeout(function() { hold = false; deleting = true; tick(); }, 2400);
        return;
      }
    } else {
      typedEl.textContent = current.slice(0, charIdx - 1);
      charIdx--;
      if (charIdx <= 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
      }
    }

    setTimeout(tick, deleting ? 40 : 78);
  }

  tick();
});
