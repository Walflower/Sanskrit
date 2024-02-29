import { useSound } from "use-sound";
import VinyasaSound from "../../assets/audio/vinyasa-music.mp3";
import { useState } from "react";

function Sound() {
  const [play, { stop }] = useSound(VinyasaSound);
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to toggle play/pause
  const toggleSound = () => {
    if (isPlaying) {
      stop();
    } else {
      play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <button onClick={toggleSound}>
      {isPlaying ? "Pause Sound" : "Play Sound"}
    </button>
  );
}

export default Sound;
