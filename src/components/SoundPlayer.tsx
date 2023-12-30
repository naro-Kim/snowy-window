export const SoundPlayer = () => {
  return (
    <audio
      className="absolute w-min-content left-2 top-2 z-10 opacity-20"
      src={"/audio/jollyChristmas.mp3"}
      autoPlay
      controls
      loop
    />
  );
};
