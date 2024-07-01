import { useEffect, useState } from "react";
import axios from "axios";

interface Token {
  webtoken?: string;
}

function Dashboard(props: Token) {
  const { webtoken } = props;
  const [token, setToken] = useState(webtoken);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", JSON.stringify(token));
    }
  }, [token]);

  useEffect(() => {
    const localToken = JSON.parse(localStorage.getItem("token")!);
    if (localToken) {
      setToken(localToken);
    }
    axios
      .get("http://localhost:3000/data", {
        headers: {
          Authorization: localToken,
        },
      })
      .then((response) => console.log(response.data));
  }, []);
  return (
    <>
      <h1>Dashboard</h1>
    </>
  );
}

export default Dashboard;
