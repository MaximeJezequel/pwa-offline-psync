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
        className={darkMode ? 'footer-row black darkbottom' : 'footer-row'}
        onClick={() => handleFR()}
      >
        France
      </div>
      <div className={darkMode ? 'footer-3col black' : 'footer-3col'}>
        {/* <div className="footer-col">Dark theme: off</div> */}
        <div
          className={darkMode ? 'footer-col black' : 'footer-col'}
          onClick={() => darkLightSwitch()}
        >
          Paramètres
        </div>
        <div
          className={darkMode ? 'footer-col black' : 'footer-col'}
          onClick={() => setPage()}
        >
          Confidentialité
        </div>
        <div className={darkMode ? 'footer-col black' : 'footer-col'}>
          Conditions
        </div>
      </div>
    </div>
  );
};

export default Footer;
