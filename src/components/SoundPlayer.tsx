import jollyChristmas from '../../public/assets/jollyChristmas.mp3'

export const SoundPlayer = () => {
  return <audio className='absolute w-min-content left-2 top-2 z-10 opacity-20' src={jollyChristmas} autoPlay controls loop />
};
