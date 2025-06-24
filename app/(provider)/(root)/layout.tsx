import Profile from "@/components/Profile";
import Link from "next/link";
import React, { PropsWithChildren } from "react";
import { IoSearch } from "react-icons/io5";

function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <header className="bg-primary w-full h-[100px] fixed flex items-center justify-between z-50">
        <div className="flex items-center h-full w-[300px] cursor-pointer shrink-0 pl-10">
          <Link href={"/"}>
            <img src="/images/mangoCupLogo.png" alt="logo" />
          </Link>
        </div>
        <div className="h-11 flex w-[40%] shrink-1 rounded-full bg-[#fff] shadow-md focus-within:brightness-95 duration-200">
          <input
            className="flex-1 h-full text-[#777] text-lg font-medium pl-[18px] outline-0"
            type="text"
            placeholder="월드컵 제목 또는 인물 이름으로 검색하세요."
          />
          <button className="h-full pr-4 text-[#aaa] font-bold text-2xl">
            <IoSearch />
          </button>
        </div>
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
