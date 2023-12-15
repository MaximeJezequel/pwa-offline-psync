import React from 'react';

import './SearchBar.scss';

const SearchBar = ({
  darkMode,
  motamo,
  count,
  letter,
  total,
  googleSearch,
  handleChange,
  handleEnter
}) => {
  return (
    <div className="searchBar">
      <div className={darkMode ? 'form greyborder' : 'form'}>
        <div>
          {letter < 1 || letter === count ? (
            <span className="material-icons leftlogo"> search </span>
          ) : (
            <p className="number"> ({letter}) </p>
          )}
        </div>
        <input
          type="texte"
          id={darkMode ? 'result_dark' : 'result_light'}
          style={{
            color: darkMode ? '#e8eaed' : '#202124'
          }}
          placeholder={letter > count - 1 ? motamo[total - 1] : ''}
          onChange={(e) => handleChange(e)}
          onKeyDown={(e) => handleEnter(e)}
          value={letter === count ? '' : googleSearch}
        ></input>
        <svg
          className="micro"
          alt="Utiliser la recherche vocale"
          focusable="false"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#4285f4"
            d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
          ></path>
          <path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path>
          <path
            fill="#fbbc04"
            d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
          ></path>
          <path
            fill="#ea4335"
            d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
          ></path>
        </svg>
        <svg
          className="lens"
          focusable="false"
          viewBox="0 0 192 192"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect fill="none" height="192" width="192"></rect>
          <g>
            <circle fill="#34a853" cx="144.07" cy="144" r="16"></circle>
            <circle fill="#4285f4" cx="96.07" cy="104" r="24"></circle>
            <path
              fill="#ea4335"
              d="M24,135.2c0,18.11,14.69,32.8,32.8,32.8H96v-16l-40.1-0.1c-8.8,0-15.9-8.19-15.9-17.9v-18H24V135.2z"
            ></path>
            <path
              fill="#fbbc05"
              d="M168,72.8c0-18.11-14.69-32.8-32.8-32.8H116l20,16c8.8,0,16,8.29,16,18v30h16V72.8z"
            ></path>
            <path
              fill="#4285f4"
              d="M112,24l-32,0L68,40H56.8C38.69,40,24,54.69,24,72.8V92h16V74c0-9.71,7.2-18,16-18h80L112,24z"
            ></path>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;
