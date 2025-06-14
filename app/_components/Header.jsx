"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";

function Header() {
  const { user, isSignedIn } = useUser();

  return (
    <div className="p-5 flex justify-between items-center border shadow-sm">
      {/* Left: Logo + Title */}
      <div className="flex flex-row items-center">
        <Image src={"/donut-chart.svg"} alt="logo" width={40} height={25} />
        <span className="text-blue-800 font-bold text-xl ml-2">Financify</span>
      </div>

      {/* Right: Auth or Buttons */}
      {isSignedIn ? (
        <UserButton />
      ) : (
        <div className="flex gap-3 items-center">
          <Link href="/dashboard">
            <Button variant="outline" className="rounded-full">Dashboard</Button>
          </Link>
          <Link href="/dashboard">
            <Button className="rounded-full bg-blue-800 text-white hover:bg-blue-700">Get Started</Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
