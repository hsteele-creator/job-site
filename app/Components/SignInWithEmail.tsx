"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignInWithEmail() {
  const [email, setEmail] = useState<null | string>(null);

  const emailSignIn = async () => {

    const signInResult = await signIn("email", {
      email: email,
      callbackUrl: `${window.location.origin}`,
    });
  };
  return (
    <div>
      <form action={emailSignIn}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          name="email"
          id="email"
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
