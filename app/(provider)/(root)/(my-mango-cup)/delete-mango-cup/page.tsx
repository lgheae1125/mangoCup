import GetMyMangoCupList from "@/components/GetMyMangoCupList";

function DeleteMangoCupPage() {
  return (
    <>
      <h1 className="text-secondary text-2xl font-semibold">
        이상형 월드컵 삭제하기
      </h1>
      <article className="mt-8 px-4">
        <p className="ml-1 text-lg text-[#999] font-medium">
          나의 이상형 월드컵
        </p>
        <GetMyMangoCupList />
      </article>
    </>
  );
}

export default DeleteMangoCupPage;
