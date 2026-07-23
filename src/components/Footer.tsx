import type { FormEvent } from 'react';
import { Button, InputOutlined, MaterialSymbol } from 'react-material-expressive';

interface FooterProps {
  onSubscribe: () => void;
}

export default function Footer({ onSubscribe }: FooterProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubscribe();
  };

  return (
    <footer className="site-footer" id="contact">
      <div className="site-footer__inner">
        <div>
          <h4><MaterialSymbol name="location_on" size={18} /> Visit Us</h4>
          <ul>
            <li>742 San Anselmo Ave</li>
            <li>San Anselmo, CA 94960</li>
            <li><a href="tel:+14155550142">(415) 555-0142</a></li>
            <li><a href="mailto:hello@bloomandpetal.com">hello@bloomandpetal.com</a></li>
          </ul>
        </div>
        <div>
          <h4><MaterialSymbol name="schedule" size={18} /> Hours</h4>
          <ul>
            <li>Mon–Fri: 9am – 6pm</li>
            <li>Saturday: 9am – 5pm</li>
            <li>Sunday: 10am – 3pm</li>
          </ul>
        </div>
        <div>
          <h4><MaterialSymbol name="favorite" size={18} /> Follow Us</h4>
          <div className="site-footer__socials">
            <a href="https://www.instagram.com/">
              Instagram <MaterialSymbol name="arrow_outward" size={16} />
            </a>
            <a href="https://www.facebook.com/">
              Facebook <MaterialSymbol name="arrow_outward" size={16} />
            </a>
            <a href="https://www.pinterest.com/">
              Pinterest <MaterialSymbol name="arrow_outward" size={16} />
            </a>
          </div>
        </div>
        <div>
          <h4><MaterialSymbol name="mail" size={18} /> Newsletter</h4>
          <p className="site-footer__blurb">
            Weekly specials &amp; flower care tips, straight to your inbox.
          </p>
          <form className="site-footer__newsletter" onSubmit={handleSubmit}>
            <InputOutlined label="Your email" type="email" />
            <Button type="submit" variant="tonal">Sign Up</Button>
          </form>
        </div>
      </div>
      <div className="site-footer__bottom">
        <div className="brand-logo site-footer__logo">Bloom &amp; Petal</div>
        <p>© 2026 Bloom &amp; Petal. All rights reserved.</p>
      </div>
    </footer>
  );
}
