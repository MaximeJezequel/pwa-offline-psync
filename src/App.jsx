import { useState } from 'react';

import Google from './components/Google/Google';
import GamepadComponent from './components/GamePad/GamepadComponent';
import BlackScreen from './components/BlackScreen/BlackScreen';

import './App.scss';

function App() {
  const [showGamePad, setShowGamePad] = useState(false);
  const [showFullBlackScreen, setShowFullBlackScreen] = useState(false);
  const [matrix, setMatrix] = useState([]);
  const [gamepad, setGamepad] = useState(null);

  const enterBlackScreenMode = () => {
    console.log('go to black screen');
    setShowFullBlackScreen(true);
    setShowGamePad(true);
  };

  const exitBlackScreenMode = () => {
    console.log('go to google');
    setShowFullBlackScreen(false);
    setShowGamePad(false);
  };

  return (
    <div className="App">
      {showFullBlackScreen && <BlackScreen setPage={exitBlackScreenMode} />}
      {
        <Google
          setPage={enterBlackScreenMode}
          matrix={matrix}
          setMatrix={setMatrix}
          setShowGamepad={setShowGamePad}
          gamepad={gamepad}
        />
      }
      {showGamePad && (
        <GamepadComponent
          setPage={exitBlackScreenMode}
          matrix={matrix}
          setMatrix={setMatrix}
          gamepad={gamepad}
          setGamepad={setGamepad}
        />
      )}
    </div>
  );
}

export default App;
