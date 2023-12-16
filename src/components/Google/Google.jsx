import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './Header';
import Logo from './Logo';
import SearchBar from './SearchBar';
import Buttons from './Buttons';
import TouchAreas from './TouchAreas';
import Footer from './Footer';

import { useDarkMode } from '../../context/DarkModeContext';

import cards from '../../assets/mnemonica';
import words from '../../assets/words';
import france from '../../assets/france';

import './Google.scss';

const Google = ({ setPage }) => {
  // initial
  let motamo;
  let google = 'https://www.google.com/search?q=';
  let defaultMode = import.meta.env.VITE_APP_default_mode || 'words';
  let defaultUrl = parseInt(import.meta.env.VITE_APP_default_url || 0);
  let logoSize = import.meta.env.VITE_APP_logo_size || '2x';
  let initial = import.meta.env.VITE_APP_initial || 'M';
  let channel = import.meta.env.VITE_APP_ntfy_channel || 'CrazyDruids';

  // states
  const [googleSearch, setGoogleSearch] = useState('');
  const [mode, setMode] = useState(defaultMode);
  const [count, setCount] = useState(6);
  const [letter, setLetter] = useState(0);
  const [total, setTotal] = useState(0);
  const [maxTotal, setMaxTotal] = useState(61);
  const [url, setUrl] = useState(defaultUrl);
  const [browserName, setBrowserName] = useState('');
  const [matrix, setMatrix] = useState([]);

  const browserDetect = () => {
    if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
      setBrowserName('chrome');
    } else if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
      setBrowserName('firefox');
    }
  };

  const { darkMode, toggleDarkMode } = useDarkMode();

  // modes
  switch (mode) {
    case 'words':
      motamo = words;
      break;
    case 'cards':
      motamo = cards;
      break;
    case 'france':
      motamo = france;
      break;
    default:
      motamo = words;
  }

  switch (url) {
    case 0:
      google = `https://www.google.com/search?q=${motamo[total - 1]}`;
      break;
    case 1:
      google = `https://www.google.com/search?q=${motamo[total - 1]}&tbm=isch`;
      break;
    case 2:
      google =
        browserName === 'firefox'
          ? `https://www.google.com/maps/place/${motamo[total - 1]}`
          : `https://www.google.com/search?q=${motamo[total - 1]}`;
      break;
    default:
      google = `https://www.google.com/search?q=${motamo[total - 1]}`;
  }

  /// functions
  useEffect(() => {
    browserDetect();
    setGoogleSearch('');
  }, [browserName]);

  useEffect(() => {
    matrix && setLetter(matrix.length);
    matrix && setTotal(matrix.reduce((a, b) => a + b, 0));
  }, [matrix]);

  const goToRealGoogle = () => {
    window.location.href =
      url === 0 || url === 2
        ? `https://www.google.com/search?q=${googleSearch}`
        : `https://www.google.com/search?q=${googleSearch}&tbm=isch`;
  };

  const postData = async () => {
    try {
      await axios.post('https://ntfy.sh/emjimagie', googleSearch);
      console.log('POST request successful');
    } catch (error) {
      console.error('Error during POST request:', error.message);
    }
  };

  const goToRealGoogleAndIntercept = async () => {
    await postData();
    // The navigation logic will be executed regardless of the success or failure of the POST request
    window.location.href =
      url === 0 || url === 2
        ? `https://www.google.com/search?q=${googleSearch}`
        : `https://www.google.com/search?q=${googleSearch}&tbm=isch`;
  };

  const handleChange = (e) => setGoogleSearch(e.target.value);
  const handleEnter = (e) => {
    e.target.value.length > 0 &&
      e.keyCode === 13 &&
      goToRealGoogleAndIntercept();
  };
  const handleYes = () => {
    if (letter < count) {
      setMatrix((matrix) => [...matrix, 2 ** (count - 1 - letter)]);
    }
  };
  const handleNo = () => {
    if (letter < count) {
      setMatrix((matrix) => [...matrix, 0]);
    }
  };
  const handleReturn = () => {
    setMatrix([...matrix].slice(0, matrix.length - 1));
  };
  const handleReset = () => {
    setMatrix([]);
    setGoogleSearch('');
  };
  const handleAll = () => {
    setUrl(0);
  };
  const handleImg = () => {
    setUrl(1);
  };
  const handleFR = () => {
    setUrl(2);
    setMode('france');
    setCount(7);
    setMaxTotal(101);
    handleReset();
  };

  const wipeHistory = () => {
    total > 0 && total < maxTotal && window.location.replace(google);
  };
  const goToWiki = () => {
    let wiki = `https://fr.wikipedia.org/wiki/${motamo[total - 1]}`;
    total > 0 && total < maxTotal && window.location.replace(wiki);
  };

  return (
    <div className={darkMode ? 'google dark' : 'google'}>
      <Header
        darkMode={darkMode}
        mode={mode}
        setMode={setMode}
        url={url}
        handleAll={handleAll}
        handleImg={handleImg}
        handleReset={handleReset}
        letter={letter}
        count={count}
        setCount={setCount}
        total={total}
        setMaxTotal={setMaxTotal}
        initial={initial}
        handleReturn={handleReturn}
      />
      <div className="google-top-empty" onClick={handleReturn}></div>
      <div className="google-body">
        <Logo
          darkMode={darkMode}
          logoSize={logoSize}
          handleReset={handleReset}
          url={url}
        />
        <SearchBar
          darkMode={darkMode}
          motamo={motamo}
          count={count}
          letter={letter}
          total={total}
          googleSearch={googleSearch}
          handleChange={handleChange}
          handleEnter={handleEnter}
        />
        <Buttons
          darkMode={darkMode}
          letter={letter}
          realGoogle={goToRealGoogle}
          wipeHistory={wipeHistory}
          goToWiki={goToWiki}
        />
      </div>
      {letter < count && (
        <TouchAreas handleYes={handleYes} handleNo={handleNo} />
      )}
      <div className="google-bottom-empty"></div>
      <Footer
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        count={count}
        handleFR={handleFR}
        setPage={setPage}
      />
    </div>
  );
};

export default Google;
