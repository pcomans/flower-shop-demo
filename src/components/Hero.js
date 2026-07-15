import React, { Component } from 'react';

var PROMOS = [
  '🌸 Free same-day delivery on orders over $50!',
  '💐 Wedding season is here — book a free consultation!',
  '🌹 Join our loyalty club and get 10% off your first bouquet!'
];

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = { promoIndex: 0 };
  }

  componentDidMount() {
    var self = this;
    this.timer = setInterval(function () {
      self.setState({ promoIndex: (self.state.promoIndex + 1) % PROMOS.length });
    }, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="hero" id="top">
        <div className="hero__overlay">
          <div className="hero__panel">
            <h1 className="hero__title">Bloom &amp; Petal</h1>
            <p className="hero__tagline">Fresh flowers, hand-tied daily in San Anselmo</p>
            <a href="#shop" className="mdl-button mdl-js-button mdl-js-ripple-effect hero__cta">
              Shop Bouquets
            </a>
          </div>
          <br />
          <p className="hero__promo">{PROMOS[this.state.promoIndex]}</p>
        </div>
      </div>
    );
  }
}

export default Hero;
