import MyMangoCupNavi from "@/components/MyMangoCupNavi";
import React, { PropsWithChildren } from "react";

function MyMangoCupLayout({ children }: PropsWithChildren) {
  return (
    <div className="w-full h-full pt-12">
      <section className="w-full h-full bg-white shadow-2xl pt-3 p-8">
        <MyMangoCupNavi />
        {children}
      </section>
    </div>
  );
}

export default MyMangoCupLayout;
