import type { FC } from "react";

const Header: FC = () => {
	return (
		<div className='flex flex-col justify-center items-center'>
			<h1 className='mt-2 text-6xl font-bold'>Numble!</h1>
			<h2 className='mb-1 text-2xl font-bold'>Wordle with Numbers</h2>
		</div>
	);
};

export default Header;
