import { useState, useCallback, useRef } from 'react';
import { Card, MaterialSymbol, Snackbar, SnackbarWrapper } from 'react-material-expressive';
import AnnouncementBar from './components/AnnouncementBar.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import BouquetCard from './components/BouquetCard.jsx';
import CartPanel from './components/CartPanel.jsx';
import Footer from './components/Footer.jsx';
import { flyToCart } from './flyToCart.js';

const BOUQUETS = [
  { id: 1, name: 'Blush Hour', price: 54.99, description: 'Blush garden roses, pale ranunculus and ivory sweet peas with silvery eucalyptus.', image: '/img/bouquets/blush-hour.jpg' },
  { id: 2, name: 'Citrus Sunrise', price: 39.99, description: 'Orange ranunculus, yellow tulips, white chamomile and golden solidago.', image: '/img/bouquets/citrus-sunrise.jpg' },
  { id: 3, name: 'Moonlit Meadow', price: 49.99, description: 'Blue delphinium, white lisianthus, lavender scabiosa and dusty miller.', image: '/img/bouquets/moonlit-meadow.jpg' },
  { id: 4, name: 'Wild at Heart', price: 44.99, description: 'Cosmos, cornflowers, snapdragons, feverfew and wild grasses — a field in a vase.', image: '/img/bouquets/wild-at-heart.jpg' },
  { id: 5, name: 'Velvet Nocturne', price: 64.99, description: 'Wine dahlias, plum calla lilies, dark red roses and burgundy smoke bush.', image: '/img/bouquets/velvet-nocturne.jpg' },
  { id: 6, name: 'Cloud Nine', price: 59.99, description: "White hydrangeas, ivory roses, lisianthus and baby's breath. A classic.", image: '/img/bouquets/cloud-nine.jpg' },
  { id: 7, name: 'Peach Picnic', price: 42.99, description: 'Peach garden roses, apricot stock, coral carnations and fresh mint.', image: '/img/bouquets/peach-picnic.jpg' },
  { id: 8, name: 'Coastal Calm', price: 52.99, description: 'Powder-blue hydrangeas, white roses, globe thistle and eucalyptus.', image: '/img/bouquets/coastal-calm.jpg' },
  { id: 9, name: 'Cherry Fizz', price: 38.99, description: 'Cherry-red tulips, hot-pink spray roses, coral gerberas and waxflower.', image: '/img/bouquets/cherry-fizz.jpg' },
  { id: 10, name: 'Greenhouse Modern', price: 69.99, description: 'Coral anthuriums, phalaenopsis orchids and sculptural monstera leaves.', image: '/img/bouquets/greenhouse-modern.jpg' },
  { id: 11, name: 'Lavender Letter', price: 36.99, description: 'Lavender, lilac, purple stock, violet statice and fragrant rosemary.', image: '/img/bouquets/lavender-letter.jpg' },
  { id: 12, name: 'Golden Hour', price: 46.99, description: 'Sunflowers, mustard chrysanthemums, burnt-orange roses, wheat and olive.', image: '/img/bouquets/golden-hour.jpg' },
  { id: 13, name: 'Tiny Joys', price: 29.99, description: 'Petite spray roses, lavender asters, craspedia and pastel mini carnations.', image: '/img/bouquets/tiny-joys.jpg' },
  { id: 14, name: 'Forever Field', price: 49.99, description: 'Dried pampas, strawflowers, bunny-tail grass and preserved eucalyptus.', image: '/img/bouquets/forever-field.jpg' },
  { id: 15, name: 'After the Rain', price: 47.99, description: 'Deep-blue iris, delphinium, white tulips, ferns and eucalyptus.', image: '/img/bouquets/after-the-rain.jpg' },
];

const FEATURES = [
  { icon: 'local_florist', title: 'Fresh Daily', body: 'Flowers arrive from local Marin growers every single morning.' },
  { icon: 'local_shipping', title: 'Free Delivery', body: 'Free same-day delivery in San Anselmo on orders over $50.' },
  { icon: 'favorite', title: 'Hand-Tied With Love', body: 'Every bouquet is arranged by hand in our little shop on San Anselmo Ave.' },
];

