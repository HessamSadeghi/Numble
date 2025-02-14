import { create } from "zustand";
import { CellColor, GridState, NotificationType } from "~/models";

const useStore = create<GridState>(set => ({
	current: {
		row: 0,
		col: 0,
	},
	gameOver: false,
	grid: Array.from({ length: 5 }, () =>
		Array.from({ length: 5 }, () => ({ value: 0, color: 0 }))
	),
	notification: {
		type: "error" as NotificationType,
		message: "",
	},
	theNumber: (() => {
		const numbers = new Set<number>();
		while (numbers.size < 5) {
			numbers.add(Math.floor(Math.random() * 5) + 1);
		}
		return Array.from(numbers);
	})(),
	resetGame: () =>
		set(() => ({
			grid: Array.from({ length: 5 }, () =>
				Array.from({ length: 5 }, () => ({
					value: 0,
					color: CellColor.Default,
				}))
			),
			current: { row: 0, col: 0 },
			theNumber: (() => {
				const numbers = new Set<number>();
				while (numbers.size < 5) {
					numbers.add(Math.floor(Math.random() * 5) + 1);
				}
				return Array.from(numbers);
			})(),
			notification: { type: NotificationType.Error, message: "" },
			gameOver: false,
		})),
	/**
	 * Updates the value and color of a cell in the grid.
	 * Performs a deep copy to ensure state immutability.
	 * @param row - The row index of the cell.
	 * @param col - The column index of the cell.
	 * @param value - The new value for the cell.
	 * @param color - The new color state for the cell.
	 */
	setCellValue: (row, col, value, color) =>
		set(state => {
			if (
				row < 0 ||
				row >= state.grid.length ||
				col < 0 ||
				col >= state.grid[0].length
			) {
				console.error(`Invalid row (${row}) or column (${col})`);
				return state; // Return the current state without changes
			}
			const newGrid = state.grid.map(r => r.map(cell => ({ ...cell })));
			newGrid[row][col] = { value, color };
			return { grid: newGrid };
		}),
	setCurrent: (row, col) => set({ current: { row, col } }),
	setGameOver: gameOver => set({ gameOver }),
	setNotification: (type, message) => set({ notification: { type, message } }),
}));

export default useStore;
