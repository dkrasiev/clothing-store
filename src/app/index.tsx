import { Routing } from "pages";
import Header from "shared/ui/header";
import "./index.scss";
import { withProviders } from "./providers";

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Routing />
      </div>
    </>
  );
};

export default withProviders(App);
