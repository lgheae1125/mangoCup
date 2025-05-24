"use client";

import React, { useEffect } from "react";
import { supabase } from "@/lib/supabase/supabase";
import { useSearchParams } from "next/navigation";
import BattleEntries from "@/components/BattleEntries";
import { useBattleStore } from "@/zustand/tournamentPlayStore";

function PlayPage() {
  const searchParams = useSearchParams();
  const mangoCupTournamentId = searchParams.get("id");
  const setEntries = useBattleStore((state) => state.setEntries);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from("mango_cup_entries")
        .select("*")
        .eq("mango_cup_tournament_id", mangoCupTournamentId);
      if (error) {
        console.log("Error fetching tournaments:", error);
      } else {
        setEntries(data);
      }
    })();
  }, []);
  return (
    <>
      <div className="relative">
        <p className="absolute top-10 left-1/2 -translate-x-1/2 text-3xl text-white z-50 -translate-y-5 bg-black/70">
          애니메이션 이상형 월드컵 32강 1/16
        </p>
        <BattleEntries />
      </div>
    </>
  );
}

export default PlayPage;
