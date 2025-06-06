import { useBattleStore } from "@/zustand/tournamentPlayStore";
import React, { useEffect } from "react";

function BattleEntries() {
  const entries = useBattleStore((state) => state.entries);
  const selectedEntries = useBattleStore((state) => state.selectedEntries);
  const index = useBattleStore((state) => state.index);
  const selectEntry = useBattleStore((state) => state.selectEntry);
  const setEntries = useBattleStore((state) => state.setEntries);

  const leftEntry = entries[index];
  const rightEntry = entries[index + 1] ? entries[index + 1] : null;

  useEffect(() => {
    // N강이 끝나면 다음 강으로 넘어가기
    if (!leftEntry) {
      if (selectedEntries.length > 0) {
        setEntries(selectedEntries);
      }
    }
  }, [leftEntry, selectedEntries, setEntries]);

  if (entries.length === 1) return null;
  // 우승 했을때
  if (!leftEntry) return;

  return (
    <>
      <p className="absolute top-10 left-1/2 -translate-x-93 text-3xl text-white z-50 translate-y-180 bg-black/70">
        {leftEntry.candidateName}
      </p>
      {rightEntry ? (
        <p className="absolute top-10 left-1/2 translate-x-60 text-3xl text-white z-50 translate-y-180 bg-black/70">
          {rightEntry.candidateName}
        </p>
      ) : null}

      <div className="flex w-full h-full">
        <div
          className="relative w-1/2 flex flex-row-reverse"
          onClick={() => selectEntry(leftEntry)}
        >
          <img
            src={leftEntry.imageURL}
            alt={leftEntry.candidateName}
            className="h-[calc(100vh-100px)] absolute"
          />
        </div>
        {rightEntry ? (
          <div
            className="relative w-1/2"
            onClick={() => selectEntry(rightEntry)}
          >
            <img
              src={rightEntry.imageURL}
              alt={rightEntry.candidateName}
              className="h-[calc(100vh-100px)] absolute"
            />
          </div>
        ) : null}
      </div>
    </>
  );
}

export default BattleEntries;
