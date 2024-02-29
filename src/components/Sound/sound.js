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

  // Path to the image for play and pause states
  const playImage = "/path/to/play-image.png";
  const pauseImage = "/path/to/pause-image.png";

  // Dynamically determine which image to display based on the isPlaying state
  const imageSrc = isPlaying ? pauseImage : playImage;

  return (
    <>
      <button onClick={toggleSound}>
        {isPlaying ? "Pause Sound" : "Play Sound"}
      </button>

      {/* <img
src={imageSrc}
alt={isPlaying ? "Pause Sound" : "Play Sound"}
onClick={toggleSound}
style={{ cursor: "pointer" }} // Style to show pointer cursor on hover
/> */}
    </>
  );
}

export default Sound;
