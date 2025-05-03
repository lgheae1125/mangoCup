import React from "react";
import { SlOptionsVertical } from "react-icons/sl";

function MangoCupCard() {
  return (
    <div className="w-[430px] bg-white rounded-3xl p-3 shadow-md">
      <div className="w-full aspect-video bg-gray-500 rounded-2xl"></div>
      <div className="mx-3 mt-3 flex items-center justify-between">
        <div>
          <p className="text-2xl">우리집에 고양이 보고갈래?</p>
          <p className="mt-1 text-xs">좋아요 5.8k 6일전</p>
        </div>
        <SlOptionsVertical className="text-black w-5 h-5" />
      </div>
    </div>
  );
}

export default MangoCupCard;
