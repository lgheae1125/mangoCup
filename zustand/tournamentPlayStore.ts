import { create } from "zustand";

type MangoCupEntriesType = {
  imageURL: string;
  candidateName: string;
};

type TournamentPlayStoreState = {
  entries: MangoCupEntriesType[];
  selectedEntries: MangoCupEntriesType[];
  index: number;
  setEntries: (newEntries: MangoCupEntriesType[]) => void;
  selectEntry: (selectedEntry: MangoCupEntriesType) => void;
};

export const useBattleStore = create<TournamentPlayStoreState>((set) => ({
  entries: [],
  selectedEntries: [],
  index: 0,
  setEntries: (newEntries) =>
    set({ entries: newEntries, selectedEntries: [], index: 0 }),
  selectEntry: (selectedEntry) =>
    set((state) => ({
      selectedEntries: [...state.selectedEntries, selectedEntry],
      index: state.index + 2,
    })),
}));
