import { useState } from 'react';

import Google from './components/Google/Google';
import GamepadComponent from './components/GamePad/GamepadComponent';
import BlackScreen from './components/BlackScreen/BlackScreen';

import './App.scss';

function App() {
  const [page, setPage] = useState('Google');

  const goToBlackScreenPage = () => {
    console.log('go to black screen');
    setPage('BlackScreen');
  };

  const goToGooglePage = () => {
    console.log('go to google');
    setPage('Google');
  };

  return (
    <div className="App">
      {/* <GamepadComponent /> */}
      {page == 'Google' && <Google setPage={goToBlackScreenPage} />}
      {page == 'BlackScreen' && <BlackScreen setPage={goToGooglePage} />}
    </div>
  );
}

export default App;
