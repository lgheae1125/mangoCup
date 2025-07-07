"use client";

import { supabase } from "@/supabase/client";
import React, { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { GoPlus } from "react-icons/go";

function CreateMangoCupPage() {
  const [candidates, setCandidates] = useState<
    { image: string; name: string }[]
  >([]);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const mangoTitleInput = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setPreviewUrl(null);
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleCreateCandidate = () => {
    const file = imageInputRef.current?.files?.[0];
    const name = nameInputRef.current?.value.trim();

    if (!file || !name) {
      toast.error("이미지와 제목을 모두 입력해주세요.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setCandidates((prev) => [
        ...prev,
        { image: reader.result as string, name },
      ]);

      if (imageInputRef.current) imageInputRef.current.value = "";
      if (nameInputRef.current) nameInputRef.current.value = "";
      setPreviewUrl("");
    };

    reader.readAsDataURL(file);
  };

  const handleDeleteCandidate = (image: string) => {
    setCandidates((candidates) =>
      candidates.filter((candidate) => candidate.image !== image)
    );
  };

  const handleCreateMangoCup = async () => {
    if (!mangoTitleInput.current?.value)
      return toast.error("제목을 입력해주세요.");
    if (candidates.length < 2)
      return toast.error("후보를 2개 이상 생성해주세요.");

    console.log("1단계 - tournament insert 요청 시작");
    const { data: tournamentInsertData, error: tournamentInsertError } =
      await supabase
        .from("mango_cup_tournaments")
        .insert({ title: mangoTitleInput.current?.value })
        .select();
    console.log("2단계 - tournament insert 완료", tournamentInsertData);

    if (tournamentInsertError) return console.log(tournamentInsertError);
    if (!tournamentInsertData || tournamentInsertData.length === 0) return;

    const tournamentId = tournamentInsertData[0].id;

    for (const candidate of candidates) {
      const { error } = await supabase
        .from("mango_cup_entries")
        .insert({
          imageURL: candidate.image,
          candidateName: candidate.name,
          mango_cup_tournament_id: tournamentId,
        })
        .select();

      if (error) return console.error("후보 삽입 에러", error.message);
      toast.success("이상형 월드컵이 생성되었습니다.");
      window.location.reload();
    }
  };

  return (
    <>
      <h1 className="text-secondary text-2xl font-semibold">
        이상형 월드컵 생성하기
      </h1>
      <article className="mt-8 px-4">
        <p className="ml-1 text-lg text-[#999] font-medium">
          이상형 월드컵 제목
        </p>
        <input
          type="text"
          className="mt-[6px] border border-[#ddd] outline-0 text-lg text-[#999] px-2 py-[10px] w-full rounded-lg"
          ref={mangoTitleInput}
        />
        <p className="ml-1 mt-4 text-lg text-[#999] font-medium">
          월드컵 후보 생성(2개 이상 생성 필요)
        </p>
        <div className="mt-[6px] py-5 px-7 flex gap-x-6 border border-[#ddd] rounded-lg">
          <div className="flex flex-col w-50">
            <div className="flex justify-between px-1 items-end">
              <p className="text-[#999] font-medium">후보 이미지</p>
              <button
                className="bg-secondary text-white text-xs font-semibold py-1 px-2 rounded-sm duration-75 hover:brightness-95 hover:cursor-pointer active:brightness-90"
                onClick={handleCreateCandidate}
              >
                추가
              </button>
            </div>
            <label
              htmlFor="candidate-img"
              className="w-50 h-50 mt-2 border-dashed border-2 border-[#ddd] cursor-pointer relative duration-75 bg-white hover:brightness-97 active:brightness-95"
            >
              {previewUrl ? (
                <img
                  src={previewUrl}
                  alt="preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <GoPlus className="text-6xl text-[#999] absolute top-1/2 left-1/2 -translate-1/2" />
              )}
            </label>

            <input
              type="file"
              id="candidate-img"
              className="hidden"
              ref={imageInputRef}
              onChange={handleImageChange}
            />
            <input
              type="text"
              className="text-sm text-[#999] font-medium mt-2 outline-none pt-1 px-2 bg-[#f4f4f4]"
              placeholder="후보 제목"
              ref={nameInputRef}
            />
          </div>
          {candidates
            ? candidates.map((candidate, idx) => (
                <div key={idx} className="flex flex-col w-50">
                  <div className="flex justify-between px-1 items-end">
                    <p className="font-medium">후보 이미지</p>
                    <button
                      className="bg-red-600 text-white text-xs font-semibold py-1 px-2 rounded-sm duration-75 hover:brightness-95 hover:cursor-pointer active:brightness-90"
                      onClick={() => handleDeleteCandidate(candidate.image)}
                    >
                      삭제
                    </button>
                  </div>
                  <div className="w-50 h-50 mt-2 cursor-pointer duration-75 hover:brightness-97 active:brightness-95">
                    <img
                      src={candidate.image}
                      alt={candidate.name}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                  </div>
                  <p className="text-sm font-medium mt-2 outline-none pt-1 px-2">
                    {candidate.name}
                  </p>
                </div>
              ))
            : null}
        </div>
        <button
          className="bg-primary text-secondary font-bold tracking-wide text-2xl rounded-md py-2 px-20 mt-10 mx-auto block cursor-pointer duration-75 hover:brightness-97 active:brightness-95"
          onClick={handleCreateMangoCup}
        >
          생성하기
        </button>
      </article>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          duration: 2000,
        }}
      />
    </>
  );
}

export default CreateMangoCupPage;
