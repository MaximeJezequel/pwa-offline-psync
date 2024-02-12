import { useEffect } from 'react';
import React from 'react';

import './BlackScreen.scss';

const BlackScreen = ({ setPage }) => {
  useEffect(() => {
    // Automatically request fullscreen when component mounts
    requestFullScreen();

    // Cleanup function to exit fullscreen when the component unmounts
    return () => {
      exitFullScreen();
    };
  }, []);

  //TODO
  // wakeLock to prevent screen to turn off during performance
  const requestFullScreen = () => {
    const element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
      /* Safari */
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      /* IE11 */
      element.msRequestFullscreen();
    }
  };

  const exitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE11 */
      document.msExitFullscreen();
    }
    window.scrollTo(0, 0);
  };

  const handleGoogleClick = () => {
    setPage();
  };

  return (
    <div className="night">
      <div className="redbutton" onClick={() => handleGoogleClick()}>
      </div>
    </div>
  );
};

export default BlackScreen;
