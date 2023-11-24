import Button from '../../ui/Button';
import LineButton from '../../ui/LineButton';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearCart,
  getCart,
  getTotalCartPrice,
  getTotalCartQuantity,
} from './cartSlice';
import { formatCurrency } from '../../utils/helpers';

function Cart() {
  const cart = useSelector(getCart);
  const username = useSelector((state) => state.user.username);
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalPrice = useSelector(getTotalCartPrice);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LineButton to="/menu">&larr; Back to menu</LineButton>

      <h2 className="mt-7 text-sl font-semibold">Your cart, {username}</h2>

      <ul className="divide-stone-200 mt-3 border-b divide-y">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="bg-stone-200 px-6 py-5 space-y-2">
        <p className="text-stone-600 text-sm font-medium uppercase">
          {totalCartQuantity} Pizzas
        </p>
        <p className="font-bold">Subtotal: {formatCurrency(totalPrice)}</p>
      </div>

      <div className="mt-6 space-x-2">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>

        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
