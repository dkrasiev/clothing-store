import Button from "shared/ui/button";
import Input from "shared/ui/input";

const LoginPage = () => {
  return (
    <div className="max-w-md mx-auto">
      <h1 className="shadow-md rounded-full mx-auto my-16 w-max p-2 px-12">
        Login
      </h1>

      <form className="child:mb-4 mx-auto">
        <Input name="login">Username or email address</Input>
        <Input name="password">Password</Input>
        <Button>Login</Button>
      </form>

      <hr className="my-8" />

      <Button className="w-full" type="secondary">
        Create an account
      </Button>
    </div>
  );
};

export default LoginPage;
