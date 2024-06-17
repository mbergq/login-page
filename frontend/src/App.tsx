import Home from "./components/Home";
import Authorize from "./components/Authorize";
import Register from "./components/Register";
import { AppLayout } from "./styled-components/AppLayout";
import { AuthWrapper } from "./styled-components/AuthWrapper";
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
        <Route
          path="/auth/:id"
          element={
            <AppLayout>
              <AuthWrapper>
                <Register />
              </AuthWrapper>
            </AppLayout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
