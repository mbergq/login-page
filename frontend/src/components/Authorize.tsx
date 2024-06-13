import { Button } from "../styled-components/Button.tsx";

function Login() {
  return (
    <>
      <Button $inputColor="#6855E0" $bgColor={false}>
        Login
      </Button>
      <Button $inputColor="white" $bgColor={true}>
        Register
      </Button>
    </>
  );
}

export default Login;
