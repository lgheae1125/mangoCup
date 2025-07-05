import React from "react";

function MangoCupCardSkeleton() {
  return (
    <div className="w-[calc((100%-3*32px)/4)] bg-white rounded-3xl p-3 shadow-xl">
      <div className="w-full aspect-video rounded-2xl flex overflow-hidden">
        <div className="w-1/2 h-full bg-[#bbb] border-r-2 border-[#b3b3b3]"></div>
        <div className="w-1/2 h-full bg-[#bbb]"></div>
      </div>
      <div className="mt-2 h-8 w-full bg-[#bbb] rounded-sm"></div>
      <div className="mt-2 h-4 w-full bg-[#bbb] rounded-sm"></div>
    </div>
  );
}

export default MangoCupCardSkeleton;
