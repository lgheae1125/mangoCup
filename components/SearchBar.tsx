// "use client";

// import { useEffect, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { IoSearch } from "react-icons/io5";
// import { supabase } from "@/supabase/client";

// type Tournament = {
//   id: string;
//   title: string;
//   description?: string;
//   date?: string;
// };

// export default function SearchAndList() {
//   const [searchInput, setSearchInput] = useState("");
//   const [results, setResults] = useState<Tournament[]>([]);
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   const searchTerm = searchParams.get("search") || "";

//   // 검색어 초기값 세팅 (URL 쿼리 있을 때)
//   useEffect(() => {
//     setSearchInput(searchTerm);
//   }, [searchTerm]);

//   const handleSearch = () => {
//     if (searchInput.trim()) {
//       router.push(`/?search=${encodeURIComponent(searchInput.trim())}`);
//     }
//   };

//   useEffect(() => {
//     if (!searchTerm) {
//       setResults([]);
//       return;
//     }

//     (async () => {
//       const { data, error } = await supabase
//         .from("mango_cup_tournaments")
//         .select("*")
//         .ilike("title", `%${searchTerm}%`);

//       if (error) {
//         console.error("Error fetching data:", error);
//         setResults([]);
//       } else {
//         setResults(data as Tournament[]);
//       }
//     })();
//   }, [searchTerm]);

//   return (
//     <div className="p-4 space-y-4">
//       <div className="h-11 flex w-[40%] shrink-1 rounded-full bg-[#fff] shadow-md focus-within:brightness-95 duration-200">
//         <input
//           className="flex-1 h-full text-[#777] text-lg font-medium pl-[18px] outline-0 rounded-l-full"
//           type="text"
//           placeholder="월드컵 제목 또는 인물 이름으로 검색하세요."
//           value={searchInput}
//           onChange={(e) => setSearchInput(e.target.value)}
//           onKeyDown={(e) => {
//             if (e.key === "Enter") handleSearch();
//           }}
//         />
//         <button
//           className="h-full pr-4 text-[#aaa] font-bold text-2xl rounded-r-full"
//           onClick={handleSearch}
//           aria-label="검색 버튼"
//         >
//           <IoSearch />
//         </button>
//       </div>

//       <div className="space-y-2">
//         {results.length === 0 && searchTerm && (
//           <p className="text-gray-500">검색 결과가 없습니다.</p>
//         )}
//         {results.map((item) => (
//           <div key={item.id} className="p-2 border rounded">
//             <p className="font-semibold">{item.title}</p>
//             {item.description && <p>{item.description}</p>}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
