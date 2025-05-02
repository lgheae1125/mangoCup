import React, { PropsWithChildren } from "react";

function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <header className="bg-primary w-full h-[100px] fixed flex items-center justify-center">
        <img
          src="/images/mangoCupLogo.png"
          alt="logo"
          className="left-40 h-10 absolute"
        />
        <input
          className="w-[800px] h-10 border-1 rounded-l-sm border-secondary text-[#6666666] pl-3 bg-white outline-0"
          type="text"
          placeholder="월드컵 제목 또는 인물 이름으로 검색하세요."
        />
        <button className="h-10 px-3 bg-secondary rounded-r-sm text-white font-bold">
          검색
        </button>
      </header>
      <main className="pt-[100px] w-[1920px]">{children}</main>
    </>
  );
}

export default RootLayout;
