import { create } from "zustand";
import { User } from "@supabase/supabase-js";
import { Tables } from "@/supabase/database.types";

type useAuthStoreState = {
  authUser: User | null;
  userProfile: Tables<"users"> | null;
  setAuthUser: (user: User) => void;
  setUserProfile: (profile: Tables<"users">) => void;
  clear: () => void;
};

export const useAuthStore = create<useAuthStoreState>((set) => ({
  authUser: null,
  userProfile: null,
  setAuthUser: (user) => set({ authUser: user }),
  setUserProfile: (profile) => set({ userProfile: profile }),
  clear: () => set({ authUser: null, userProfile: null }),
}));
