import React from 'react';

import './TouchAreas.scss';

const TouchAreas = ({ handleYes, handleNo }) => {
  return (
    <>
      <div className="ghostLeft" onClick={handleYes}></div>
      <div className="ghostRight" onClick={handleNo}></div>
    </>
  );
};

export default TouchAreas;
