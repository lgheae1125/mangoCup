"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/supabase";
import MangoCupCard from "@/components/MangoCupCard";
import Link from "next/link";
interface MangoCupDataType {
  title: string;
  like: number;
  id: string;
  time: string;
  created_at: string;
}

function HomePage() {
  const [mangoCupData, setMangoCupData] = useState<MangoCupDataType[]>();
  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from("mango_cup_tournaments")
        .select("*");
      if (error) {
        console.error("Error fetching tournaments:", error);
      } else {
        console.log("data:", data);
        setMangoCupData(data);
        console.log("mangocupData", mangoCupData);
      }
    })();
  }, []);
  return (
    <div className="min-h-screen">
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
      <div className="flex gap-x-8 mx-10 mt-10 flex-wrap gap-y-8">
        {mangoCupData
          ? mangoCupData.map((item) => (
              <Link
                className="w-[calc((100%-3*32px)/4)]"
                key={item.id}
                href={{ pathname: "/play", query: { id: item.id } }}
              >
                <MangoCupCard
                  title={item.title}
                  likeCount={item.like}
                  time={item.created_at}
                  firstImageUrl="https://i.namu.wiki/i/NM9w_oZE3CyF6zL-7iNgSGx63JuS2aQCSnZMkFyo5oE-yBoYwYFGlIrVs58-COINhJY_gOcJxHJRGYdQko7OK0Q92kLkvbrkj9cR8Uqz6r5ikIY_FFYuUNgn6GpKFvnb7A_AHHgqGeeTxlQf0Qxd6Q.webp"
                  secondImageUrl="https://sojoong.joins.com/wp-content/uploads/sites/4/2024/06/04.jpg"
                />
              </Link>
            ))
          : null}
      </div>
    </div>
  );
}

export default HomePage;
