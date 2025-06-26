"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

function MyMangoCupNavi() {
  const currentPathname = usePathname();
  const [isCreatePage, setIsCreatePage] = useState<boolean>(true);
  useEffect(() => {
    if (currentPathname === "/create-mango-cup") {
      setIsCreatePage(true);
    } else {
      setIsCreatePage(false);
    }
  }, [currentPathname]);

  return (
    <div className="mb-5 flex gap-2">
      {isCreatePage ? (
        <>
          <Link href="create-mango-cup" className="text-sm text-black">
            생성하기
          </Link>
          <Link href="delete-mango-cup" className="text-sm text-[#aaa]">
            삭제하기
          </Link>
        </>
      ) : (
        <>
          <Link href="create-mango-cup" className="text-sm text-[#aaa]">
            생성하기
          </Link>
          <Link href="delete-mango-cup" className="text-sm text-black">
            삭제하기
          </Link>
        </>
      )}
    </div>
  );
}

export default MyMangoCupNavi;
