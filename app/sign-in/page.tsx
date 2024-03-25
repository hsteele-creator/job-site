import SignInWithGoogle from "../Components/SignInWithGoogleButton";
import SignInWithEmail from "../Components/SignInWithEmail";

export default function SignIn() {
  return (
    <div className="absolute m-auto left-0 right-0 top-0 bottom-0 border flex flex-col justify-center items-center p-6">
      <h1 className="font-medium text-2xl text-center py-4">Sign In</h1>
      <SignInWithEmail />
      <SignInWithGoogle />
    </div>
  );
}
