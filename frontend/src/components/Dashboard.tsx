import { useEffect } from "react";
import axios from "axios";

interface Token {
  webtoken?: string;
}

function Dashboard(props: Token) {
  const { webtoken } = props;
  console.log(webtoken);
  useEffect(() => {
    axios
      .get("http://localhost:3000/data", {
        headers: {
          Authorization: webtoken,
        },
      })
      .then((response) => console.log(response.data));
  }, [webtoken]);
  return (
    <>
      <h1>Dashboard</h1>
      <p>{webtoken}</p>
    </>
  );
}

export default Dashboard;
