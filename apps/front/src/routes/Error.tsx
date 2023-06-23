import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom';

export function Error () {
  const error = useRouteError();

  return (
    <div>
      <h2>Oops!</h2>
      <p>Sorry, an unexpected error has occurred.</p>
      {isRouteErrorResponse(error) && (
        <p>
          <i>{error.statusText}</i>
        </p>
      )}
      <p>
        <Link to={'/'}>
          Go to home page
        </Link>
      </p>
    </div>
  );
}
