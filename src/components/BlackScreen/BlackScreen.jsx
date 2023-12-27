import React from 'react';
import GamepadComponent from '../GamePad/GamepadComponent';

import './BlackScreen.scss';

const BlackScreen = ({ setPage }) => {
  const handleGoogleClick = () => {
    setPage()
  }
  return (
    <div className="night">
      <div onClick={() => handleGoogleClick()}>toggle</div>
      <GamepadComponent googleSearch = {handleGoogleClick}/>
    </div>
  );
};

export default BlackScreen;
