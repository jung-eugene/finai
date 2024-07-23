"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";
function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-5 flex justify-between items-center">
      <div className="flex flex-row items-center">
        <span className="text-black font-bold text-xl">Fin</span>
        <span className="text-blue-800 font-bold text-xl">AI</span>
      </div>
      {isSignedIn ? (
        <div className="flex gap-3  items-center">
          <Link href={"/dashboard"}>
            <Button variant="outline" className="rounded-full">
              Dashboard
            </Button>
          </Link>

          <UserButton />
        </div>
      ) : (
        <div className="flex gap-3  items-center">
          <Link href={"/sign-in"}>
            <Button variant="outline" className="rounded-full">
              Sign in
            </Button>
          </Link>
          <Link href={"/sign-up"}>
            <Button className="rounded-full">Get Started</Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
