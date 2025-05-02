import React from "react";

interface ResultCommentProps {
  finalSelectionElement: string;
  comment: string;
}

function ResultComment({ finalSelectionElement, comment }: ResultCommentProps) {
  return (
    <div className="mt-2">
      <div className="flex items-center">
        <p className="font-bold text-lg">{finalSelectionElement}</p>
        <p className="text-sm text-gray-500 ml-2">(익명)</p>
      </div>
      <p className="text-sm leading-4.5">{comment}</p>
    </div>
  );
}

export default ResultComment;
