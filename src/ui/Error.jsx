import { useRouteError } from 'react-router-dom';
import LineButton from '../ui/LineButton';

function Error() {
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <LineButton to="-1">&larr; Go back</LineButton>
    </div>
  );
}

export default Error;
