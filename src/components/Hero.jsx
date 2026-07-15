import { useEffect, useState } from 'react';
import { Button, MaterialSymbol } from 'react-material-expressive';

const PROMOS = [
  'Free same-day delivery on orders over $50!',
  'Wedding season is here — book a free consultation!',
  'Join our loyalty club and get 10% off your first bouquet!',
];

export default function Hero() {
  const [promoIndex, setPromoIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPromoIndex((index) => (index + 1) % PROMOS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const scrollToShop = () => {
    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="top">
      <div className="hero__panel">
        <p className="section__eyebrow">San Anselmo · Marin County</p>
        <h1 className="hero__title brand-logo">Bloom &amp; Petal</h1>
        <p className="hero__tagline">Fresh flowers, hand-tied daily.</p>
        <Button
          size="l"
          iconLeft={<MaterialSymbol name="local_florist" size={24} />}
          onClick={scrollToShop}
        >
          Shop Bouquets
        </Button>
        <p className="hero__promo">{PROMOS[promoIndex]}</p>
      </div>
    </section>
  );
}
