import React from 'react';

function Footer() {
  return (
    <footer className="mdl-mega-footer site-footer" id="contact">
      <div className="mdl-mega-footer__middle-section">
        <div className="mdl-mega-footer__drop-down-section">
          <h1 className="mdl-mega-footer__heading">Visit Us</h1>
          <ul className="mdl-mega-footer__link-list">
            <li>742 San Anselmo Ave</li>
            <li>San Anselmo, CA 94960</li>
            <li>(415) 555-0142</li>
            <li>hello@bloomandpetal.com</li>
          </ul>
        </div>
        <div className="mdl-mega-footer__drop-down-section">
          <h1 className="mdl-mega-footer__heading">Hours</h1>
          <ul className="mdl-mega-footer__link-list">
            <li>Mon–Fri: 9am – 6pm</li>
            <li>Saturday: 9am – 5pm</li>
            <li>Sunday: 10am – 3pm</li>
          </ul>
        </div>
        <div className="mdl-mega-footer__drop-down-section">
          <h1 className="mdl-mega-footer__heading">Follow Us</h1>
          <ul className="mdl-mega-footer__link-list">
            <li><a href="https://www.facebook.com/">Facebook</a></li>
            <li><a href="https://twitter.com/">Twitter</a></li>
            <li><a href="https://www.instagram.com/">Instagram</a></li>
            <li><a href="https://plus.google.com/">Google+</a></li>
          </ul>
        </div>
        <div className="mdl-mega-footer__drop-down-section">
          <h1 className="mdl-mega-footer__heading">Newsletter</h1>
          <p className="site-footer__blurb">Weekly specials &amp; flower care tips, straight to your inbox.</p>
          <div className="mdl-textfield mdl-js-textfield site-footer__newsletter">
            <input className="mdl-textfield__input" type="email" id="newsletter-email" />
            <label className="mdl-textfield__label" htmlFor="newsletter-email">Your email…</label>
          </div>
          <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
            Sign Up
          </button>
        </div>
      </div>
      <div className="mdl-mega-footer__bottom-section">
        <div className="mdl-logo">Bloom &amp; Petal</div>
        <ul className="mdl-mega-footer__link-list">
          <li>© 2016 Bloom &amp; Petal. All rights reserved.</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
