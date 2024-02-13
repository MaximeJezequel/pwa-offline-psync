import React from 'react';

const GamepadMenu = ({ showMenu, setShowMenu, title }) => {
  return (
    <div>
      {showMenu ? (
        <span
          className="material-icons arrowlogo"
          onClick={() => setShowMenu(!showMenu)}
        >
          {' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            fill={'white'}
          >
            <path d="m296-345-56-56 240-240 240 240-56 56-184-184-184 184Z" />
          </svg>
        </span>
      ) : (
        <span
          className="material-icons arrowlogo"
          onClick={() => setShowMenu(!showMenu)}
        >
          {' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            fill={'white'}
          >
            <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </span>
      )}

      <h3>{title}</h3>
    </div>
  );
};

export default GamepadMenu;
