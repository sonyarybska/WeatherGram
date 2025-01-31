import { BrowserRouter } from "react-router-dom";
import Header from "@common/components/Header/Header";

import { UsersFeature } from "./features";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <UsersFeature />
    </BrowserRouter>
  );
}

export default App;
