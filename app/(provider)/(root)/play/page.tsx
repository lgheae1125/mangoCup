"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/supabase";
import { useSearchParams } from "next/navigation";

interface mangoCupEntrieDatasType {
  imageURL: string;
  candidateName: string;
}

function PlayPage() {
  let tempMangoCupEntrieDatas: mangoCupEntrieDatasType[];
  const searchParams = useSearchParams();
  const mangoCupTournamentId = searchParams.get("id");
  const [mangoCupEntrieDatas, setMangoCupEntrieDatas] =
    useState<mangoCupEntrieDatasType[]>();
  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from("mango_cup_entries")
        .select("*")
        .eq("mango_cup_tournament_id", mangoCupTournamentId);
      if (error) {
        console.log("Error fetching tournaments:", error);
      } else {
        console.log("data_entries:", data);
        console.log("useParams:", searchParams.get("id"));
        tempMangoCupEntrieDatas = data;
      }
    })();
  }, []);
  return (
    <>
      <div className="relative">
        <p className="absolute top-10 left-1/2 -translate-x-1/2 text-3xl text-white z-50 -translate-y-5 bg-black/70">
          애니메이션 이상형 월드컵 32강 1/16
        </p>
        {mangoCupEntrieDatas ? (
          <>
            <p className="absolute top-10 left-1/2 -translate-x-93 text-3xl text-white z-50 translate-y-180 bg-black/70">
              {mangoCupEntrieDatas[0].candidateName}
            </p>
            <p className="absolute top-10 left-1/2 translate-x-60 text-3xl text-white z-50 translate-y-180 bg-black/70">
              {mangoCupEntrieDatas[1].candidateName}
            </p>
            <div className="flex w-full h-full">
              <div className="relative w-1/2  flex flex-row-reverse">
                <img
                  src={mangoCupEntrieDatas[0].imageURL}
                  alt={mangoCupEntrieDatas[0].candidateName}
                  className="h-[calc(100vh-100px)] absolute"
                />
              </div>
              <div className="relative w-1/2">
                <img
                  src={mangoCupEntrieDatas[1].imageURL}
                  alt={mangoCupEntrieDatas[1].candidateName}
                  className="h-[calc(100vh-100px)] absolute"
                />
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}

export default PlayPage;
