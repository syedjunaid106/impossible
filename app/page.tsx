'use client'
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
  import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import Image from "next/image";

export default function Home() {
  const createfile=useMutation(api.files.createfile)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <SignedIn>
      <SignOutButton>
        <Button>Signout</Button>
      </SignOutButton>
    </SignedIn>
    <SignedOut>
      <SignInButton mode="modal">
        <Button>Signin</Button>
      </SignInButton>
    </SignedOut>
    <button onClick={()=>{
      createfile({
        name:"shah"
      })
    }}>Click me</button>
    </main>
  );
}
