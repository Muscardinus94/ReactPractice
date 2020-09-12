import React from 'react';

import {SpinnerOverlay, SpinnerContainer} from './with-spinner.styles.jsx';

const WithSpinner = (WrappedComponent) => ({isLoading, ...otherProps}) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;