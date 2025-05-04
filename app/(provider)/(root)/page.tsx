"use client";

// import MangoCupCard from "@/components/MangoCupCard";
import React, { useEffect } from "react";
import { supabase } from "@/lib/supabase/supabase";

function HomePage() {
  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from("mango_cup_tournaments")
        .select("*");
      if (error) {
        console.error("Error fetching tournaments:", error);
      } else {
        console.log("data:", data);
      }
    })();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* 탭 메뉴 */}
      <div className="flex items-center gap-8 px-8 py-4 bg-whitem">
        <div className="overflow-hidden rounded bg-white shadow-sm">
          <button className="bg-yellow-300 text-black px-4 py-1 rounded">
            인기순
          </button>
          <button className="text-black px-4 py-1">최신순</button>
        </div>
        <div className="overflow-hidden rounded bg-white shadow-sm">
          <button className="bg-yellow-300 text-black px-4 py-1 rounded">
            전체
          </button>
          <button className="text-black px-4 py-1">월</button>
          <button className="text-black px-4 py-1">주</button>
          <button className="text-black px-4 py-1">일</button>
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

      {/* 이상형 월드컵 카드 */}
      <div className="flex gap-x-[calc((1840px-430px*4)/3)] mx-10 mt-10 flex-wrap gap-y-8">
        {/* {tournaments.length > 0 ? (
          <MangoCupCard title={tournaments[0].title} likeCount={5800} />
        ) : null} */}
      </div>
    </div>
  );
}

export default HomePage;
