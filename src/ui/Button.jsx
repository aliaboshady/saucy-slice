import { Link } from 'react-router-dom';

export default function Button({ children, disabled, to, type, onClick }) {
  const base =
    'text-stone-800 text-sm hover:bg-yellow-300 disabled:cursor-not-allowed focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 inline-block font-semibold tracking-wide uppercase transition-colors duration-300 bg-yellow-400 rounded-full';

  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
    round: base + ' px-2.5 py-1 md:px-3.5 md:py-2 text-s',
    roundDisabled:
      'text-stone-800 text-sm hover:bg-stone-500 disabled:cursor-not-allowed focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 inline-block font-semibold tracking-wide uppercase transition-colors duration-300 bg-stone-500 rounded-full px-2.5 py-1 md:px-3.5 md:py-2',
    secondary:
      ' text-stone-400 text-sm hover:bg-stone-300 hover:text-stone-800 disabled:cursor-not-allowed focus:outline-none focus:ring focus:ring-stone-200 focus:bg-stone-300 focus:ring-offset-2 focus:text-stone-800 inline-block font-semibold tracking-wide uppercase transition-colors duration-300 bg-transparent rounded-full border-2 border-stone-300 px-4 py-2.5 md:px-6 md:py-3.5',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
