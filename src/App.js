import React, { Component } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BouquetCard from './components/BouquetCard';
import CartPanel from './components/CartPanel';
import Footer from './components/Footer';
import './App.css';

var BOUQUETS = [
  { id: 1, name: 'Blush Romance', price: 49.99, description: 'A dozen blush roses hand-tied with baby\'s breath and seeded eucalyptus.', petals: ['#F48FB1', '#F8BBD0', '#EC407A'] },
  { id: 2, name: 'Sunny Morning', price: 34.99, description: 'Cheerful sunflowers and yellow tulips to brighten any kitchen table.', petals: ['#FFD54F', '#FFB300', '#FFF176'] },
  { id: 3, name: 'Lavender Dream', price: 44.99, description: 'Fragrant lavender, lisianthus and purple stock in a rustic wrap.', petals: ['#B39DDB', '#9575CD', '#D1C4E9'] },
  { id: 4, name: 'Garden Party', price: 54.99, description: 'A mixed garden bouquet of peonies, ranunculus and sweet peas.', petals: ['#F06292', '#BA68C8', '#FFD54F'] },
  { id: 5, name: 'Coral Charm', price: 59.99, description: 'Statement coral peonies with garden roses and trailing greenery.', petals: ['#FF8A65', '#FF7043', '#FFAB91'] },
  { id: 6, name: 'White Whisper', price: 64.99, description: 'Elegant white lilies, roses and freesia — a classic for any occasion.', petals: ['#FAFAFA', '#F5F5F5', '#E1F5FE'] },
  { id: 7, name: 'Autumn Ember', price: 39.99, description: 'Burnt-orange dahlias, red hypericum berries and copper leaves.', petals: ['#FF7043', '#D84315', '#FFB300'] },
  { id: 8, name: 'Midnight Rose', price: 69.99, description: 'Deep red velvet roses with dark foliage. Dramatic and unforgettable.', petals: ['#C62828', '#B71C1C', '#E53935'] },
  { id: 9, name: 'Spring Fling', price: 29.99, description: 'A bright handful of daffodils, hyacinth and grape muscari.', petals: ['#FFF176', '#4FC3F7', '#AED581'] },
  { id: 10, name: 'Peony Parade', price: 74.99, description: 'Nothing but peonies. A lush, showstopping armful in pinks and creams.', petals: ['#F48FB1', '#FCE4EC', '#F06292'] }
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
