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
  user,
  setUser,
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

  const changeUser = (e) => {
    setUser(e.target.value.toUpperCase())
  };

  return (
    <div className="header">
      <div className="header-left">
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
          className={`header-left-title ${darkMode ? 'dark' : ''} ${
            url !== 0 && url !== 2 ? 'headerinactive' : ''
          } `}
          onClick={handleAll}
        >
          &nbsp;&nbsp;TOUS&nbsp;&nbsp;
        </p>
        <p
          className={`header-left-title ${darkMode ? 'dark' : ''} ${
            url !== 1 ? 'headerinactive' : ''
          } `}
          onClick={handleImg}
        >
          &nbsp;&nbsp;IMAGES&nbsp;&nbsp;
        </p>
      </div>
      <div className="header-right">
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
        <div className={`header-right-user ${mode}Mode`}>
          {/* {letter > 0 ? <span>{total}</span> : <input type='text' maxLength="1" className="user"  value={user} onChange={(e) => changeUser(e)} />} */}
          {letter > 0 ? <span>{total}</span> : <span>{user}</span>}
        </div>
      </div>
    </div>
  );
};

export default Header;
