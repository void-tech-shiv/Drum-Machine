import { useEffect, useState, useRef } from 'react';

const DrumPad = ({ clip, power, updateDisplay, volume }) => {
  const [active, setActive] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.keyCode === clip.keyCode) {
        playSound();
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [power, volume, clip]);

  const playSound = () => {
    if (!power) return;
    
    if (audioRef.current) {
      setActive(true);
      setTimeout(() => setActive(false), 100);
      updateDisplay(clip.id.replace(/-/g, ' '));
      audioRef.current.currentTime = 0;
      audioRef.current.volume = volume;
      audioRef.current.play();
    }
  };

  return (
    <div
      className={`drum-pad ${active ? 'active' : ''}`}
      id={clip.id}
      onClick={playSound}
    >
      <audio
        className="clip"
        id={clip.keyTrigger}
        src={clip.url}
        ref={audioRef}
      />
      {clip.keyTrigger}
    </div>
  );
};

export default DrumPad;
