import React from "react";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";

function SignIn() {
  return (
    <SignInButton mode="modal">
      <Button variant="ghost">Log In</Button>
    </SignInButton>
  );
}

export default SignIn;
