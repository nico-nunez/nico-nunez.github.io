class Navbar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <nav class="nav-bar" aria-label="Primary navigation">
      <a href="index.html" class="nav-brand" aria-label="Home">
        <span class="nb-bracket">[</span><span class="nb-tilde">~/</span><span class="nb-path">nico-nunez</span><span
          class="nb-bracket">]</span>
      </a>
      <ul class="nav-links">
        <li><a href="about.html">$ about</a></li>
        <li><a href="projects.html">$ projects</a></li>
        <li><a href="resume.html">$ resumes</a></li>
        <li>
          <button class="theme-toggle" id="theme-toggle" type="button" aria-label="Switch to light mode"
            title="Switch to light mode">
            <!-- Moon icon (shown in dark mode) -->
            <svg class="icon-moon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
            <!-- Spiky sun with sunglasses (shown in light mode) -->
            <svg class="icon-sun" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor"
              stroke-width="1.75" stroke-linecap="round">
              <circle cx="12" cy="12" r="4.5" />
              <line x1="12" y1="1.5" x2="12" y2="4.5" />
              <line x1="12" y1="19.5" x2="12" y2="22.5" />
              <line x1="1.5" y1="12" x2="4.5" y2="12" />
              <line x1="19.5" y1="12" x2="22.5" y2="12" />
              <line x1="4.1" y1="4.1" x2="6.2" y2="6.2" />
              <line x1="17.8" y1="17.8" x2="19.9" y2="19.9" />
              <line x1="19.9" y1="4.1" x2="17.8" y2="6.2" />
              <line x1="6.2" y1="17.8" x2="4.1" y2="19.9" />
              <!-- sunglasses -->
              <rect x="9" y="11.2" width="2.6" height="1.8" rx="0.5" fill="currentColor" stroke="none" />
              <rect x="12.4" y="11.2" width="2.6" height="1.8" rx="0.5" fill="currentColor" stroke="none" />
              <line x1="11.6" y1="12.1" x2="12.4" y2="12.1" stroke-width="1.2" />
            </svg>
          </button>
        </li>
      </ul>
    </nav>`
  }
}

customElements.define("web-navbar", Navbar);
