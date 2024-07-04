import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div style={{ textAlign: "right" }}>
      <Link to="/auth/register">
        <button>Register</button>
      </Link>
      <Link to="/auth/login">
        <button>Login</button>
      </Link>
      <Link to="/auth">
        <button>My dashboard</button>
      </Link>
    </div>
  );
}

export default Navigation;
