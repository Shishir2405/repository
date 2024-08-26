"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function Component() {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <Image
          src={
            session?.user?.image ||
            "https://lh3.googleusercontent.com/a/ACg8ocL7JCiZtvG2J4ktWU5_lCHEXxKi1V6ysDs-WznQW8O0ky5sWA=s96-c"
          }
          height={100}
          width={100}
          alt="User Image"
        />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Sign In Our App
      <hr />
      <button onClick={() => signIn("github")}>Sign in With Github</button>
      <hr />
      <button onClick={() => signIn("google")}>Sign in With Google</button>
    </>
  );
}
