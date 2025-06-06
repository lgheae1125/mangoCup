import { supabase } from "@/lib/supabase/supabase";
import React, { useEffect, useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";

interface MangoCupCardImage {
  imageURL: string;
}
interface MangoCupCardProps {
  title: string;
  likeCount: number;
  createdAt: string;
  id: string;
}

function MangoCupCard({ title, likeCount, createdAt, id }: MangoCupCardProps) {
  const [mangoCupCardData, setMangoCupCardData] =
    useState<MangoCupCardImage[]>();
  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from("mango_cup_entries")
        .select("imageURL")
        .eq("mango_cup_tournament_id", id)
        .limit(2);
      if (error) {
        console.error("Error fetching tournaments:", error);
      } else {
        console.log("data:", data);
        setMangoCupCardData(data);
        console.log("mangoCupCardData", mangoCupCardData);
      }
    })();
  }, []);
  return (
    <div className="w-full bg-white rounded-3xl p-3 shadow-xl">
      <div className="w-full aspect-video rounded-2xl flex overflow-hidden">
        {mangoCupCardData ? (
          <>
            <img
              src={mangoCupCardData[0].imageURL}
              alt="firstImage"
              className="w-1/2 h-full object-cover"
            />
            <img
              src={mangoCupCardData[1].imageURL}
              alt="secondImage"
              className="w-1/2 h-full object-cover"
            />
          </>
        ) : (
          <>
            <div className="w-1/2 h-full bg-[#999] border-r-2 border-[#666]"></div>
            <div className="w-1/2 h-full bg-[#999]"></div>
          </>
        )}
      </div>
      <div className="mx-3 mt-3 flex items-center justify-between">
        <div>
          <p className="text-2xl">{title}</p>
          <p className="mt-1 text-xs">
            {likeCount}k {createdAt.slice(9, 10)}일전
          </p>
        </div>
        <SlOptionsVertical className="text-black w-5 h-5" />
      </div>
    </div>
  );
}

export default MangoCupCard;
