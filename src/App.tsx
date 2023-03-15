import { FC } from "react";
import { PageLayout } from "./components/Layout";

const App: FC = () => {
  return (
    <div className="grid place-items-center w-full h-full min-h-screen md:min-h-full md:h-screen bg-neutral-2">
      <PageLayout
        headerProps={{
          back: {
            cvv: "",
          },
          front: {
            cardNumber: "",
            year: "",
            month: "",
            cardHolder: "",
          },
        }}>
        {/* form will go here */}
      </PageLayout>
    </div>
  );
};

export default App;
