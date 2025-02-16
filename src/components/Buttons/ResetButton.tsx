import type { FC } from "react";
import { useStore } from "~/hooks";

const ResetButton: FC = () => {
  const { resetGame } = useStore();

  return (
    <button
      onClick={() => resetGame()}
      className="flex flex-col justify-center items-center text-center border-2
      border-blue-600 rounded text-2xl text-white font-bold p-2 bg-blue-600 
      hover:bg-white hover:text-blue-600 hover:border-blue-600 pt-1"
    >
      Reset
    </button>
  );
};

export default ResetButton;
