"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";
function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-5 flex justify-between items-center">
      <div className="flex flex-row items-center">
        <span className="text-black font-bold text-xl">FinAI</span>
      </div>
      {isSignedIn ? (
        <div className="flex gap-3  items-center">
          <Link href={"/dashboard"}>
            <Button className="rounded-full bg-black hover:bg-black">
              Dashboard
            </Button>
          </Link>

          <UserButton />
        </div>
      ) : (
        <div className="flex gap-3  items-center">
          <Link href={"/sign-in"}>
            <Button className="bg-white text-black hover:bg-white">
              Sign in
            </Button>
          </Link>
          <Link href={"/sign-up"}>
            <Button className="rounded-full text-black bg-custom hover:bg-custom">
              Get Started
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
