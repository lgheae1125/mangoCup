"use client";

import { supabase } from "@/supabase/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useRef, useState } from "react";

function SigninPage() {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const [formErrorMassage, setFormErrorMassage] = useState<string>("");

  const handleSignInForm = async (e: FormEvent<HTMLFormElement>) => {
    setFormErrorMassage("");
    e.preventDefault();
    if (!emailInputRef.current?.value)
      return setFormErrorMassage("이메일을 입력해주세요.");
    if (
      !emailInputRef.current.value.match(
        "^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
      )
    )
      return setFormErrorMassage("이메일 형식이 잘못 되었습니다.");
    if (!passwordInputRef.current?.value)
      return setFormErrorMassage("비밀번호를 입력해주세요.");
    if (
      !passwordInputRef.current.value.match(
        /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/
      )
    )
      return setFormErrorMassage("비밀번호에 형식이 잘못 되었습니다.");

    // supabase에 로그인 요청 보내기
    const { data, error } = await supabase.auth.signInWithPassword({
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    });
    if (error) return console.log(error);
    if (!data.user) return console.log("로그인 실패!", error);

    alert("로그인 성공!"); //나중에 토스트로 변경
    router.replace("/");
  };

  return (
    <div className="w-[600px] mx-auto flex flex-col mt-20">
      <h1 className="text-secondary text-6xl text-center font-bold">로그인</h1>
      <form onSubmit={handleSignInForm} className="mt-16 w-full flex flex-col">
        {!!formErrorMassage ? (
          <p className="ml-auto mr-2 mb-1 text-sm text-red-500">
            {formErrorMassage}
          </p>
        ) : null}
        <p className="ml-2 mb-2 font-medium text-secondary">이메일</p>
        <input
          className="text-secondary text-lg outline-none px-5 py-3 rounded-full bg-white shadow-md mb-6 duration-75 hover:bg-[#eee] focus:bg-[#eee]"
          type="text"
          placeholder="이메일을 입력해주세요."
          ref={emailInputRef}
        />
        <p className="ml-2 mb-2 font-medium text-secondary">
          비밀번호
          <span className="text-sm text-gray-400">
            {
              "(8글자 이상 특수문자 포함 ! # $ % & ( ) * + , - . / : ; < = > ? @ [ ₩ ] ^ _ { | } ~)"
            }
          </span>
        </p>
        <input
          className="text-secondary text-lg outline-none px-5 py-3 rounded-full bg-white shadow-md mb-6 duration-75 hover:bg-[#eee] focus:bg-[#eee]"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          ref={passwordInputRef}
        />
        <button
          type="submit"
          className="mt-2 text-secondary text-lg p-3 bg-primary rounded-full font-medium cursor-pointer shadow-md mb-4 duration-75 hover:brightness-[0.98] active:brightness-95"
        >
          로그인
        </button>
      </form>
      <Link
        href={"/signup"}
        className="text-[#666] underline text-center text-sm"
      >
        회원가입
      </Link>
    </div>
  );
}

export default SigninPage;
