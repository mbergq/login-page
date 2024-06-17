import { AuthWrapper } from "../styled-components/AuthWrapper.tsx";
import { Button } from "../styled-components/Button.tsx";
import { Link } from "react-router-dom";

function Authorize() {
  return (
    <AuthWrapper>
      <Link to="/auth/login">
        <Button $inputColor="#6855E0" $bgColor={false}>
          Login
        </Button>
      </Link>
      <Link to="/auth/register">
        <Button $inputColor="white" $bgColor={true}>
          Register
        </Button>
      </Link>
    </AuthWrapper>
  );
}

export default Authorize;
