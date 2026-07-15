import React, { Component } from 'react';
import BouquetArt from './BouquetArt';

class BouquetCard extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onAddToCart(this.props.bouquet);
  }

  render() {
    var bouquet = this.props.bouquet;
    return (
      <div className="mdl-card mdl-shadow--2dp bouquet-card">
        <div className="mdl-card__media bouquet-card__media">
          <BouquetArt name={bouquet.name} petals={bouquet.petals} />
        </div>
        <div className="mdl-card__title">
          <h2 className="mdl-card__title-text">{bouquet.name}</h2>
        </div>
        <div className="mdl-card__supporting-text">
          {bouquet.description}
        </div>
        <div className="mdl-card__actions mdl-card--border bouquet-card__actions">
          <span className="bouquet-card__price">${bouquet.price.toFixed(2)}</span>
          <button
            className="mdl-button mdl-js-button mdl-button--colored mdl-js-ripple-effect"
            onClick={this.handleClick}
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
}

BouquetCard.propTypes = {
  bouquet: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    price: React.PropTypes.number.isRequired,
    description: React.PropTypes.string.isRequired,
    petals: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
  }).isRequired,
  onAddToCart: React.PropTypes.func.isRequired
};

export default BouquetCard;
