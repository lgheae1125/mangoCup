"use client";

import { updateQuery } from "@/lib/routerUtils";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function RangeOptionButtons() {
  const router = useRouter();
  const [selectedRange, setSelectedRange] = useState<string>("");

  const handleClickRange = (range: string) => {
    setSelectedRange(range);
    updateQuery(router, { range });
  };

  return (
    <>
      <button
        className={`px-4 py-1 rounded cursor-pointer duration-150 bg-white hover:brightness-97 ${
          selectedRange === "" ? "bg-yellow-300 text-black" : "text-black"
        }`}
        onClick={() => handleClickRange("")}
      >
        전체
      </button>
      <button
        className={`px-4 py-1 rounded cursor-pointer duration-150 bg-white hover:brightness-97 ${
          selectedRange === "30" ? "bg-yellow-300 text-black" : "text-black"
        }`}
        onClick={() => handleClickRange("30")}
      >
        월
      </button>
      <button
        className={`px-4 py-1 rounded cursor-pointer duration-150 bg-white hover:brightness-97 ${
          selectedRange === "7" ? "bg-yellow-300 text-black" : "text-black"
        }`}
        onClick={() => handleClickRange("7")}
      >
        주
      </button>
      <button
        className={`px-4 py-1 rounded cursor-pointer duration-150 bg-white hover:brightness-97 ${
          selectedRange === "1" ? "bg-yellow-300 text-black" : "text-black"
        }`}
        onClick={() => handleClickRange("1")}
      >
        일
      </button>
    </>
  );
}

export default RangeOptionButtons;