const TESTIMONIALS = [
  { quote: '“The Coral Charm bouquet made my wife cry happy tears. Best florist in Marin!”', author: '— Daniel R., San Anselmo' },
  { quote: '“Ordered at noon, flowers on my mom’s doorstep by 4. Absolutely beautiful.”', author: '— Priya S., Fairfax' },
  { quote: '“Bloom & Petal did the flowers for our wedding. Everyone still talks about them.”', author: '— Megan & Chris T.' },
];

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '' });
  const cartIconRef = useRef(null);

  const showSnackbar = useCallback((message) => {
    setSnackbar({ open: true, message });
  }, []);

  const handleAddToCart = useCallback((bouquet, sourceEl) => {
    flyToCart(sourceEl, cartIconRef.current);
    setCartItems((items) => {
      const existing = items.find((it) => it.bouquet.id === bouquet.id);
      if (existing) {
        return items.map((it) =>
          it.bouquet.id === bouquet.id ? { ...it, quantity: it.quantity + 1 } : it,
        );
      }
      return [...items, { bouquet, quantity: 1 }];
    });
    showSnackbar(`Added “${bouquet.name}” to your cart`);
  }, [showSnackbar]);

  const handleChangeQty = useCallback((id, delta) => {
    setCartItems((items) =>
      items
        .map((it) => (it.bouquet.id === id ? { ...it, quantity: it.quantity + delta } : it))
        .filter((it) => it.quantity > 0),
    );
  }, []);

  const handleRemove = useCallback((id) => {
    setCartItems((items) => items.filter((it) => it.bouquet.id !== id));
  }, []);

  const handleCheckout = useCallback(() => {
    showSnackbar('Online checkout is coming soon! Call us at (415) 555-0142 to order.');
  }, [showSnackbar]);

  const cartCount = cartItems.reduce((sum, it) => sum + it.quantity, 0);

  return (
    <>
      <AnnouncementBar />
      <Header cartCount={cartCount} onCartClick={() => setCartOpen(true)} cartIconRef={cartIconRef} />
      <Hero />

      <section className="features">
        <div className="section">
          <div className="features-grid">
            {FEATURES.map((feature) => (
              <Card key={feature.title} variant="elevated" className="feature">
                <span className="feature__icon">
                  <MaterialSymbol name={feature.icon} size={34} />
                </span>
                <h3 className="feature__title">{feature.title}</h3>
                <p className="feature__body">{feature.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="catalogue" id="shop">
        <div className="section">
          <p className="section__eyebrow">Shop</p>
          <h2 className="section__title">Our Bouquets</h2>
          <p className="section__subtitle">
            Hand-tied fresh every morning — order by 2pm for same-day delivery.
          </p>
          <div className="catalogue-grid">
            {BOUQUETS.map((bouquet) => (
              <BouquetCard key={bouquet.id} bouquet={bouquet} onAddToCart={handleAddToCart} />
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="section">
          <p className="section__eyebrow">Kind words</p>
          <h2 className="section__title">What Our Customers Say</h2>
          <div className="testimonial-grid">
            {TESTIMONIALS.map((testimonial) => (
              <Card key={testimonial.author} variant="outlined">
                <p className="testimonial__quote">{testimonial.quote}</p>
                <span className="testimonial__author">{testimonial.author}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer onSubscribe={() => showSnackbar('Thanks for subscribing! 🌸')} />

      <CartPanel
        open={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onChangeQty={handleChangeQty}
        onRemove={handleRemove}
        onCheckout={handleCheckout}
      />

      <SnackbarWrapper>
        <Snackbar
          isVisible={snackbar.open}
          text={snackbar.message}
          autoHideDuration={2750}
          showClose
          onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
        />
      </SnackbarWrapper>
    </>
  );
}
