import { Button, MaterialSymbol } from 'react-material-expressive';

export default function Hero() {
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
      </div>
    </section>
  );
}
