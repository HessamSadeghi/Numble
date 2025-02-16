import { useCallback, useEffect } from "react";
import { useStore } from "~/hooks";
import { NotificationType } from "~/models";

interface useInputsOutputs {
  gameOver: boolean;
  handleClick: (input: number) => void;
  handleDelete: () => void;
  handleSubmit: () => void;
}

const useInputs = (): useInputsOutputs => {
  const {
    current,
    gameOver,
    grid,
    setCellValue,
    setCurrent,
    setGameOver,
    setNotification,
    theNumber,
  } = useStore();

  const currentRow = current.row;
  const currentCol = current.col;

  const processGuess = useCallback(() => {
    let currentScore = 0;
    grid[currentRow].forEach((element, index) => {
      if (element.value === theNumber[index]) {
        setCellValue(currentRow, index, element.value, 3);
        currentScore++;
      } else if (theNumber.includes(element.value)) {
        setCellValue(currentRow, index, element.value, 2);
      } else {
        setCellValue(currentRow, index, element.value, 1);
      }
    });

    if (currentScore === 5) {
      setGameOver(true);
      setNotification("success" as NotificationType, "You won the game!");
      return true;
    }
    return false;
  }, [grid, currentRow, theNumber, setCellValue, setGameOver, setNotification]);

  const handleSubmit = useCallback(() => {
    setNotification("error" as NotificationType, "");

    if (currentCol === 0) {
      setNotification(
        "error" as NotificationType,
        "You haven't guessed any numbers yet!"
      );
      return;
    }

    if (currentCol !== 5) {
      setNotification(
        "error" as NotificationType,
        "You haven't guessed all the numbers yet!"
      );
      return;
    }

    const hasWon = processGuess();

    if (hasWon) {
      return;
    }

    if (currentRow === 4) {
      setGameOver(true);
      setNotification("error" as NotificationType, "You lost the game!");
    } else {
      setCurrent(currentRow + 1, 0);
    }
  }, [
    currentCol,
    currentRow,
    processGuess,
    setCurrent,
    setGameOver,
    setNotification,
  ]);

  const handleDelete = useCallback(() => {
    setNotification("error" as NotificationType, "");
    if (currentCol === 0) {
      setNotification(
        "error" as NotificationType,
        "There is nothing to delete!"
      );
      return;
    }
    setCellValue(currentRow, currentCol - 1, 0, 0);
    setCurrent(currentRow, currentCol - 1);
  }, [currentCol, currentRow, setCellValue, setCurrent, setNotification]);

  const handleClick = useCallback(
    (input: number) => {
      setNotification("error" as NotificationType, "");

      if (currentCol === 5) {
        setNotification(
          "error" as NotificationType,
          "You have already guessed 5 numbers!"
        );
        return;
      }
      setCellValue(currentRow, currentCol, input, 4);
      setCurrent(currentRow, currentCol + 1);
    },
    [currentCol, currentRow, setCellValue, setCurrent, setNotification]
  );

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (gameOver) return;

      const key = event.key;

      if (key >= "1" && key <= "5") {
        const inputNumber = parseInt(key, 10);
        handleClick(inputNumber);
      } else if (key === "Enter") {
        handleSubmit();
      } else if (key === "Backspace" || key === "Delete") {
        handleDelete();
      }
    },
    [gameOver, handleClick, handleSubmit, handleDelete]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return {
    gameOver,
    handleClick,
    handleDelete,
    handleSubmit,
  };
};

export default useInputs;
