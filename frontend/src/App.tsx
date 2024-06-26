import Home from "./components/Home";
import Authorize from "./components/Authorize";
import Sign from "./components/Sign";
import Dashboard from "./components/Dashboard";
import { AppLayout } from "./styled-components/AppLayout";
import { AuthWrapper } from "./styled-components/AuthWrapper";
import { Routes, Route } from "react-router-dom";

function App() {
  const handleSubmit = (data: string) => {
    console.log("Token: " + data);
  };
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
                <Sign onSubmit={handleSubmit} />
              </AuthWrapper>
            </AppLayout>
          }
        />
        <Route
          path="/protected/dashboard"
          element={
            <AppLayout>
              <Dashboard />
            </AppLayout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
