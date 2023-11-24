import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

export default function Header() {
  return (
    <header className="border-stone-200 sm:px-6 flex items-center justify-between px-4 py-3 uppercase bg-yellow-400 border-b">
      <Link to="/" className="tracking-widest">
        Saucy Slice
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}
