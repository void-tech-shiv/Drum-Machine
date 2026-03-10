const Controls = ({ power, setPower, volume, setVolume, bankName, toggleBank, display }) => {
  return (
    <div className="controls-container">
      <div className="control power">
        <p>Power</p>
        <div className="switch" onClick={() => setPower(!power)}>
          <div className={`switch-knob ${power ? 'on' : 'off'}`} />
        </div>
      </div>

      <div id="display" className="display-screen">
        {display}
      </div>

      <div className="volume-slider">
        <i className="fa fa-volume-down" />
        <input
          type="range"
          max="1"
          min="0"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          disabled={!power}
        />
        <i className="fa fa-volume-up" />
      </div>

      <div className="control bank">
        <p>Bank</p>
        <div className={`switch ${!power ? 'disabled' : ''}`} onClick={() => power && toggleBank()}>
          <div className={`switch-knob ${bankName === 'Smooth Piano Kit' ? 'on' : 'off'}`} />
        </div>
      </div>
    </div>
  );
};

export default Controls;
