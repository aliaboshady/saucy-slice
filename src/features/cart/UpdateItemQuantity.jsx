import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

export default function UpdateItemQuantity({ item }) {
  const { pizzaId, quantity } = item;
  const dispatch = useDispatch();

  return (
    <div className="md:gap-3 flex items-center gap-2">
      {quantity <= 1 ? (
        <Button type="roundDisabled" disabled={true}>
          -
        </Button>
      ) : (
        <Button
          type="round"
          onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
        >
          -
        </Button>
      )}

      <span className="text-sm font-medium">{quantity}</span>

      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}
