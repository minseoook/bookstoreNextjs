"use client";

import React, { useState } from "react";
import styled from "./login.module.css";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    try {
      e.preventDefault();

      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      console.log(res);
      if (res?.error) {
        alert("아이디와 비밀번호가 일치하지 않습니다.");
      } else {
        router.push("/");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className={styled.container}>
      <div className={styled.wrapper}>
        <h2>로그인</h2>
        <p>저희 북마켓에 오신걸 환영합니다</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="이메일을 입력해 주세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">로그인</button>
        </form>

        <p>
          아직 회원이 아니신가요? <Link href="/register">회원가입</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
