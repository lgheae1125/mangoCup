import React, { useEffect, useState } from "react";
import { supabase } from "@/supabase/client";
import MangoCupCard from "@/components/MangoCupCard";
import { useSearchParams } from "next/navigation";
import MangoCupCardSkeleton from "./MangoCupCardSkeleton";
import dayjs from "dayjs";

type MangoCupListType = {
  title: string;
  like: number;
  id: string;
  created_at: string;
};

function GetMangoCupList() {
  const [mangoCupList, setMangoCupList] = useState<MangoCupListType[]>();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("search") || "";
  const searchRange = searchParams.get("range") || "";

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
      if (searchRange) {
        const currentDate = dayjs().toISOString();
        const pastDate = dayjs().subtract(Number(searchRange), "day");
        query = query
          .gte("created_at", pastDate)
          .lte("created_at", currentDate);
      }

      const { data, error } = await query;

      if (error) {
        console.error("mangoCupList error:", error);
      } else {
        setMangoCupList(data);
      }
    })();
  }, [searchTerm, searchRange]);

  return (
    <div className="flex gap-x-8 mx-10 mt-10 flex-wrap gap-y-8">
      {mangoCupList ? (
        mangoCupList.map((mangoCupData) => (
          <MangoCupCard
            key={mangoCupData.id}
            title={mangoCupData.title}
            likeCount={mangoCupData.like}
            createdAt={mangoCupData.created_at}
            id={mangoCupData.id}
          />
        ))
      ) : (
        <>
          <MangoCupCardSkeleton />
          <MangoCupCardSkeleton />
          <MangoCupCardSkeleton />
        </>
      )}
    </div>
  );
}

export default GetMangoCupList;
