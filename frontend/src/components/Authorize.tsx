import { AuthWrapper } from "../styled-components/AuthWrapper.tsx";
import { Button } from "../styled-components/Button.tsx";
import { Routes, Route, Link } from "react-router-dom";

function Authorize() {
  return (
    <AuthWrapper>
      <Button $inputColor="#6855E0" $bgColor={false}>
        Login
      </Button>
      <Link to="/auth/register">
        <Button $inputColor="white" $bgColor={true}>
          Register
        </Button>
      </Link>
    </AuthWrapper>
  );
}

export default Authorize;
