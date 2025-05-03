import RankCard from "@/components/RankCard";
import React from "react";

function RankPage() {
  return (
    <>
      <div>
        <div className="">
          <p className="p-3">
            애니메이션 이상형 월드컵 32강 랭킹 (1시간마다 갱신됩니다.)
          </p>
        </div>
        <div className="border-neutral-200 border-1">
          <div className="py-3 flex items-center">
            <input
              type="number"
              className="bg-white border-neutral-200rder-1 w-10 rounded-sm"
            />
            <p>씩 보기</p>
            <p className="ml-auto">검색 :</p>
            <input
              type="text"
              className="bg-white border-neutral-200rder-1 w-50"
            />
          </div>
        </div>
      </div>
      <table className=" w-full">
        <thead>
          <tr className="flex items-center text-left">
            <th className="border-neutral-200 border-1 pt-3 pl-3 pb-10 w-[5%] font-semibold text-neutral-600">
              순위
            </th>
            <th className="border-neutral-200 border-1 pt-3 pl-3 pb-10 w-[10%] font-semibold text-neutral-600">
              이미지
            </th>
            <th className="border-neutral-200 border-1  pt-3  pl-3 pb-10 w-[45%] font-semibold text-neutral-600">
              이름
            </th>
            <th className="border-neutral-200 border-1 pt-3 pl-3 pb-4 w-[20%] font-semibold text-neutral-600">
              우승 비율 <br />
              (최종 우승 횟수 / 전체 게임 수)
            </th>
            <th className="border-neutral-200 border-1  pt-3  pl-3 pb-4 w-[20%] font-semibold text-neutral-600">
              승률
              <br />
              (승리 횟수 / 전체 1:1 대결 수)
            </th>
          </tr>
        </thead>
        <tbody>
          <RankCard
            index={1}
            image="이미지"
            title="진격의거인"
            championshipRatio={16.09}
            winRatio={82.18}
          />
        </tbody>
      </table>
    </>
  );
}

export default RankPage;
