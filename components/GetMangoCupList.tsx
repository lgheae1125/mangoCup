"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/supabase/client";
import MangoCupCard from "@/components/MangoCupCard";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface MangoCupListType {
  title: string;
  like: number;
  id: string;
  created_at: string;
}

function GetMangoCupList() {
  const [mangoCupList, setMangoCupList] = useState<MangoCupListType[]>();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("search") || "";

  useEffect(() => {
    (async () => {
      let query = supabase
        .from("mango_cup_tournaments")
        .select("*")
        .order("created_at", { ascending: false });

      // 검색어가 있을 경우 필터링
      if (searchTerm) {
        query = query.ilike("title", `%${searchTerm}%`);
      }

      const { data, error } = await query;

      if (error) {
        console.error("mangoCupList error:", error);
      } else {
        setMangoCupList(data);
      }
    })();
  }, [searchTerm]);

  return (
    <div className="flex gap-x-8 mx-10 mt-10 flex-wrap gap-y-8">
      {mangoCupList?.map((mangoCupData) => (
        <Link
          className="w-[calc((100%-3*32px)/4)]"
          key={mangoCupData.id}
          href={{ pathname: "/play", query: { id: mangoCupData.id } }}
        >
          <MangoCupCard
            title={mangoCupData.title}
            likeCount={mangoCupData.like}
            createdAt={mangoCupData.created_at}
            id={mangoCupData.id}
          />
        </Link>
      ))}
    </div>
  );
}

export default GetMangoCupList;
