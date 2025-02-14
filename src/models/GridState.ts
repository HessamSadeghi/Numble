import { Cell } from "./Cell";
import { NotificationType } from "./NotificationType";

export interface GridState {
	// State
	gameOver: boolean;
	grid: Cell[][];
	theNumber: number[];
	current: {
		row: number;
		col: number;
	};
	notification: {
		type: NotificationType;
		message: string;
	};
	// Functions
	resetGame: () => void;
	setCellValue: (
		row: number,
		col: number,
		value: number,
		color: number
	) => void;
	setCurrent: (row: number, col: number) => void;
	setGameOver: (gameOver: boolean) => void;
	setNotification: (type: NotificationType, message: string) => void;
}
