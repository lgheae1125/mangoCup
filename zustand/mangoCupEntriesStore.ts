import { Tables } from "@/supabase/database.types";
import { create } from "zustand";

type mangoCupEntriesState = {
  mangoCupEntries: Tables<"mango_cup_entries"> | null;
  setMangoCupEntries: (newMangoCupEntries: Tables<"mango_cup_entries">) => void;
};

export const mangoCupEntriesStore = create<mangoCupEntriesState>((set) => ({
  mangoCupEntries: null,
  setMangoCupEntries: (newMangoCupEntries) =>
    set(() => ({ mangoCupEntries: newMangoCupEntries })),
}));
