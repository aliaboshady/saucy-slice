import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function LineButton({ children, to }) {
  const navigate = useNavigate();
  const className = 'hover:text-blue-600 hover:underline text-sm text-blue-500';

  if (to === '-1')
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}
