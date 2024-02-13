import { useCallback, useEffect, useState } from 'react';

import GamepadMenu from './GamepadMenu';
import GamepadMapping from './GamepadMapping';

import './GamepadComponent.scss';

const GamepadComponent = ({
  setPage,
  matrix,
  setMatrix,
  gamepad,
  setGamepad
}) => {
  const [buttonPressed, setButtonPressed] = useState(null);
  const [showSettings, setShowSettings] = useState(false);
  const [showEvents, setShowEvents] = useState(true);

  const handleResetClick = () => {
    setMatrix([]);
  };

  ////////////////////////////////
  /// CONNEXION / DISCONNEXION ///
  ////////////////////////////////

  // Gamepad is connecting
  const handleGamepadConnected = (event) => {
    console.log('Gamepad connected:', event.gamepad);
    setGamepad(event.gamepad);
  };

  // Gamepad is disconnecting
  const handleGamepadDisconnected = (event) => {
    console.log('Gamepad disconnected:', event.gamepad);
    setGamepad(null);
  };

  // Set gamepad
  async function connectGamepad() {
    if (!navigator.bluetooth) {
      console.error('Web Bluetooth API is not supported in this browser.');
      return;
    }
    navigator.bluetooth
      .requestDevice({
        acceptAllDevices: true,
        optionalServices: ['battery_service'],
        filters: [{ services: ['battery_service'] }]
      })
      .then((device) => {
        // Connect to the device
        const gatt = device.gatt?.connect();
        // Get the Gamepad service
        const service = gatt?.getPrimaryService('abxy_gamepad');
        // Get the Gamepad characteristic
        const characteristic = service?.getCharacteristic('abxy_gamepad_state');
        // Create a new Gamepad object from the characteristic value
        const value = characteristic?.readValue();
        if (!value) {
          console.error('Failed to read value from characteristic');
          return;
        }
        // Create a new Gamepad object from the characteristic value
        setGamepad(new Gamepad());
      })
      .catch((error) => console.error('Bluetooth connection failed', error));
  }

  useEffect(() => {
    !gamepad && connectGamepad();
    window.addEventListener('gamepadconnected', handleGamepadConnected);
    window.addEventListener('gamepaddisconnected', handleGamepadDisconnected);
    requestAnimationFrame(updateGamepad);

    return () => {
      window.removeEventListener('gamepadconnected', handleGamepadConnected);
      window.removeEventListener(
        'gamepaddisconnected',
        handleGamepadDisconnected
      );
    };
  });

  ////////////////////////////////
  ///      BUTTON EVENTS       ///
  ////////////////////////////////

  const updateMatrix = (newElement) => {
    setMatrix((prevMatrix) => {
      const newMatrix = [
        ...prevMatrix,
        newElement * 2 ** (6 - 1 - prevMatrix.length)
      ];
      return newMatrix.length < 7 ? newMatrix : prevMatrix;
    });
  };

  const handleGamepadButtonPress = useCallback((event, setButtonPressed) => {
    const buttonIndex = event.gamepad.buttons.findIndex(
      (button) => button.pressed
    );
    if (buttonIndex != -1) {
      console.log('Button pressed:', buttonIndex);
      setButtonPressed(buttonIndex);
    }

    switch (buttonIndex) {
      case -1:
        break;
      case 0:
        updateMatrix(0);
        break;
      case 4:
        updateMatrix(1);
        break;
      case 1:
        setMatrix((matrix) => [...matrix].slice(0, matrix.length - 1));
        break;
      case 10:
        setMatrix([]);
        break;
      case 11:
        setMatrix([]);
        break;
      case 3:
        setPage();
        break;
    }
  }, []);

  // Function monitoring button press events
  const updateGamepad = () => {
    if (gamepad) {
      setGamepad((prevGamepad) => {
        const updatedGamepad =
          navigator.getGamepads()[
            prevGamepad?.index ?? gamepad?.index ?? 0 ?? 1
          ];
        if (updatedGamepad) {
          updatedGamepad.buttons.forEach((button, index) => {
            if (
              button.pressed !== prevGamepad?.buttons[index].pressed &&
              button.pressed !== -1
            ) {
              handleGamepadButtonPress(
                {
                  gamepad: updatedGamepad
                },
                () => setButtonPressed(index)
              );
            }
          });
        }
        return updatedGamepad;
      });
    }
    requestAnimationFrame(updateGamepad);
  };

  return (
    <div className="gamepad-container">
      <div className="connexion-status">
        <span>
          {' '}
          {gamepad ? (
            <div className="connexion online"></div>
          ) : (
            <div className="connexion offline"></div>
          )}
        </span>
        <h3>Bluetooth Connexion </h3>
        {gamepad ? (
          <>
            <p>Gamepad connected: {gamepad.id}</p>
            <p>Gamepad index: {gamepad.index}</p>
          </>
        ) : (
          <>
            <button onClick={() => connectGamepad()}>Connect to gamepad</button>
          </>
        )}
      </div>

      <div className={`button-settings ${showSettings ? '' : 'hidden'}`}>
        <GamepadMenu
          showMenu={showSettings}
          setShowMenu={setShowSettings}
          title="Button Settings"
        />
        <GamepadMapping />
        <button>SAVE</button>
      </div>

      <div className={`button-events ${showEvents ? '' : 'hidden'}`}>
        <GamepadMenu
          showMenu={showEvents}
          setShowMenu={setShowEvents}
          title="Button Events"
        />
        <table>
          <tbody>
            <tr>
              <td>List of inputs</td>
              <td>{matrix.length > 0 ? matrix.toString() : 'empty'}</td>
            </tr>
            <tr>
              <td>Number of inputs</td>
              <td>{matrix.length}</td>
            </tr>
            <tr>
              <td>Current Count</td>
              <td>{matrix.reduce((a, b) => a + b, 0)}</td>
            </tr>
          </tbody>
        </table>
        <p>
          Last button pressed:{' '}
          {buttonPressed !== null ? `${buttonPressed}` : 'None'}
        </p>
        <button onClick={() => handleResetClick()}>Reset</button>
      </div>
    </div>
  );
};

export default GamepadComponent;
