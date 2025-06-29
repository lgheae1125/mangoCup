"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/supabase";
import MangoCupCard from "@/components/MangoCupCard";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface MangoCupDataType {
  title: string;
  like: number;
  id: string;
  created_at: string;
}

function HomePage() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("search") || "";
  const [mangoCupData, setMangoCupData] = useState<MangoCupDataType[]>();
  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from("mango_cup_tournaments")
        .select("*")
        .ilike("title", `%${searchTerm}%`);
      if (error) {
        console.error("Error fetching tournaments:", error);
      } else {
        setMangoCupData(data);
        console.log("mangocupData", data);
      }
    })();
  }, [searchTerm]);

  return (
    <div className="min-h-screen w-[1800px] mx-auto">
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
                  createdAt={item.created_at}
                  id={item.id}
                />
              </Link>
            ))
          : null}
      </div>
    </div>
  );
}

export default HomePage;
