import React from "react";

function PlayPage() {
  return (
    <>
      <div className="relative">
        <p className="absolute top-10 left-1/2 -translate-x-1/2 text-3xl text-white z-50 -translate-y-5 bg-black/70">
          애니메이션 이상형 월드컵 32강 1/16
        </p>
        <p className="absolute top-10 left-1/2 -translate-x-93 text-3xl text-white z-50 translate-y-180 bg-black/70">
          진격의 거인
        </p>
        <p className="absolute top-10 left-1/2 translate-x-60 text-3xl text-white z-50 translate-y-180 bg-black/70">
          귀멸의 칼날
        </p>
        <div className="flex w-full h-full">
          <div className="relative w-1/2  flex flex-row-reverse">
            <img
              src="/images/img1.webp"
              alt="진격의 거인"
              className="h-[calc(100vh-100px)] absolute"
            />
          </div>
          <div className="relative w-1/2">
            <img
              src="/images/img2.webp"
              alt="귀멸의 칼날"
              className="h-[calc(100vh-100px)] absolute"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PlayPage;
