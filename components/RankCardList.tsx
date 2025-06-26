"use client";

import React, { useEffect, useState } from "react";
import RankCard from "./RankCard";
import { useChampionshipStore } from "@/zustand/tournamentPlayStore";
import { supabase } from "@/supabase/client";
import { Tables } from "@/supabase/database.types";

function RankCardList() {
  const championshipEntry = useChampionshipStore(
    (state) => state.championshipEntry
  );
  const [entries, setEntries] = useState<Tables<"mango_cup_entries">[] | null>(
    null
  );

  useEffect(() => {
    if (!championshipEntry) return;
    (async () => {
      const { data, error } = await supabase
        .from("mango_cup_entries")
        .select("*")
        .eq(
          "mango_cup_tournament_id",
          championshipEntry.mango_cup_tournament_id
        );
      if (error) console.log("error", error);
      setEntries(data);
    })();
  }, [championshipEntry]);

  return (
    <tbody>
      {entries ? (
        entries.map((entry, idx) => (
          <RankCard
            key={entry.mango_cup_tournament_id}
            index={idx}
            image={entry.imageURL}
            title={entry.candidateName}
            championshipRatio={entry.championshipRatio}
            winRatio={entry.win_ratio}
          />
        ))
      ) : (
        <RankCard
          index={1}
          image="이미지"
          title="진격의거인"
          championshipRatio={16.09}
          winRatio={82.18}
        />
      )}
    </tbody>
  );
}

export default RankCardList;
