import { useEffect, useState } from "react";
import axios from "axios";

interface Token {
  webtoken?: string;
}

interface Data {
  _id: string;
  artist: string;
  birth: number;
  records: string[];
}

function Dashboard(props: Token) {
  const { webtoken } = props;
  const [token, setToken] = useState(webtoken);
  const [data, setData] = useState<Data[]>([]);

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
      .get<Data[]>("http://localhost:3000/data", {
        headers: {
          Authorization: localToken,
        },
      })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      });
  }, []);
  return (
    <>
      <h1>Dashboard</h1>
      {data && data.map((o) => <p key={o._id}>{o.artist}</p>)}
    </>
  );
}

export default Dashboard;
