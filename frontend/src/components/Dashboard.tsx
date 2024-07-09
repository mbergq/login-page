import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface Props {
  webtoken?: string;
}

interface Data {
  _id: string;
  artist: string;
  birth: number;
  records: string[];
}

function Dashboard(props: Props) {
  const { webtoken } = props;
  const [token, setToken] = useState(webtoken);
  const [data, setData] = useState<Data[]>([]);
  const navigate = useNavigate();

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
    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response.status === 401) {
          navigate("/auth/login", { replace: true });
        }
        return error;
      }
    );
  }, [navigate]);
  return (
    <>
      <h1>Dashboard</h1>
      {data && data.map((o) => <p key={o._id}>{o.artist}</p>)}
    </>
  );
}

export default Dashboard;
