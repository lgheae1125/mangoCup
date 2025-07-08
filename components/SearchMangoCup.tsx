"use client";
import { updateQuery } from "@/lib/routerUtils";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

function SearchMangoCup() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const defaultSearch = searchParams.get("search") || "";
  const [searchInput, setSearchInput] = useState(defaultSearch);

  const handleSearch = () => {
    const trimmed = searchInput.trim();

    if (trimmed) {
      updateQuery(router, { search: trimmed });
    } else {
      updateQuery(router, { search: "" });
    }
  };
  return (
    <div className="h-11 flex w-[40%] rounded-full bg-white shadow-md focus-within:brightness-95 duration-200">
      <input
        className="flex-1 h-full text-[#777] text-lg font-medium pl-[18px] outline-0"
        type="text"
        placeholder="월드컵 제목 또는 인물 이름으로 검색하세요."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
      />
      <button
        className="shrink-0 h-full pr-4 text-[#aaa] font-bold text-2xl"
        onClick={handleSearch}
      >
        <IoSearch />
      </button>
    </div>
  );
}

export default SearchMangoCup;
