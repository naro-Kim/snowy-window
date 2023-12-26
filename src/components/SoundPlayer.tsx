import jollyChristmas from '../../public/assets/jollyChristmas.mp3'

export const SoundPlayer = () => {
  return <audio className='absolute z-10 opacity-0 pointer-events-none' src={jollyChristmas} controls loop />
};
