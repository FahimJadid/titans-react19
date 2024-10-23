import { isRouteErrorResponse, NavLink, useRouteError } from "react-router-dom";

const ErrorBoundary = () => {
    const error = useRouteError();
    if (isRouteErrorResponse(error)) {
      return (
        <div className="error-page">
          <h1>Oops!</h1>
          <h2>{error.status}</h2>
          <p>{error.statusText}</p>
          {error.data?.message && <p>{error.data.message}</p>}
          <NavLink to="/">
            <button>Go Home</button>
          </NavLink>
        </div>
      );
    } else {
      return <div className="error-page">Oops Something Went berserk!</div>;
    }
  };
  
  export default ErrorBoundary;