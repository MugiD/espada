import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import { checkUser } from "../lib/checkUser";

const Login = async () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const user = await checkUser();
  
  return (
    <div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default Login;
