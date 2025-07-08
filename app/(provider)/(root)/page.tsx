"use client";

import React from "react";
import GetMangoCupList from "@/components/GetMangoCupList";
import RangeOptionButtons from "@/components/RangeOptionButtons";

function HomePage() {
  return (
    <div>
      {/* 탭 메뉴 */}
      <div className="flex items-center gap-8 px-8 py-4 bg-whitem">
        <div className="overflow-hidden rounded bg-white shadow-sm">
          <button className="bg-yellow-300 text-black px-4 py-1 rounded">
            인기순
          </button>
          <button className="text-black px-4 py-1">최신순</button>
        </div>
        <div className="overflow-hidden rounded bg-white shadow-sm">
          <RangeOptionButtons />
        </div>
        <div className="ml-auto flex gap-2">
          <button className="bg-yellow-300 text-black shadow-sm py-1 w-20 rounded">
            홈
          </button>
          <button className="bg-white text-black shadow-sm py-1 w-20 rounded">
            좋아요
          </button>
          <button className="bg-white text-black shadow-sm py-1 w-20 rounded">
            MY
          </button>
        </div>
      </div>

      {/* 이상형 월드컵 카드 리스트 */}
      <GetMangoCupList />
    </div>
  );
}

export default HomePage;
