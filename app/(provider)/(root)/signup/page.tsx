"use client";

import { supabase } from "@/supabase/client";
import { TablesInsert } from "@/supabase/database.types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function SignupPage() {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const nickNameInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const passwordCheckInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const [formErrorMassage, setFormErrorMassage] = useState<string>("");

  const handleSignupForm = async (e: FormEvent<HTMLFormElement>) => {
    setFormErrorMassage("");
    e.preventDefault();
    if (!nickNameInputRef.current?.value)
      return setFormErrorMassage("닉네임을 입력해주세요.");
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
    if (!passwordCheckInputRef.current?.value)
      return setFormErrorMassage("비밀번호 확인을 입력해주세요.");
    if (
      !passwordInputRef.current.value.match(
        /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/
      )
    )
      return setFormErrorMassage("비밀번호에 형식이 잘못 되었습니다.");
    if (passwordInputRef.current.value !== passwordCheckInputRef.current.value)
      return setFormErrorMassage("비밀번호가 다릅니다.");

    // supabase에 회원가입 요청 보내기
    const { data, error } = await supabase.auth.signUp({
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    });
    if (error?.message === "User already registered") {
      setFormErrorMassage("이미 가입된 이메일입니다. 로그인 해주세요.");
      return;
    }
    if (!data.user) return;

    // supabase에 내가 만든 user테이블에 값 넣어주기
    const userProfileData: TablesInsert<"users"> = {
      id: data.user.id,
      email: data.user.email!,
      mango_cup_tournament_id: [],
      nick_name: nickNameInputRef.current.value,
      profile_img: null,
    };

    await supabase.from("users").insert(userProfileData);
    toast.success("회원가입 성공!");
    router.replace("/");
  };

  return (
    <div className="w-[600px] mx-auto flex flex-col mt-20">
      <h1 className="text-secondary text-6xl text-center font-bold">
        회원가입
      </h1>
      <form onSubmit={handleSignupForm} className="mt-16 w-full flex flex-col">
        {!!formErrorMassage ? (
          <p className="ml-auto mr-2 mb-1 text-sm text-red-500">
            {formErrorMassage}
          </p>
        ) : null}
        <p className="ml-2 mb-2 font-medium text-secondary">닉네임</p>
        <input
          className="text-secondary text-lg outline-none px-5 py-3 rounded-full bg-white shadow-md mb-6 duration-75 hover:bg-[#eee] focus:bg-[#eee]"
          type="text"
          placeholder="닉네임을 입력해주세요."
          ref={nickNameInputRef}
        />
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
        <p className="ml-2 mb-2 font-medium text-secondary">비밀번호 확인</p>
        <input
          className="text-secondary text-lg outline-none px-5 py-3 rounded-full bg-white shadow-md mb-6 duration-75 hover:bg-[#eee] focus:bg-[#eee]"
          type="password"
          placeholder="비밀번호 확인을 입력해주세요."
          ref={passwordCheckInputRef}
        />
        <button
          type="submit"
          className="mt-2 text-secondary text-lg p-3 bg-primary rounded-full font-medium cursor-pointer shadow-md mb-4 duration-75 hover:brightness-[0.98] active:brightness-95"
        >
          회원가입
        </button>
      </form>
      <Link
        href={"/signin"}
        className="text-[#666] underline text-center text-sm"
      >
        로그인
      </Link>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          duration: 2000,
        }}
      />
    </div>
  );
}

export default SignupPage;
