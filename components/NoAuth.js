/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function NoAuth({ component: Component, pageProps }) {
  return (
    <>
      <div className="container">
        <Component {...pageProps} />
      </div>
    </>
  );
}

NoAuth.propTypes = {
  component: PropTypes.func.isRequired,
  pageProps: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default NoAuth;
