import React from 'react';

const GamepadMapping = () => {
  return (
    <div>
      <svg height="250" width="200">
        <circle
          className={false ? 'activeButton' : ''}
          cx="90"
          cy="50"
          r="20"
          stroke="darkgrey"
          strokeWidth="2"
          fill="blue"
        />
        <text x="85" y="55" fill="white">
          X
        </text>
        <circle
          className={false ? 'activeButton' : ''}
          cx="140"
          cy="100"
          r="20"
          stroke="darkgrey"
          strokeWidth="2"
          fill="yellow"
        />
        <text x="135" y="105" fill="grey">
          B
        </text>
        <circle
          className={false ? 'activeButton' : ''}
          cx="90"
          cy="150"
          r="20"
          stroke="darkgrey"
          strokeWidth="2"
          fill="red"
        />
        <text x="85" y="155" fill="white">
          A
        </text>
        <circle
          className={true ? 'activeButton' : ''}
          cx="40"
          cy="100"
          r="20"
          stroke="darkgrey"
          strokeWidth="2"
          fill="green"
        />
        <text x="35" y="105" fill="white">
          Y
        </text>
        <rect
          className={false ? 'activeButton' : ''}
          x="65"
          y="200"
          width="50"
          height="20"
          stroke="darkgrey"
          strokeWidth="2"
          fill="grey"
        />
                   <text x="75" y="215" fill='white'>
          start
        </text>
      </svg>
    </div>
  );
};

export default GamepadMapping;
