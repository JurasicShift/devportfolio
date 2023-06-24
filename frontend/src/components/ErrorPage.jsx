import React from 'react';
import './ErrorPage.css';
import PropTypes from 'prop-types';

const ErrorFallback = ({ error }) => {
  return (
    <div>
      <h1>Error</h1>
      <p>{error.message}</p>
      {error.stack && <pre>{error.stack}</pre>}
      <button onClick={() => window.location.reload()}>Refresh</button>
    </div>
  );
};

ErrorFallback.propTypes = {
    error: PropTypes.object
}

export default ErrorFallback;
