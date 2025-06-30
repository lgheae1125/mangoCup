"use clinet";

import { supabase } from "@/supabase/client";
import React, { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { SlOptionsVertical } from "react-icons/sl";

interface MangoCupCardImage {
  imageURL: string;
}
interface MangoCupCardProps {
  title: string;
  likeCount: number;
  createdAt: string;
  id: string;
  create_user_id?: string;
  current_user_id?: string;
}

function MangoCupCard({
  title,
  likeCount,
  createdAt,
  id,
  create_user_id,
  current_user_id,
}: MangoCupCardProps) {
  const [mangoCupCardData, setMangoCupCardData] =
    useState<MangoCupCardImage[]>();
  const [isShowOption, setIsShowOption] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOptionButton = () => {
    setIsShowOption((prev) => !prev);
  };

  const handleClickDeleteButton = async () => {
    if (create_user_id != current_user_id)
      return toast.error("권한이 없습니다.");
    console.log("삭제 버튼 누름");
    const { error } = await supabase
      .from("mango_cup_tournaments")
      .delete()
      .eq("id", id);

    if (error) return console.log("handleClickDeleteButton error", error);
    toast.success("삭제 성공");
    window.location.reload();
  };

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from("mango_cup_entries")
        .select("imageURL")
        .eq("mango_cup_tournament_id", id)
        .limit(2);
      if (error) {
        console.error("Error fetching tournaments:", error);
      } else {
        setMangoCupCardData(data);
      }
    })();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isShowOption &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsShowOption(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isShowOption]);

  return (
    <div className="w-full bg-white rounded-3xl p-3 shadow-xl duration-100">
      <div className="w-full aspect-video rounded-2xl flex overflow-hidden">
        {mangoCupCardData ? (
          <>
            <img
              src={mangoCupCardData[0].imageURL}
              alt="firstImage"
              className="w-1/2 h-full object-cover"
            />
            <img
              src={mangoCupCardData[1].imageURL}
              alt="secondImage"
              className="w-1/2 h-full object-cover"
            />
          </>
        ) : (
          <>
            <div className="w-1/2 h-full bg-[#999] border-r-2 border-[#666]"></div>
            <div className="w-1/2 h-full bg-[#999]"></div>
          </>
        )}
      </div>
      <div className="ml-3 mr-1 mt-3 flex items-center justify-between">
        <div>
          <p className="text-2xl duration-100">{title}</p>
          <p className="mt-1 text-xs duration-100">
            {likeCount}k {createdAt.slice(9, 10)}일전
          </p>
        </div>
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={handleClickOptionButton}
            className="w-8 h-8 p-2 rounded-full cursor-pointer bg-white hover:brightness-95 active:brightness-90"
          >
            <SlOptionsVertical className="text-black w-4 h-4 duration-100" />
          </button>
          {isShowOption && (
            <ul className="absolute top-8 -left-6 rounded-md pointer-events-auto bg-[#f9f9f9] py-2 shadow-lg">
              <li className="px-4 py-1 text-sm cursor-pointer bg-[#f9f9f9] whitespace-nowrap hover:brightness-95">
                랭킹보기
              </li>
              <li className="px-4 py-1 text-sm cursor-pointer bg-[#f9f9f9] whitespace-nowrap hover:brightness-95">
                공유하기
              </li>
              <li
                className="px-4 py-1 text-sm cursor-pointer bg-[#f9f9f9] whitespace-nowrap hover:brightness-95"
                onClick={handleClickDeleteButton}
              >
                삭제하기
              </li>
            </ul>
          )}
        </div>
      </div>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          duration: 2000,
        }}
      />
    </div>
  );
}

export default MangoCupCard;
