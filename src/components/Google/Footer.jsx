import React from 'react';

import './Footer.scss';

const Footer = ({ darkMode, toggleDarkMode, handleFR, setPage }) => {
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
      <div className="footer-3col">
        {/* <div className="footer-col">{`Thème sombre : ${
          darkMode ? 'activé' : 'désactivé'
        }`}</div> */}
        <div className="footer-col" onClick={() => darkLightSwitch()}>
          Paramètres
        </div>
        <div className="footer-col" onClick={() => setPage()}>
          Confidentialité
        </div>
        <div className="footer-col">Conditions</div>
      </div>
    </div>
  );
};

export default Footer;
