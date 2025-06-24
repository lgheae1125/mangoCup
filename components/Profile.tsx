"use client";

import { useAuthStore } from "@/zustand/authStore";
import Link from "next/link";
import React from "react";

function Profile() {
  const userProfile = useAuthStore((state) => state.userProfile);
  return !userProfile ? (
    <Link href={"/signin"} className="flex items-center">
      <p className="text-xs underline text-[#666] pr-4">로그인 하기</p>
      <div className="w-12 h-12 rounded-full bg-[#999]"></div>
    </Link>
  ) : (
    <div className="flex items-center">
      <Link
        href={"/create-mango-cup"}
        className="text-xs underline text-[#666] pr-4"
      >
        월드컵 생성하기
      </Link>
      <div className="w-12 h-12 rounded-full bg-[#ffff00]"></div>
    </div>
  );
}

export default Profile;
