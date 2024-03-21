"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

export default function SignInWithGoogle() {
  return (
    <button
      className="mx-auto flex justify-center gap-2 text-sm border shadow-sm items-center w-48 py-2 rounded-sm"
      onClick={() =>
        signIn("google", {
          callbackUrl: `${window.location.origin}`,
        })
      }
    >
      <Image alt="google" src="/google.png" width={20} height={20} />
      <h1>Sign in with Google</h1>
    </button>
  );
}
