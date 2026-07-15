import { useRef } from 'react';
import { Button, Card, MaterialSymbol } from 'react-material-expressive';

export default function BouquetCard({ bouquet, onAddToCart }) {
  const imgRef = useRef(null);

  return (
    <Card variant="elevated" className="bouquet-card">
      <div className="bouquet-card__media">
        <img ref={imgRef} src={bouquet.image} alt={bouquet.name} loading="lazy" />
      </div>
      <div className="bouquet-card__content">
        <h3 className="bouquet-card__name">{bouquet.name}</h3>
        <p className="bouquet-card__desc">{bouquet.description}</p>
        <div className="bouquet-card__footer">
          <span className="bouquet-card__price">${bouquet.price.toFixed(2)}</span>
          <Button
            variant="tonal"
            iconLeft={<MaterialSymbol name="add_shopping_cart" size={18} />}
            onClick={() => onAddToCart(bouquet, imgRef.current)}
          >
            Add
          </Button>
        </div>
      </div>
    </Card>
  );
}
