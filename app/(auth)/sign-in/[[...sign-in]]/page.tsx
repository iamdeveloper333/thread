import { SignIn } from "@clerk/nextjs";
import React from "react";

function page() {
  return <SignIn fallbackRedirectUrl={"/onboarding"} />;
}

export default page;
