import type { FC } from "react";
import { useInputs } from "~/hooks";

const SubmitButton: FC = () => {
	const { gameOver, handleSubmit } = useInputs();

	return (
		<button
			disabled={gameOver}
			onClick={() => handleSubmit()}
			className='flex flex-col justify-center items-center text-center border-2
          border-green-600 rounded text-2xl text-white font-bold p-2 bg-green-600 hover:bg-white
          hover:text-green-600 hover:border-green-600 pt-1'>
			Submit
		</button>
	);
};

export default SubmitButton;
