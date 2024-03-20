"use client"

import { signIn } from "next-auth/react";
import GoogleButton from "react-google-button";

export default function SignInWithGoogle() {
    return <GoogleButton onClick={() => signIn('google')} />
}