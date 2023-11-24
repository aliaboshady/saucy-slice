import { formatCurrency } from '../../utils/helpers';
import DeleteItem from './DeleteItem';
import UpdateItemQuantity from './UpdateItemQuantity';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice, unitPrice } = item;

  return (
    <li className="sm:flex sm:items-center sm:justify-between py-3">
      <p className="sm:mb-0 mb-1">
        {quantity}&times; {name}
        <span className="text-stone-500/70 px-1">
          ({formatCurrency(unitPrice)} each)
        </span>
      </p>
      <div className="sm:gap-6 flex items-center justify-between">
        <DeleteItem pizzaId={pizzaId} />
        <UpdateItemQuantity item={item} />
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default CartItem;
