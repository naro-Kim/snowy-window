import Image from 'next/image';
import snowflake from '/public/assets/snowflake.webp';

export const Loader = () => {
	return (
		<div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 grid grid-flow-cols place-items-center">
			<div className=" w-16 h-16 animate-spin">
				<Image src={snowflake} layout="fill" alt="loader" />
			</div>
			<p className="py-2">눈을 치워볼까요?</p>
		</div>
	);
};
