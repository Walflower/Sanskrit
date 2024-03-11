import "./Sound.scss";
import { useSound } from "use-sound";
import VinyasaSound from "../../assets/audio/vinyasa-music.mp3";
import { useState } from "react";
import NoSound from "../../assets/images/no-sound.png";
import SoundOn from "../../assets/images/sound-on.png";

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

  // Dynamically determine which image to display based on the isPlaying state
  const imageSrc = isPlaying ? SoundOn : NoSound;

  return (
    <img
      className="sound"
      src={imageSrc}
      alt={isPlaying ? "Play Sound" : "Pause Sound"}
      onClick={toggleSound}
      style={{ cursor: "pointer" }}
    />
  );
}

export default Sound;
