import React from "react";
import { SlOptionsVertical } from "react-icons/sl";

interface MangoCupCardProps {
  title: string;
  likeCount: number;
  createdAt?: string;
  firstImageUrl: string;
  secondImageUrl: string;
  time: string;
}

function MangoCupCard({
  title,
  likeCount,
  firstImageUrl,
  secondImageUrl,
  time,
}: MangoCupCardProps) {
  return (
    <div className="w-[430px] bg-white rounded-3xl p-3 shadow-md">
      <div className="w-full aspect-video rounded-2xl flex">
        <img
          src={firstImageUrl}
          alt="firstImage"
          className="w-1/2 h-full object-cover"
        />
        <img
          src={secondImageUrl}
          alt="secondImage"
          className="w-1/2 h-full object-cover"
        />
      </div>
      <div className="mx-3 mt-3 flex items-center justify-between">
        <div>
          <p className="text-2xl">{title}</p>
          <p className="mt-1 text-xs">
            {likeCount}k {time.slice(9, 10)}일전
          </p>
        </div>
        <SlOptionsVertical className="text-black w-5 h-5" />
      </div>
    </div>
  );
}

export default MangoCupCard;
