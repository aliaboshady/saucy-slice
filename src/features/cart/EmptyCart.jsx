import LineButton from '../../ui/LineButton';

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <LineButton to="/menu">&larr; Back to menu</LineButton>

      <p className="mt-7 font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
