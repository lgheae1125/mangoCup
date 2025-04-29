import React from "react";

function PlayPage() {
  return (
    <header className="bg-white w-full h-screen fixed">
      <div className="bg-yellow-300 flex items-center gap-x-50">
        <div className="pl-20 py-5 flex items-center gap-x-5">
          <div>
            <img
              src="/images/Mango_icon.png"
              alt="Mango_icon"
              className="w-20"
            />
          </div>
          <div>
            <h1 className="text-gray-800 font-bold text-3xl">MANGO</h1>
          </div>
        </div>
        <div className="bg-white border-2 border-neutral-500 flex items-center gap-x-120 border-b border-t border-b-neutral-500 rounded-sm">
          <p className="text-neutral-400 py-3 pl-3 pr-3">
            월드컵 제목 또는 인물 이름으로 검색하세요.
          </p>
          <div className="bg-neutral-600 p-3  ">검색</div>
        </div>
      </div>
    </header>
  );
}

export default PlayPage;
