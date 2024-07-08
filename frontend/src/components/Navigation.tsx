import { Link } from "react-router-dom";
import { NavigationWrapper } from "../styled-components/NavigationWrapper";

interface Props {
  isLoggedIn: boolean | null;
}

function Navigation(props: Props) {
  const { isLoggedIn } = props;

  return (
    <NavigationWrapper>
      <Link to="/home">
        <button>Home</button>
      </Link>
      {isLoggedIn === true ? (
        <Link to="/protected/dashboard" style={{ marginRight: "auto" }}>
          <button>My dashboard</button>
        </Link>
      ) : (
        <Link to="/auth/login" style={{ marginRight: "auto" }}>
          <button>My dashboard</button>
        </Link>
      )}
      <Link to="/auth/register">
        <button>Register</button>
      </Link>
      <Link to="/auth/login">
        <button>Login</button>
      </Link>
    </NavigationWrapper>
  );
}

export default Navigation;
