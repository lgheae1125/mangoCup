import Profile from "@/components/Profile";
import SearchMangoCup from "@/components/SearchMangoCup";
import Link from "next/link";
import React, { PropsWithChildren } from "react";

function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <header className="bg-primary w-full h-[100px] fixed flex items-center justify-between z-50">
        <div className="flex items-center h-full w-[300px] cursor-pointer shrink-0 pl-10">
          <Link href="/">
            <img src="/images/mangoCupLogo.png" alt="mangocup" />
          </Link>
        </div>
        <SearchMangoCup />

        <div className="flex flex-row-reverse w-[300px] shrink-0 pr-10">
          <Profile />
        </div>
      </header>

      <main className="min-h-screen h-screen pt-[100px] bg-[#f6f6f6]">
        <div className="w-[1800px] h-full mx-auto">{children}</div>
      </main>
    </>
  );
}

export default RootLayout;
