import { Button, IconButton, MaterialSymbol, SideSheet } from 'react-material-expressive';

export default function CartPanel({ open, items, onClose, onChangeQty, onRemove, onCheckout }) {
  const total = items.reduce((sum, item) => sum + item.bouquet.price * item.quantity, 0);

  return (
    <SideSheet closeButton isVisible={open} onClose={onClose} title="Your Cart">
      {items.length === 0 ? (
        <p className="cart__empty">Your cart is empty. Go pick some flowers! 🌷</p>
      ) : (
        <div className="cart">
          <ul className="cart__list">
            {items.map((item) => (
              <li key={item.bouquet.id} className="cart__item">
                <span className="cart__item-info">
                  <span className="cart__item-name">{item.bouquet.name}</span>
                  <br />
                  <span className="cart__item-price">
                    ${(item.bouquet.price * item.quantity).toFixed(2)}
                  </span>
                </span>
                <span className="cart__qty">
                  <IconButton
                    size="xs"
                    variant="standard"
                    aria-label={`Remove one ${item.bouquet.name}`}
                    icon={<MaterialSymbol name="remove" size={18} />}
                    onClick={() => onChangeQty(item.bouquet.id, -1)}
                  />
                  <span className="cart__qty-value">{item.quantity}</span>
                  <IconButton
                    size="xs"
                    variant="standard"
                    aria-label={`Add one ${item.bouquet.name}`}
                    icon={<MaterialSymbol name="add" size={18} />}
                    onClick={() => onChangeQty(item.bouquet.id, 1)}
                  />
                </span>
                <IconButton
                  size="xs"
                  variant="standard"
                  aria-label={`Remove ${item.bouquet.name} from cart`}
                  icon={<MaterialSymbol name="delete" size={18} />}
                  onClick={() => onRemove(item.bouquet.id)}
                />
              </li>
            ))}
          </ul>
          <div className="cart__total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="cart__checkout">
            <Button
              size="m"
              iconLeft={<MaterialSymbol name="local_mall" size={20} />}
              onClick={onCheckout}
              style={{ width: '100%' }}
            >
              Checkout
            </Button>
          </div>
        </div>
      )}
    </SideSheet>
  );
}
