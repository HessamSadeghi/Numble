import type { FC } from "react";
import { useStore } from "~/hooks";
import {
	DeleteButton,
	NumberButton,
	ResetButton,
	SubmitButton,
} from "~/components";

const defaultInputs = [1, 2, 3, 4, 5];

const InputButtons: FC = () => {
	const { gameOver } = useStore();

	return (
		<div className='flex flex-col justify-center items-center'>
			<div className='border-b-2 border-gray-200 my-1 w-full' />
			<div className='flex flex-row justify-center gap-2 my-1'>
				{defaultInputs.map(input => (
					<NumberButton
						key={input}
						input={input}
					/>
				))}
			</div>
			<div className='flex flex-row justify-center gap-4 my-3'>
				{gameOver ? (
					<ResetButton />
				) : (
					<>
						<DeleteButton />
						<SubmitButton />
					</>
				)}
			</div>
		</div>
	);
};

export default InputButtons;
