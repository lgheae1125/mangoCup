"use client";

import MangoCupCard from "@/components/MangoCupCard";
import { supabase } from "@/supabase/client";
import { useAuthStore } from "@/zustand/authStore";
import React, { useEffect, useState } from "react";

interface MyMangoCupListType {
  created_at: string;
  title: string;
  like: number;
  id: string;
  create_user_id: string;
}

function GetMyMangoCupList() {
  const userId = useAuthStore((state) => state.userProfile?.id);
  const [myMangoCupList, setMyMangoCupList] = useState<
    MyMangoCupListType[] | null
  >();
  useEffect(() => {
    (async () => {
      if (!userId) return;
      const { data, error } = await supabase
        .from("mango_cup_tournaments")
        .select("*")
        .eq("create_user_id", userId);

      if (error) console.log("MyMangoCupList error", error);
      console.log("MyMangoCupList data", data);
      setMyMangoCupList(data);
    })();
  }, [userId]);
  return (
    <ul className="flex gap-x-8 mx-10 mt-10 flex-wrap gap-y-8">
      {myMangoCupList
        ? myMangoCupList.map((myMangoCupData) => (
            <li className="w-[calc((100%-3*32px)/4)]" key={myMangoCupData.id}>
              <MangoCupCard
                title={myMangoCupData.title}
                likeCount={myMangoCupData.like}
                createdAt={myMangoCupData.created_at}
                id={myMangoCupData.id}
                create_user_id={myMangoCupData.create_user_id}
                current_user_id={userId}
              />
            </li>
          ))
        : null}
    </ul>
  );
}

export default GetMyMangoCupList;
