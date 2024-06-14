import { AuthWrapper } from "../styled-components/AuthWrapper.tsx";
import { Button } from "../styled-components/Button.tsx";

function Login() {
  return (
    <AuthWrapper>
      <Button $inputColor="#6855E0" $bgColor={false}>
        Login
      </Button>
      <Button $inputColor="white" $bgColor={true}>
        Register
      </Button>
    </AuthWrapper>
  );
}

export default Login;
