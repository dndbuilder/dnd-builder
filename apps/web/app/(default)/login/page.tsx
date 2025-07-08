import React, { Suspense } from "react";
import LoginForm from "./_components/login-form";

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
