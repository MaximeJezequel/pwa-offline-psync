import React from 'react';

import './Footer.scss';

const Footer = ({
  darkMode,
  toggleDarkMode,
  handleFR,
  setPage,
  setShowGamepad,
  gamepad
}) => {
  const darkLightSwitch = () => {
    toggleDarkMode(!darkMode);
  };
  return (
    <div
      className={darkMode ? 'footer black' : 'footer'}
      onClick={(event) => event.stopPropagation()}
    >
      <div
        className={darkMode ? 'footer-row darkbottom' : 'footer-row'}
        onClick={() => handleFR()}
      >
        France
      </div>
      <div className="footer-wrapper">
        <div
          className="footer-item"
          onClick={() => darkLightSwitch()}
        >{`Thème sombre : ${darkMode ? 'activé' : 'désactivé'}`}</div>
        <div className="footer-item">Paramètres</div>
        <div className="footer-item" onClick={() => setPage()}>
          Confidentialité
        </div>
        {gamepad ? (
          <div className="footer-item" onClick={() => setShowGamepad(true)}>
            Connecté
          </div>
        ) : (
          <div className="footer-item" onClick={() => setShowGamepad(true)}>
            Conditions
          </div>
        )}
      </div>
    </div>
  );
};

export default Footer;
