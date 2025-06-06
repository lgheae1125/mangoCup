import Link from "next/link";
import React, { PropsWithChildren } from "react";
import { IoSearch } from "react-icons/io5";

function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <header className="bg-primary w-full h-[100px] fixed flex items-center justify-center">
        <div className="h-10 mr-auto cursor-pointer ml-12 shrink-0">
          <Link href={"/"}>
            <img src="/images/mangoCupLogo.png" alt="logo" />
          </Link>
        </div>
        <div className="h-11 flex w-[40%] mr-auto -translate-x-20 shrink-1 rounded-full bg-[#fff] shadow-md focus-within:brightness-95 duration-200">
          <input
            className="flex-1 h-full text-[#777] text-lg font-medium pl-[18px] outline-0"
            type="text"
            placeholder="월드컵 제목 또는 인물 이름으로 검색하세요."
          />
          <button className="shrink-0 h-full pr-4 text-[#aaa] font-bold text-2xl">
            <IoSearch />
          </button>
        </div>
      </header>
      <main className="pt-[100px] bg-[#f6f6f6]">{children}</main>
    </>
  );
}

export default RootLayout;
