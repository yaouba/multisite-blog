import { Button } from "@/components/ui/button";
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Home() {
  const { getUser } = getKindeServerSession();
  const session = await getUser();

  return (
    <div>
      { session ? (
        <LogoutLink>
          <Button>Logout</Button>
        </LogoutLink>
      ) : (
        <div>
          <LoginLink postLoginRedirectURL="/dashboard">Sign in</LoginLink>
          <RegisterLink postLoginRedirectURL="/welcome">Sign up</RegisterLink>
        </div>
      )}
    </div>
  )
}