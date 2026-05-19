class Footer extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<footer class="site-footer">
    <div class="footer-inner">
      <ul class="footer-links">
        <li><a href="https://github.com/nico-nunez" target="_blank" rel="noopener noreferrer">github</a></li>
        <li><a href="https://www.linkedin.com/in/nick-nunez-16986b351" target="_blank" rel="noopener noreferrer">linkedin</a></li>
        <li><a href="mailto:nick.nunez.dev@gmail.com">email</a></li>
      </ul>
      <p class="footer-copy">Nico Nunez &mdash; built with vanilla HTML/CSS/JS</p>
    </div>
  </footer>`
  }
}

customElements.define("web-footer", Footer);
