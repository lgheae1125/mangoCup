"use client";
import { supabase } from "@/supabase/client";
import { useAuthStore } from "@/zustand/authStore";
import React, { PropsWithChildren, useEffect } from "react";

function AuthProvider({ children }: PropsWithChildren) {
  const setAuthUser = useAuthStore((state) => state.setAuthUser);
  const setUserProfile = useAuthStore((state) => state.setUserProfile);
  const clear = useAuthStore((state) => state.clear);
  useEffect(() => {
    (async () => {
      const { data: authListener } = supabase.auth.onAuthStateChange(
        async (_event, session) => {
          if (!session?.user) return clear();
          setAuthUser(session.user);

          const { data: profile, error } = await supabase
            .from("users")
            .select("*")
            .eq("id", session.user.id)
            .maybeSingle();

          if (profile) {
            setUserProfile(profile);
          } else {
            console.log("Failed to load user profile:", error);
          }
        }
      );

      // clean up
      return () => authListener.subscription.unsubscribe();
    })();
  }, []);
  return <>{children}</>;
}

export default AuthProvider;
