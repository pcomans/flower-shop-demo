import React, { Component } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BouquetCard from './components/BouquetCard';
import CartPanel from './components/CartPanel';
import Footer from './components/Footer';
import './App.css';

var BOUQUETS = [
  { id: 1, name: 'Blush Hour', price: 54.99, description: 'Blush garden roses, pale ranunculus and ivory sweet peas with silvery eucalyptus.', image: '/img/bouquets/blush-hour.jpg' },
  { id: 2, name: 'Citrus Sunrise', price: 39.99, description: 'Orange ranunculus, yellow tulips, white chamomile and golden solidago.', image: '/img/bouquets/citrus-sunrise.jpg' },
  { id: 3, name: 'Moonlit Meadow', price: 49.99, description: 'Blue delphinium, white lisianthus, lavender scabiosa and dusty miller.', image: '/img/bouquets/moonlit-meadow.jpg' },
  { id: 4, name: 'Wild at Heart', price: 44.99, description: 'Cosmos, cornflowers, snapdragons, feverfew and wild grasses — a field in a vase.', image: '/img/bouquets/wild-at-heart.jpg' },
  { id: 5, name: 'Velvet Nocturne', price: 64.99, description: 'Wine dahlias, plum calla lilies, dark red roses and burgundy smoke bush.', image: '/img/bouquets/velvet-nocturne.jpg' },
  { id: 6, name: 'Cloud Nine', price: 59.99, description: 'White hydrangeas, ivory roses, lisianthus and baby\'s breath. A classic.', image: '/img/bouquets/cloud-nine.jpg' },
  { id: 7, name: 'Peach Picnic', price: 42.99, description: 'Peach garden roses, apricot stock, coral carnations and fresh mint.', image: '/img/bouquets/peach-picnic.jpg' },
  { id: 8, name: 'Coastal Calm', price: 52.99, description: 'Powder-blue hydrangeas, white roses, globe thistle and eucalyptus.', image: '/img/bouquets/coastal-calm.jpg' },
  { id: 9, name: 'Cherry Fizz', price: 38.99, description: 'Cherry-red tulips, hot-pink spray roses, coral gerberas and waxflower.', image: '/img/bouquets/cherry-fizz.jpg' },
  { id: 10, name: 'Greenhouse Modern', price: 69.99, description: 'Coral anthuriums, phalaenopsis orchids and sculptural monstera leaves.', image: '/img/bouquets/greenhouse-modern.jpg' },
  { id: 11, name: 'Lavender Letter', price: 36.99, description: 'Lavender, lilac, purple stock, violet statice and fragrant rosemary.', image: '/img/bouquets/lavender-letter.jpg' },
  { id: 12, name: 'Golden Hour', price: 46.99, description: 'Sunflowers, mustard chrysanthemums, burnt-orange roses, wheat and olive.', image: '/img/bouquets/golden-hour.jpg' },
  { id: 13, name: 'Tiny Joys', price: 29.99, description: 'Petite spray roses, lavender asters, craspedia and pastel mini carnations.', image: '/img/bouquets/tiny-joys.jpg' },
  { id: 14, name: 'Forever Field', price: 49.99, description: 'Dried pampas, strawflowers, bunny-tail grass and preserved eucalyptus.', image: '/img/bouquets/forever-field.jpg' },
  { id: 15, name: 'After the Rain', price: 47.99, description: 'Deep-blue iris, delphinium, white tulips, ferns and eucalyptus.', image: '/img/bouquets/after-the-rain.jpg' }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      cartOpen: false
    };
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleToggleCart = this.handleToggleCart.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);
    this.setSnackbarRef = this.setSnackbarRef.bind(this);
  }

  componentDidMount() {
    // MDL needs to be told about DOM rendered by React
    if (window.componentHandler) {
      window.componentHandler.upgradeDom();
    }
  }

  componentDidUpdate() {
    if (window.componentHandler) {
      window.componentHandler.upgradeDom();
    }
  }

  setSnackbarRef(el) {
    this.snackbarEl = el;
  }

  showSnackbar(message) {
    if (this.snackbarEl && this.snackbarEl.MaterialSnackbar) {
      this.snackbarEl.MaterialSnackbar.showSnackbar({ message: message, timeout: 2750 });
    }
  }

  handleAddToCart(bouquet) {
    var cartItems = this.state.cartItems.slice();
    var existing = null;
    for (var i = 0; i < cartItems.length; i++) {
      if (cartItems[i].bouquet.id === bouquet.id) {
        existing = cartItems[i];
      }
    }
    if (existing) {
      existing.quantity += 1;
    } else {
      cartItems.push({ bouquet: bouquet, quantity: 1 });
    }
    this.setState({ cartItems: cartItems });
    this.showSnackbar('Added "' + bouquet.name + '" to your cart');
  }

  handleRemoveFromCart(bouquetId) {
    var cartItems = this.state.cartItems.filter(function (item) {
      return item.bouquet.id !== bouquetId;
    });
    this.setState({ cartItems: cartItems });
  }

  handleToggleCart() {
    this.setState({ cartOpen: !this.state.cartOpen });
  }

  handleCheckout() {
    this.showSnackbar('Online checkout is coming soon! Call us at (415) 555-0142 to order.');
  }

  render() {
    var cartCount = this.state.cartItems.reduce(function (sum, item) {
      return sum + item.quantity;
    }, 0);

    return (
      <div className="App">
        <Header cartCount={cartCount} onCartClick={this.handleToggleCart} />
        <Hero />

        <section className="features">
          <div className="mdl-grid features__grid">
            <div className="mdl-cell mdl-cell--4-col feature">
              <i className="material-icons feature__icon">local_florist</i>
              <h4>Fresh Daily</h4>
              <p>Flowers arrive from local Marin growers every single morning.</p>
            </div>
            <div className="mdl-cell mdl-cell--4-col feature">
              <i className="material-icons feature__icon">local_shipping</i>
              <h4>Free Delivery</h4>
              <p>Free same-day delivery in San Anselmo on orders over $50.</p>
            </div>
            <div className="mdl-cell mdl-cell--4-col feature">
              <i className="material-icons feature__icon">favorite</i>
              <h4>Hand-Tied With Love</h4>
              <p>Every bouquet is arranged by hand in our little shop on San Anselmo Ave.</p>
            </div>
          </div>
        </section>

        <section className="catalogue" id="shop">
          <h2 className="section-title">Our Bouquets</h2>
          <p className="section-subtitle">Hand-tied fresh every morning — order by 2pm for same-day delivery</p>
          <div className="mdl-grid catalogue__grid">
            {BOUQUETS.map(function (bouquet) {
              return (
                <div className="mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet" key={bouquet.id}>
                  <BouquetCard bouquet={bouquet} onAddToCart={this.handleAddToCart} />
                </div>
              );
            }, this)}
          </div>
        </section>

        <section className="testimonials">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--4-col testimonial">
              <p>&ldquo;The Coral Charm bouquet made my wife cry happy tears. Best florist in Marin!&rdquo;</p>
              <span className="testimonial__author">— Daniel R., San Anselmo</span>
            </div>
            <div className="mdl-cell mdl-cell--4-col testimonial">
              <p>&ldquo;Ordered at noon, flowers on my mom's doorstep by 4. Absolutely beautiful.&rdquo;</p>
              <span className="testimonial__author">— Priya S., Fairfax</span>
            </div>
            <div className="mdl-cell mdl-cell--4-col testimonial">
              <p>&ldquo;Bloom &amp; Petal did the flowers for our wedding. Everyone still talks about them.&rdquo;</p>
              <span className="testimonial__author">— Megan &amp; Chris T.</span>
            </div>
          </div>
        </section>

        <Footer />

        <CartPanel
          open={this.state.cartOpen}
          items={this.state.cartItems}
          onClose={this.handleToggleCart}
          onRemove={this.handleRemoveFromCart}
          onCheckout={this.handleCheckout}
        />

        <div ref={this.setSnackbarRef} className="mdl-js-snackbar mdl-snackbar" aria-live="assertive" aria-atomic="true" aria-relevant="text">
          <div className="mdl-snackbar__text"></div>
          <button className="mdl-snackbar__action" type="button"></button>
        </div>
      </div>
    );
  }
}

export default App;
