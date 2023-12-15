import React from 'react';

import './Header.scss';

const Header = ({
  darkMode,
  url,
  handleAll,
  handleImg,
  letter,
  setCount,
  total,
  setMaxTotal,
  initial,
  mode,
  setMode
}) => {
  const handleMode = () => {
    mode === 'words' ? activateMode2() : activateMode1();
  };

  const activateMode1 = () => {
    setMode('words');
    setCount(6);
    setMaxTotal(61);
  };
  const activateMode2 = () => {
    setMode('cards');
    setCount(6);
    setMaxTotal(61);
  };

  return (
    <div className="header">
      <div className="headerleft">
        <svg fill="#787878">
          <path
            d="
            M3 18h18v-2H3v2
            M3 13h18v-2H3v2
            M3 6v2h18V6H3
            "
          ></path>
        </svg>
        <p
          className={
            url === 0 || url === 2
              ? 'headerlefttitle headeractive'
              : 'headerlefttitle'
          }
          onClick={handleAll}
        >
          TOUS
        </p>
        <p
          className={
            url === 1 ? 'headerlefttitle headeractive' : 'headerlefttitle'
          }
          onClick={handleImg}
        >
          IMAGES
        </p>
      </div>
      <div className="headerright">
        <svg
          focusable="false"
          viewBox="0 0 24 24"
          fill={darkMode ? 'white' : '#787878'}
          onClick={handleMode}
        >
          <path
            d="
            M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2
            M12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2
            M6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2
            M6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2
            M12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2
            M16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2
            M12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2
            M18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2
            M18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2
            "
          ></path>
        </svg>
        <div className={`google-user ${mode}Mode`}>
          {letter > 0 ? total : initial}
        </div>
      </div>
    </div>
  );
};

export default Header;
