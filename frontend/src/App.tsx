import Home from "./components/Home";
import Authorize from "./components/Authorize";
import { AppLayout } from "./styled-components/AppLayout";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/auth"
          element={
            <AppLayout>
              <Authorize />
            </AppLayout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
