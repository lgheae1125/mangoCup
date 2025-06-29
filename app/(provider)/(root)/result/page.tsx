"use client";

import ResultComment from "@/components/resultComment";
import { useChampionshipStore } from "@/zustand/tournamentPlayStore";
import Link from "next/link";
import React from "react";

function ResultPage() {
  const championshipEntry = useChampionshipStore(
    (state) => state.championshipEntry
  );
  return (
    <div className="flex">
      <section className="w-1/2 h-[calc(100vh-100px)] bg-black flex justify-center">
        <div className="w-full h-full bg-contain bg-no-repeat bg-center flex flex-col items-center relative">
          {championshipEntry ? (
            <img
              src={championshipEntry.imageURL}
              alt=""
              className="h-[calc(100vh-100px)] absolute"
            />
          ) : null}

          <p className="text-white text-5xl bg-black/75 px-4 py-4 w-full text-center wrap-anywhere absolute">
            도라에몽 최애 사진 월드컵
          </p>
          <p className="text-white text-4xl bg-black/75 px-4 py-4 absolute bottom-32">
            윙크하는 도라에몽
          </p>
        </div>
      </section>
      <section className="w-1/2 h-[calc(100vh-100px)] bg-white p-4">
        {!!championshipEntry ? (
          <Link
            href={{
              pathname: "/rank",
              query: { id: championshipEntry?.mango_cup_tournament_id },
            }}
            className="bg-secondary text-white font-bold tracking-wide text-lg rounded-md py-2 px-4 mb-3 hover:brightness-90 hover:cursor-pointer active:brightness-75 inline-block"
          >
            랭킹보기
          </Link>
        ) : (
          <div className="bg-secondary text-white font-bold tracking-wide text-lg rounded-md py-2 px-4 mb-3 hover:brightness-90 hover:cursor-pointer active:brightness-75 inline-block">
            랭킹보기
          </div>
        )}
        <p className="text-2xl font-semibold text-secondary mb-4">
          사용자 의견
        </p>
        <div className="px-2">
          <p className="font-bold text-secondary mb-2">한마디 남기기</p>
          <div className="flex flex-col shadow-secondary rounded-md overflow-hidden border-2 border-secondary">
            <textarea
              placeholder="한마디를 남겨주세요."
              className="w-full outline-0 py-2 px-2 bg-white h-20"
            />
            <button className="w-full bg-secondary text-white font-semibold py-2 hover:brightness-90 hover:cursor-pointer active:brightness-75">
              글쓰기
            </button>
          </div>
          <div className="max-h-[calc(100vh-400px)] overflow-y-auto mt-2 pb-4">
            <ResultComment
              finalSelectionElement="단팥빵 도라에몽"
              comment="단팥빵 도라에몽 안고른 사람은 도라에몽 다시 보고 와라"
            />
            <ResultComment
              finalSelectionElement="단팥빵 도라에몽"
              comment="단팥빵 도라에몽 안고른 사람은 도라에몽 다시 보고 와라"
            />
            <ResultComment
              finalSelectionElement="단팥빵 도라에몽"
              comment="단팥빵 도라에몽 안고른 사람은 도라에몽 다시 보고 와라"
            />
            <ResultComment
              finalSelectionElement="단팥빵 도라에몽"
              comment="단팥빵 도라에몽 안고른 사람은 도라에몽 다시 보고 와라"
            />
            <ResultComment
              finalSelectionElement="단팥빵 도라에몽"
              comment="단팥빵 도라에몽 안고른 사람은 도라에몽 다시 보고 와라"
            />
            <ResultComment
              finalSelectionElement="단팥빵 도라에몽"
              comment="단팥빵 도라에몽 안고른 사람은 도라에몽 다시 보고 와라"
            />
            <ResultComment
              finalSelectionElement="단팥빵 도라에몽"
              comment="단팥빵 도라에몽 안고른 사람은 도라에몽 다시 보고 와라"
            />
            <ResultComment
              finalSelectionElement="단팥빵 도라에몽"
              comment="단팥빵 도라에몽 안고른 사람은 도라에몽 다시 보고 와라"
            />
            <ResultComment
              finalSelectionElement="단팥빵 도라에몽"
              comment="단팥빵 도라에몽 안고른 사람은 도라에몽 다시 보고 와라"
            />
            <ResultComment
              finalSelectionElement="단팥빵 도라에몽"
              comment="단팥빵 도라에몽 안고른 사람은 도라에몽 다시 보고 와라"
            />
            <ResultComment
              finalSelectionElement="단팥빵 도라에몽"
              comment="단팥빵 도라에몽 안고른 사람은 도라에몽 다시 보고 와라"
            />
            <ResultComment
              finalSelectionElement="단팥빵 도라에몽"
              comment="단팥빵 도라에몽 안고른 사람은 도라에몽 다시 보고 와라"
            />
            <ResultComment
              finalSelectionElement="단팥빵 도라에몽"
              comment="단팥빵 도라에몽 안고른 사람은 도라에몽 다시 보고 와라"
            />
            <ResultComment
              finalSelectionElement="단팥빵 도라에몽"
              comment="단팥빵 도라에몽 안고른 사람은 도라에몽 다시 보고 와라"
            />
            <ResultComment
              finalSelectionElement="단팥빵 도라에몽"
              comment="단팥빵 도라에몽 안고른 사람은 도라에몽 다시 보고 와라"
            />
            <ResultComment
              finalSelectionElement="단팥빵 도라에몽"
              comment="단팥빵 도라에몽 안고른 사람은 도라에몽 다시 보고 와라"
            />
            <ResultComment
              finalSelectionElement="단팥빵 도라에몽"
              comment="단팥빵 도라에몽 안고른 사람은 도라에몽 다시 보고 와라"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ResultPage;
