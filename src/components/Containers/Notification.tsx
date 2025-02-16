import type { FC } from "react";
import { useStore } from "~/hooks";

const Notification: FC = () => {
  const { notification } = useStore();

  return (
    <p
      className={`flex flex-row justify-center text-center font-bold text-lg min-h-7
      ${notification.type === "error" ? "text-red-600" : "text-green-600"}`}
    >
      {notification?.message}
    </p>
  );
};

export default Notification;
