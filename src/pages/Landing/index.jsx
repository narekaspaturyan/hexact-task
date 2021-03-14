import React from 'react';
import Header from 'components/layout/Header';

import LandingMain from './LandingMain';

export default (props) => {
  return (
    <>
      <Header />

      <div style={{ paddingTop: '112px' }}>
        <LandingMain {...props} />
      </div>
    </>
  );
};
