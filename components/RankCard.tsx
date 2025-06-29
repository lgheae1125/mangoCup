import React from "react";

interface RankCardProps {
  index: number;
  image: string;
  title: string;
  championshipRatio: number;
  winRatio: number;
}

function RankCard({
  index,
  image,
  title,
  championshipRatio,
  winRatio,
}: RankCardProps) {
  return (
    <tr className="flex items-center text-left h-[90px] ">
      <td className="border-neutral-200 border-1 pt-3 pl-3 pb-10 w-[5%] h-full text-sm font-semibold text-neutral-600">
        {index}
      </td>
      <td className="border-neutral-200 border-1 w-[10%] h-full bg-neutral-500">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </td>
      <td className="border-neutral-200 border-1  pt-3  pl-3 pb-10 w-[45%] h-full text-sm font-semibold text-neutral-600">
        {title}
      </td>
      <td className="border-neutral-200 border-1 px-3 w-[20%] h-full pt-2">
        <p className="text-sm font-semibold text-neutral-600">
          {championshipRatio}%
        </p>
        <div className="w-full bg-amber-200 h-7 rounded-sm overflow-hidden">
          <div
            className={`w-[${championshipRatio}%] bg-amber-300 h-full`}
          ></div>
        </div>
      </td>
      <td className="border-neutral-200 border-1 px-3 w-[20%] h-full pt-2">
        <p className="text-sm font-semibold text-neutral-600">{winRatio}</p>
        <div className="w-full bg-amber-200 h-7 rounded-sm overflow-hidden">
          <div className={`w-[${winRatio}%] bg-amber-300 h-full`}></div>
        </div>
      </td>
    </tr>
  );
}

export default RankCard;
