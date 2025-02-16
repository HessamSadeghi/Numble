import type { FC } from "react";
import { Grid, Header, InputButtons, Notification } from "~/components";

const App: FC = () => {
  return (
    <div
      className="flex flex-col items-center h-screen w-full border-2 border-gray-200 rounded
      justify-start md:justify-center"
    >
      <Header />
      <Grid />
      <InputButtons />
      <Notification />
    </div>
  );
};

export default App;
