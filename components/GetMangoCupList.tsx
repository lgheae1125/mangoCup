"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/supabase/client";
import MangoCupCard from "@/components/MangoCupCard";
import Link from "next/link";

interface MangoCupListType {
  title: string;
  like: number;
  id: string;
  created_at: string;
}

function GetMangoCupList() {
  const [mangoCupList, setMangoCupList] = useState<MangoCupListType[]>();
  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from("mango_cup_tournaments")
        .select("*");
      if (error) {
        console.error("mangoCupList error:", error);
      } else {
        setMangoCupList(data);
      }
    })();
  }, []);
  return (
    <div className="flex gap-x-8 mx-10 mt-10 flex-wrap gap-y-8">
      {mangoCupList
        ? mangoCupList.map((mangoCupData) => (
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
          ))
        : null}
    </div>
  );
}

export default GetMangoCupList;
