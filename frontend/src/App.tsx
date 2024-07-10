import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Authorize from "./components/Authorize";
import Sign from "./components/Sign";
import Dashboard from "./components/Dashboard";
import { AppLayout } from "./styled-components/AppLayout";
import { AuthWrapper } from "./styled-components/AuthWrapper";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [token, setToken] = useState<string | undefined>(undefined);
  const [isLoggedIn, setIsLoggedIn] = useState<null | boolean>(null);

  const handleSubmit = (data: string, isLoggedIn: boolean) => {
    setToken(data);
    setIsLoggedIn(isLoggedIn);
  };

  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const loggedIn = JSON.parse(localStorage.getItem("isLoggedIn")!);
    if (loggedIn) {
      setIsLoggedIn(loggedIn);
    }
  }, [isLoggedIn]);

  return (
    <>
      <Routes>
        <Route
          path="/home"
          element={
            <>
              <Navigation isLoggedIn={isLoggedIn} />
              <AppLayout>
                <Home />
                <Authorize />
              </AppLayout>
            </>
          }
        />
        <Route
          path="/auth/:id"
          element={
            <>
              <Navigation isLoggedIn={isLoggedIn} />
              <AppLayout>
                <AuthWrapper>
                  <Sign onSubmit={handleSubmit} />
                </AuthWrapper>
              </AppLayout>
            </>
          }
        />
        <Route
          path="/protected/dashboard"
          element={
            <>
              <Navigation isLoggedIn={isLoggedIn} />
              <AppLayout>
                <Dashboard webtoken={token} />
              </AppLayout>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
