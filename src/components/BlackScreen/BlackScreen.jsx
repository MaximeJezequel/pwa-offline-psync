import React from 'react';

import './BlackScreen.scss';

const BlackScreen = ({ setPage }) => {
  return (
    <div className="night">
      <div onClick={() => setPage()}>toggle</div>
    </div>
  );
};

export default BlackScreen;
