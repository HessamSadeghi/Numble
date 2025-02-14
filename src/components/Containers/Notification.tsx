import type { FC } from "react";
import useStore from "~/hooks/useStore";

const Notification: FC = () => {
	const { notification } = useStore();

	return notification.message ? (
		<p
			className={`flex flex-row justify-center text-center font-bold text-lg 
      ${notification.type === "error" ? "text-red-600" : "text-green-600"}`}>
			{notification.message}
		</p>
	) : null;
};

export default Notification;
