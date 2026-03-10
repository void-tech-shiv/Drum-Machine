import { useState } from 'react';
import DrumPad from './components/DrumPad';
import Controls from './components/Controls';
import { bankOne, bankTwo } from './data/audioBank';
import './index.css';

function App() {
  const [power, setPower] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [currentBank, setCurrentBank] = useState(bankOne);
  const [bankName, setBankName] = useState('Heater Kit');
  const [display, setDisplay] = useState('Power On');

  const toggleBank = () => {
    if (power) {
      if (currentBank === bankOne) {
        setCurrentBank(bankTwo);
        setBankName('Smooth Piano Kit');
        setDisplay('Smooth Piano Kit');
      } else {
        setCurrentBank(bankOne);
        setBankName('Heater Kit');
        setDisplay('Heater Kit');
      }
    }
  };

  const updateDisplay = (name) => {
    if (power) {
      setDisplay(name);
    }
  };

  const handlePower = (newPower) => {
    setPower(newPower);
    setDisplay(newPower ? 'Power On' : '');
  };

  return (
    <div id="drum-machine" className="drum-machine">
      <div className="pad-bank">
        {currentBank.map((clip) => (
          <DrumPad
            key={clip.id}
            clip={clip}
            power={power}
            volume={volume}
            updateDisplay={updateDisplay}
          />
        ))}
      </div>
      
      <Controls
        power={power}
        setPower={handlePower}
        volume={volume}
        setVolume={setVolume}
        bankName={bankName}
        toggleBank={toggleBank}
        display={display}
      />
    </div>
  );
}

export default App;
