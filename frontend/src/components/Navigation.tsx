import { Link } from "react-router-dom";
import { NavigationWrapper } from "../styled-components/NavigationWrapper";

function Navigation() {
  return (
    <NavigationWrapper>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <Link to="/auth" style={{ marginRight: "auto" }}>
        <button>My dashboard</button>
      </Link>
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
